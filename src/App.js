import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.5);
`;

const boxVariants = {
  entry: (isBack) => ({
    opacity: 0,
    scale: 0,
    x: isBack ? -300 : 300,
    rotateZ: isBack ? -10 : 10,
  }),
  center: {
    opacity: 1,
    scale: 1,
    x: 0,
    rotateZ: 0,
    transition: { duration: 0.3 },
  },
  exit: (isBack) => ({
    opacity: 0,
    scale: 0,
    x: isBack ? 300 : -300,
    rotateZ: isBack ? 10 : -10,
    transition: { duration: 0.3 },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [isBack, setIsBack] = useState(false);
  const nextVisible = () => {
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
    setIsBack(false);
  };
  const preVisible = () => {
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
    setIsBack(true);
  };
  return (
    <Wrapper>
      <AnimatePresence mode="wait" custom={isBack}>
        <Box
          key={visible}
          custom={isBack}
          variants={boxVariants}
          initial="entry"
          animate="center"
          exit="exit"
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={preVisible}>pre</button>
      <button onClick={nextVisible}>next</button>
    </Wrapper>
  );
}

export default App;
