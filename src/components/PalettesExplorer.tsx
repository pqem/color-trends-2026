import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { palettes } from '../data/palettes';
import LiveColorSwatch from './LiveColorSwatch';
import PaletteInfoTabs from './PaletteInfoTabs';

export default function PalettesExplorer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredPalette, setHoveredPalette] = useState<number | null>(null);

  // Detectar scroll para actualizar currentSlide
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const slideWidth = container.offsetWidth;
      const newSlide = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(newSlide);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const slideWidth = container.offsetWidth;
    container.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth',
    });
  };

  const nextSlide = () => {
    if (currentSlide < palettes.length - 1) {
      scrollToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      scrollToSlide(currentSlide - 1);
    }
  };

  return (
    <section id="palettes" className="relative min-h-screen bg-black">
      {/* Título de sección fixed */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-black text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            9 Experiencias de Color
          </h2>
        </div>
      </div>

      {/* Navegación con indicadores */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {palettes.map((palette, i) => (
          <motion.button
            key={palette.id}
            className="relative group"
            onClick={() => scrollToSlide(i)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Barra de progreso */}
            <div className="w-12 md:w-16 h-2 rounded-full overflow-hidden bg-white/10">
              <motion.div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  backgroundColor: palette.colors[0].hex,
                  width: currentSlide === i ? '100%' : '0%',
                }}
              />
            </div>

            {/* Tooltip con nombre */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black/90 px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {palette.name}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Botones de navegación */}
      <div className="fixed top-1/2 left-4 -translate-y-1/2 z-50">
        <motion.button
          className={`p-4 rounded-full backdrop-blur-xl border border-white/20 transition-all ${
            currentSlide === 0
              ? 'bg-white/5 text-white/30 cursor-not-allowed'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
          onClick={prevSlide}
          disabled={currentSlide === 0}
          whileHover={currentSlide > 0 ? { scale: 1.1 } : {}}
          whileTap={currentSlide > 0 ? { scale: 0.9 } : {}}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
      </div>

      <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50">
        <motion.button
          className={`p-4 rounded-full backdrop-blur-xl border border-white/20 transition-all ${
            currentSlide === palettes.length - 1
              ? 'bg-white/5 text-white/30 cursor-not-allowed'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
          onClick={nextSlide}
          disabled={currentSlide === palettes.length - 1}
          whileHover={currentSlide < palettes.length - 1 ? { scale: 1.1 } : {}}
          whileTap={currentSlide < palettes.length - 1 ? { scale: 0.9 } : {}}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Contenedor de scroll horizontal */}
      <div
        ref={containerRef}
        className="flex h-screen overflow-x-scroll snap-x snap-mandatory scrollbar-hide pt-32"
        style={{ scrollbarWidth: 'none' }}
      >
        {palettes.map((palette, index) => (
          <PaletteSlide
            key={palette.id}
            palette={palette}
            index={index}
            isActive={currentSlide === index}
            isHovered={hoveredPalette === index}
            onHover={() => setHoveredPalette(index)}
          />
        ))}
      </div>
    </section>
  );
}

interface PaletteSlideProps {
  palette: any;
  index: number;
  isActive: boolean;
  isHovered: boolean;
  onHover: () => void;
}

function PaletteSlide({ palette, index, isActive, isHovered, onHover }: PaletteSlideProps) {
  return (
    <div
      className="min-w-full h-full snap-center flex items-center justify-center relative px-5"
      onMouseEnter={onHover}
    >
      {/* Fondo con los 5 colores en capas con parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base oscura */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black" />

        {/* Capas de colores con parallax */}
        {palette.colors.map((color, i) => (
          <motion.div
            key={color.hex}
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${25 + i * 15}% ${35 + i * 10}%, ${color.hex}dd 0%, ${color.hex}44 30%, transparent 70%)`,
            }}
            animate={
              isActive
                ? {
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }
                : { scale: 1, opacity: 0.3 }
            }
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* Contenido con glassmorphism */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto w-full"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={isActive ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0.5, scale: 0.95, y: 20 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      >
        <div className="backdrop-blur-2xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl p-8 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-5xl font-mono text-white/40">0{index + 1}</span>
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
            </motion.div>

            <motion.h3
              className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {palette.name}
            </motion.h3>

            <motion.p
              className="text-xl md:text-2xl text-white/70 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              {palette.concept}
            </motion.p>
          </div>

          {/* Descripción */}
          {palette.description && (
            <motion.p
              className="text-white/80 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              {palette.description}
            </motion.p>
          )}

          {/* Colores interactivos */}
          <motion.div
            className="flex flex-wrap gap-6 mb-10 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6 }}
          >
            {palette.colors.map((color, i) => (
              <LiveColorSwatch key={color.hex} color={color} index={i} />
            ))}
          </motion.div>

          {/* Tags */}
          <motion.div
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7 }}
          >
            {palette.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white/80 text-sm rounded-full border border-white/20"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Tabs de información */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
          >
            <PaletteInfoTabs palette={palette} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
