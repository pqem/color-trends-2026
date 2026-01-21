import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type MouseEvent,
} from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { useBackgroundGenerator } from '../hooks/use-background-generator';

interface BackgroundVisualizerProps {
  primaryColor: string;
  secondaryColor: string;
  animationSpeed: number;
  particleIntensity: number;
  enableBlur: boolean;
  enableNoise: boolean;
}

const NOISE_TEXTURE =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/></svg>";

const BackgroundVisualizer = forwardRef<HTMLDivElement, BackgroundVisualizerProps>(
  ({
    primaryColor,
    secondaryColor,
    animationSpeed,
    particleIntensity,
    enableBlur,
    enableNoise,
  }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);
    const [isCursorActive, setIsCursorActive] = useState(false);

    useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

    useEffect(() => {
      const element = containerRef.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      cursorX.set(rect.width / 2);
      cursorY.set(rect.height / 2);
    }, [cursorX, cursorY]);

    const { gradientFrames, particles, intensityFactor } = useBackgroundGenerator({
      primaryColor,
      secondaryColor,
      particleIntensity,
      animationSpeed,
    });

    const gradientDuration = Math.max(4, 12 / animationSpeed);

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      cursorX.set(event.clientX - rect.left);
      cursorY.set(event.clientY - rect.top);
      setIsCursorActive(true);
    };

    const handleMouseLeave = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      cursorX.set(rect.width / 2);
      cursorY.set(rect.height / 2);
      setIsCursorActive(false);
    };

    return (
      <div
        ref={containerRef}
        className="relative h-full w-full overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ background: gradientFrames }}
          transition={{ duration: gradientDuration, ease: 'easeInOut', repeat: Infinity }}
        />

        {enableBlur && (
          <motion.div
            className="absolute -inset-24 opacity-60 blur-3xl"
            animate={{ background: gradientFrames }}
            transition={{ duration: gradientDuration * 1.2, ease: 'easeInOut', repeat: Infinity }}
          />
        )}

        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                background: particle.color,
                width: particle.size,
                height: particle.size,
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: particle.opacityRange,
                scale: particle.scaleRange,
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <motion.div
          className="absolute h-64 w-64 rounded-full pointer-events-none mix-blend-screen"
          style={{
            background: `radial-gradient(circle, ${primaryColor}88 0%, transparent 70%)`,
            x: cursorX,
            y: cursorY,
            translateX: '-50%',
            translateY: '-50%',
            opacity: isCursorActive ? 0.6 + intensityFactor * 0.3 : 0.15,
          }}
        />

        {enableNoise && (
          <div
            className="absolute inset-0 pointer-events-none opacity-20 mix-blend-soft-light"
            style={{
              backgroundImage: `url('${NOISE_TEXTURE}')`,
              backgroundSize: '200px 200px',
            }}
          />
        )}
      </div>
    );
  }
);

BackgroundVisualizer.displayName = 'BackgroundVisualizer';

export default BackgroundVisualizer;
