import { useMemo } from 'react';

interface UseBackgroundGeneratorProps {
  primaryColor: string;
  secondaryColor: string;
  particleIntensity: number;
  animationSpeed: number;
}

interface ParticleConfig {
  id: number;
  size: number;
  left: string;
  top: string;
  color: string;
  duration: number;
  delay: number;
  opacityRange: number[];
  scaleRange: number[];
}

const MAX_PARTICLES = 24;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const pseudoRandom = (seed: number) => {
  const value = Math.sin(seed) * 10000;
  return value - Math.floor(value);
};

export const useBackgroundGenerator = ({
  primaryColor,
  secondaryColor,
  particleIntensity,
  animationSpeed,
}: UseBackgroundGeneratorProps) => {
  const intensityFactor = clamp(particleIntensity / 100, 0, 1);
  const speedFactor = clamp(animationSpeed, 0.4, 3);
  const particleCount = Math.round(intensityFactor * MAX_PARTICLES);

  const gradientFrames = useMemo(
    () => [
      `radial-gradient(circle at 50% 50%, ${primaryColor}dd 0%, ${secondaryColor}88 45%, #0D0D0D 100%)`,
      `radial-gradient(circle at 70% 30%, ${primaryColor}dd 0%, ${secondaryColor}88 45%, #0D0D0D 100%)`,
      `radial-gradient(circle at 30% 70%, ${primaryColor}dd 0%, ${secondaryColor}88 45%, #0D0D0D 100%)`,
      `radial-gradient(circle at 50% 40%, ${primaryColor}dd 0%, ${secondaryColor}88 45%, #0D0D0D 100%)`,
    ],
    [primaryColor, secondaryColor]
  );

  const particles = useMemo<ParticleConfig[]>(() => {
    return Array.from({ length: particleCount }, (_, index) => {
      const size = 2 + pseudoRandom(index + 1.3) * (4 + intensityFactor * 6);
      const baseOpacity = 0.12 + intensityFactor * 0.4;
      const duration = (4 + (index % 4)) / speedFactor;

      return {
        id: index,
        size,
        left: `${pseudoRandom(index + 3.1) * 100}%`,
        top: `${pseudoRandom(index + 7.7) * 100}%`,
        color: index % 2 === 0 ? primaryColor : secondaryColor,
        duration,
        delay: index * 0.15,
        opacityRange: [baseOpacity * 0.6, baseOpacity, baseOpacity * 0.6],
        scaleRange: [1, 1.4 + intensityFactor * 0.4, 1],
      };
    });
  }, [particleCount, primaryColor, secondaryColor, intensityFactor, speedFactor]);

  return {
    gradientFrames,
    particles,
    intensityFactor,
  };
};
