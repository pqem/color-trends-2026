import { motion } from 'framer-motion';
import { Download, FileText, Palette, Sparkles } from 'lucide-react';
import { fadeInUpSlow, viewportOnce } from '../utils/animations';

export default function DownloadCTA() {
  return (
    <section className="relative py-32 md:py-40 px-5 md:px-10 overflow-hidden bg-gradient-to-br from-[#316064] via-[#005F6A] to-black">
      {/* Partículas de fondo animadas */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Gradient mesh de fondo */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8 }}
        >
          {/* Ícono con glassmorphism */}
          <motion.div
            className="flex justify-center mb-8"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl" />
              <div className="relative p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20">
                <FileText className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          {/* Título con tipografía Syne */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-white animate-gradient">
              ¿Te Gustó Esta Página?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Esta experiencia visual fue creada de una forma que <span className="font-bold text-white">te va a sorprender</span>.
            Descubre el secreto detrás de este diseño profesional.
          </p>

          {/* Features con iconos */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.div
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <Palette className="w-5 h-5 text-cyan-300" />
              <span className="font-semibold text-white">9 Paletas Completas</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <FileText className="w-5 h-5 text-purple-300" />
              <span className="font-semibold text-white">Más de 60 Páginas</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-md px-6 py-3 rounded-full border border-yellow-400/30"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: ['0 0 20px rgba(250,204,21,0.3)', '0 0 30px rgba(250,204,21,0.5)', '0 0 20px rgba(250,204,21,0.3)'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="font-bold text-white">100% Gratis</span>
            </motion.div>
          </div>

          {/* Botón principal con efectos */}
          <motion.a
            href="#claude-reveal"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('claude-reveal')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative bg-white text-[#316064] px-12 py-6 rounded-2xl font-bold text-xl inline-flex items-center gap-4 overflow-hidden shadow-2xl cursor-pointer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {/* Efecto de brillo al hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />

            <Download className="w-7 h-7 relative z-10 group-hover:animate-bounce" />
            <span className="relative z-10">Descubre Cómo se Hizo Esto</span>

            {/* Efecto de partículas al hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: [0, Math.cos(i * 60 * Math.PI / 180) * 100],
                    y: [0, Math.sin(i * 60 * Math.PI / 180) * 100],
                    opacity: [1, 0],
                    scale: [1, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>
          </motion.a>

          {/* Texto secundario */}
          <motion.p
            className="mt-8 text-sm text-white/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.5 }}
          >
            <span className="inline-flex items-center gap-4">
              <span>📄 Formato PDF</span>
              <span className="w-1 h-1 bg-white/40 rounded-full" />
              <span>✉️ Sin correo requerido</span>
              <span className="w-1 h-1 bg-white/40 rounded-full" />
              <span>⚡ Acceso instantáneo</span>
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
