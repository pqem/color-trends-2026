import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroImmersive() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [activeColor, setActiveColor] = useState(0);
  const colors = [
    { primary: '#F0EFEB', secondary: '#316064', name: 'Cloud Dancer × Teal Transformativo' },
    { primary: '#B39DDB', secondary: '#DDC48E', name: 'Sueños Violeta × Niebla Dorada' },
    { primary: '#FF3AC1', secondary: '#7DA9D9', name: 'Fusión Eléctrica × Aura Azul' },
    { primary: '#A8D5BA', secondary: '#D49A6A', name: 'Menta Floreciente × Ámbar' },
  ];

  // Auto-rotate colores cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveColor((prev) => (prev + 1) % colors.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  // Transformar posición del mouse a porcentajes para el gradiente
  const gradientX = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [30, 70]);
  const gradientY = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [30, 70]);

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
      animate={{
        background: [
          `radial-gradient(circle at 50% 50%, ${colors[activeColor].primary}dd 0%, ${colors[activeColor].secondary}88 40%, #0D0D0D 100%)`,
          `radial-gradient(circle at 65% 35%, ${colors[activeColor].primary}dd 0%, ${colors[activeColor].secondary}88 40%, #0D0D0D 100%)`,
          `radial-gradient(circle at 35% 65%, ${colors[activeColor].primary}dd 0%, ${colors[activeColor].secondary}88 40%, #0D0D0D 100%)`,
          `radial-gradient(circle at 50% 50%, ${colors[activeColor].primary}dd 0%, ${colors[activeColor].secondary}88 40%, #0D0D0D 100%)`,
        ],
      }}
      transition={{
        duration: 8,
        ease: 'easeInOut',
        repeat: Infinity
      }}
    >
      {/* Cursor personalizado que sigue al mouse */}
      <motion.div
        className="fixed w-40 h-40 rounded-full pointer-events-none mix-blend-screen z-50"
        style={{
          background: `radial-gradient(circle, ${colors[activeColor].primary}88 0%, transparent 70%)`,
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Partículas flotantes de fondo */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? colors[activeColor].primary : colors[activeColor].secondary,
              left: `${(i * 8.33) % 100}%`,
              top: `${(i * 15) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Contenido central */}
      <div className="relative z-10 text-center px-5 max-w-6xl">
        <motion.h1
          className="text-7xl md:text-9xl lg:text-[12rem] font-black mb-6 leading-none"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <motion.span
            className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: '200% auto' }}
          >
            2026
          </motion.span>
          <motion.span
            className="block bg-clip-text text-transparent bg-gradient-to-r from-white/90 via-white/70 to-white/50"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Living Colors
          </motion.span>
        </motion.h1>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-2xl md:text-3xl text-white/90 mb-4 font-light tracking-wide">
            {colors[activeColor].name}
          </p>

          {/* Indicadores de color activo */}
          <div className="flex gap-3 justify-center">
            {colors.map((color, i) => (
              <motion.button
                key={i}
                className="w-3 h-3 rounded-full cursor-pointer"
                style={{
                  backgroundColor: i === activeColor ? color.primary : 'rgba(255,255,255,0.3)'
                }}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveColor(i)}
                animate={{
                  scale: i === activeColor ? [1, 1.3, 1] : 1,
                }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>
        </motion.div>

        <motion.a
          href="#palettes"
          className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-xl text-white px-10 py-5 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300 group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.6)' }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Explorar Experiencia</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.a>
      </div>

      {/* Scroll indicator con animación líquida */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Scroll</p>
        <motion.div
          className="w-8 h-14 border-2 border-white/40 rounded-full flex justify-center p-2"
          animate={{
            borderColor: ['rgba(255,255,255,0.4)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.4)']
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-2 h-2 bg-white rounded-full"
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
