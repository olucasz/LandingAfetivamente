import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import Home from "./pages/Home";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <Home />
      </LazyMotion>
    </MotionConfig>
  );
}

export default App;
