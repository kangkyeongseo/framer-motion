import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.4);
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
  const biggerBoxRef = useRef(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={0}
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          whileHover="hover"
          whileTap="tap"
          whileDrag="drag"
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
