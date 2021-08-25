const duration = 0.8;

export const fadeUpTransition = {
  duration: duration,
  ease: [0.6, 0.01, -0.05, 0.9],
};

export const scaleTransition = {
  duration: duration * 1.25,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export const fadeUpVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ...fadeUpTransition,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      ...fadeUpTransition,
    },
  },
};

export const scaleDownVariants = {
  initial: { scale: 1.1 },
  animate: {
    scale: 1,
    transition: {
      ...scaleTransition,
    },
  },
};
