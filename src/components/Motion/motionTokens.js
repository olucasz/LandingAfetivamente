export const motionEase = [0.22, 1, 0.36, 1];

export const defaultViewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -10% 0px",
};

export function fadeUp(distance = 24) {
  return {
    hidden: {
      opacity: 0,
      y: distance,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
}

export function staggerContainer(stagger = 0.12, delayChildren = 0) {
  return {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
}

export function floatTransition({
  distance = 10,
  duration = 6,
  delay = 0,
  rotate = 0.6,
} = {}) {
  return {
    animate: {
      y: [0, -distance, 0],
      rotate: [0, rotate, 0],
    },
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };
}
