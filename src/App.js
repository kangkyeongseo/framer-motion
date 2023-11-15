import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  tap: { scale: 1, borderRadius: "100px" },
  drag: { backgroundColor: "rgb(46, 204, 113)", transition: { duration: 10 } },
};
function App() {
  const x = useMotionValue(0);
  const { scrollY, scrollYProgress } = useScroll();
  const rotate = useTransform(x, [-800, 800], [360, -360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(0,210,238), rgb(0,83,238))",
      "linear-gradient(135deg, rgb(238,0,153), rgb(221,0,238))",
      "linear-gradient(135deg, rgb(0,238,155), rgb(238,178,0))",
    ]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  useMotionValueEvent(x, "change", () => {
    console.log(gradient.get());
  });
  useMotionValueEvent(scrollY, "change", () => {
    console.log(scrollY.get(), scrollYProgress.get());
  });
  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotate, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
