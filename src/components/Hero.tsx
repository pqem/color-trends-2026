import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeInUp, fadeInUpDelayed, scaleOnHover, bounceInfinite, pulseInfinite } from '../utils/animations';
import { HERO_ANIMATION_CONFIG } from '../utils/constants';

const { CIRCLES_COUNT, BASE_CIRCLE_SIZE, BASE_ANIMATION_DURATION } = HERO_ANIMATION_CONFIG;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-100 via-neutral-100 to-primary-subtle/30">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(CIRCLES_COUNT)].map((_, i) => {
          const circleSize = (i + 1) * BASE_CIRCLE_SIZE;
          const animationDuration = BASE_ANIMATION_DURATION + i;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full border-2 border-primary/20"
              style={{
                width: `${circleSize}px`,
                height: `${circleSize}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              {...pulseInfinite(animationDuration)}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-10 text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-700 mb-6 leading-tight"
          {...fadeInUp}
        >
          Tendencias de Color 2026
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-neutral-500 mb-8 font-medium"
          {...fadeInUpDelayed(0.2)}
        >
          La Era de la Regeneración Visual
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-neutral-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          {...fadeInUpDelayed(0.4)}
        >
          Descubre 9 paletas de colores completas para 2026, diseñadas para diseño gráfico, diseño web, redes sociales y aplicaciones editoriales.
        </motion.p>

        <motion.a
          href="#palettes"
          className="inline-flex items-center gap-2 bg-primary text-neutral-50 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all duration-normal hover:-translate-y-1 hover:shadow-md"
          {...fadeInUpDelayed(0.6)}
          {...scaleOnHover}
        >
          Explorar Paletas
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        {...bounceInfinite}
      >
        <ChevronDown className="w-8 h-8 text-primary/50" />
      </motion.div>
    </section>
  );
}
