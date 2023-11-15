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
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.5);
`;

const boxVariants = {
  initial: { opacity: 0, scale: 0, rotateZ: 45 },
  visible: { opacity: 1, scale: 1, rotateZ: 0 },
  leaving: { opacity: 0, scale: 0, y: 100 },
};

function App() {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Wrapper>
      <button onClick={() => setIsShowing((pre) => !pre)}>click</button>
      <AnimatePresence>
        {isShowing && (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
