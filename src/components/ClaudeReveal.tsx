import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  MessageCircle,
  Check,
  ArrowRight
} from 'lucide-react';

export default function ClaudeReveal() {
  const [showReveal, setShowReveal] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const fullText = 'ESTA PÁGINA FUE CREADA EN MINUTOS';

  // Animación typewriter para el reveal
  useEffect(() => {
    if (!showReveal) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setCurrentText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [showReveal]);

  // Auto-trigger reveal después de 1 segundo
  useEffect(() => {
    const timer = setTimeout(() => setShowReveal(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Fondo con partículas y gradientes */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 py-20">
        {/* Hero Hook con fade-in dramático */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            ¿Cómo se hizo esto?
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Por Pablo Quevedo
          </motion.p>
        </motion.div>

        {/* Big Reveal con typewriter */}
        <AnimatePresence>
          {showReveal && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <div className="backdrop-blur-2xl bg-gradient-to-br from-purple-500/10 via-white/5 to-cyan-500/10 rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12 text-center">
                <motion.div
                  className="text-3xl md:text-5xl font-bold text-white leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {currentText}
                  <motion.span
                    className="inline-block w-1 h-10 md:h-14 bg-cyan-400 ml-2"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>


        {/* Pricing de Claude.ai - Solo Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: showReveal ? 1 : 0 }}
          transition={{ delay: 2 }}
          className="mb-20 max-w-2xl mx-auto"
        >
          <h2
            className="text-3xl md:text-4xl font-black text-white text-center mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Claude Team
          </h2>
          <p className="text-xl text-white/60 text-center mb-10">
            La herramienta para crear páginas profesionales en minutos
          </p>

          {/* Team - Card único destacado */}
          <motion.div
            className="backdrop-blur-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl border-2 border-purple-400 p-10 relative overflow-hidden"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            {/* Badge "Recomendado" */}
            <motion.div
              className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-1 rounded-full text-xs font-bold"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨ RECOMENDADO
            </motion.div>

            <h3 className="text-3xl font-bold text-white mb-2">Team</h3>
            <div className="mb-8">
              <span className="text-5xl font-black text-white">$30</span>
              <span className="text-xl text-white/60">/usuario/mes</span>
            </div>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-white">Colaboración en equipo</p>
                  <p className="text-white/70">Múltiples personas pueden crear contenido</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-white">Claude Code incluido</p>
                  <p className="text-white/70">Crea páginas web como esta en minutos</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-white">Administración centralizada</p>
                  <p className="text-white/70">Control total sobre el equipo</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-white">Acceso ilimitado a modelos</p>
                  <p className="text-white/70">Claude Opus, Sonnet y Haiku</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-white">Ideal para organizaciones</p>
                  <p className="text-white/70">Perfecto para iglesias y sin fines de lucro</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Beneficios simplificados */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: showReveal ? 1 : 0 }}
          transition={{ delay: 2.5 }}
          className="mb-20"
        >
          <div className="backdrop-blur-2xl bg-gradient-to-br from-yellow-500/10 via-white/5 to-orange-500/10 rounded-3xl border border-yellow-500/30 p-8 md:p-12 text-center">
            <h2
              className="text-3xl md:text-5xl font-black text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              CENTRO CRISTIANO ESPERANZA
            </h2>

            <p className="text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Crea páginas profesionales como esta <span className="font-bold text-white">en minutos</span>,
              no en semanas ni gastando miles de dólares.
            </p>
          </div>
        </motion.div>

        {/* CTA Final - WhatsApp */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: showReveal ? 1 : 0, scale: showReveal ? 1 : 0.9 }}
          transition={{ delay: 3 }}
          className="text-center"
        >
          <div className="backdrop-blur-2xl bg-gradient-to-r from-green-500/20 via-white/10 to-green-500/20 rounded-3xl border border-green-500/30 p-12 relative overflow-hidden">
            {/* Partículas animadas de fondo */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-green-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            <h2
              className="text-4xl md:text-5xl font-black text-white mb-6 relative z-10"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Mandale un mensaje a Pablito
            </h2>

            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto relative z-10">
              Para que le diga a Vico que pague por esta suscripción
            </p>

            <motion.a
              href="https://wa.me/+542995863649?text=Decile%20a%20Vico%20que%20paguemos%20por%20esta%20suscripci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl transition-all relative z-10 group"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-8 h-8 group-hover:animate-bounce" />
              <span>Escribir a Pablito</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.a>

            <motion.p
              className="mt-6 text-sm text-white/60 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
            >
              💬 "Decile a Vico que paguemos por esta suscripción"
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
