import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-100 via-neutral-100 to-primary-subtle/30">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-primary/20"
            style={{
              width: `${(i + 1) * 200}px`,
              height: `${(i + 1) * 200}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-10 text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-700 mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          2026 Color Trends
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-neutral-500 mb-8 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          The Era of Visual Regeneration
        </motion.p>

        <motion.p
          className="text-base md:text-lg text-neutral-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Discover 9 comprehensive color palettes for 2026, designed for graphic design, web design, social media, and editorial applications.
        </motion.p>

        <motion.a
          href="#palettes"
          className="inline-flex items-center gap-2 bg-primary text-neutral-50 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all duration-normal hover:-translate-y-1 hover:shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Palettes
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-primary/50" />
      </motion.div>
    </section>
  );
}
