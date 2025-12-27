// Animaciones de fade in
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 },
};

export const fadeInUpDelayed = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
});

export const fadeInUpSlow = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 },
};

// Animaciones de hover/interacción
export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export const liftOnHover = {
  whileHover: { y: -8 },
};

export const scaleAndLiftOnHover = {
  whileHover: { scale: 1.05, y: -2 },
  whileTap: { scale: 0.95 },
};

export const subtleScaleOnHover = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.95 },
};

// Animaciones continuas
export const bounceInfinite = {
  animate: { y: [0, 10, 0] },
  transition: { duration: 2, repeat: Infinity },
};

export const pulseInfinite = (duration: number, scaleRange: number[] = [1, 1.1, 1], opacityRange: number[] = [0.3, 0.5, 0.3]) => ({
  animate: {
    scale: scaleRange,
    opacity: opacityRange,
  },
  transition: {
    duration,
    repeat: Infinity,
    ease: 'easeInOut',
  },
});

// Configuraciones de viewport para scroll animations
export const viewportOnce = {
  once: true,
};

export const viewportWithMargin = {
  once: true,
  margin: '-100px',
};

// Stagger animations para listas
export const staggerChildren = (delayBetween: number = 0.1) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { staggerChildren: delayBetween },
});

export const staggerItem = (index: number, delayPerItem: number = 0.1) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: index * delayPerItem },
});
