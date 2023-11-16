import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.5);
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;

  background-color: #00a5ff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.5);
`;

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const toggleClick = () => setIsClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClick}>
      <Box>
        {isClicked && (
          <Circle layoutId="circle" style={{ borderRadius: "50%", scale: 2 }} />
        )}
      </Box>
      <Box>
        {!isClicked && <Circle layoutId="circle" style={{ borderRadius: 0 }} />}
      </Box>
    </Wrapper>
  );
}

export default App;
