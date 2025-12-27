import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Brain, Briefcase, Sparkles, CheckCircle, XCircle, ExternalLink, Globe } from 'lucide-react';
import type { Palette } from '../data/palettes';

interface PaletteInfoTabsProps {
  palette: Palette;
}

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const tabs: Tab[] = [
  { id: 'psychology', label: 'Psicología', icon: <Brain className="w-4 h-4" /> },
  { id: 'usage', label: 'Uso', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'examples', label: 'Ejemplos', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'tips', label: 'Tips', icon: <CheckCircle className="w-4 h-4" /> },
];

export default function PaletteInfoTabs({ palette }: PaletteInfoTabsProps) {
  const [activeTab, setActiveTab] = useState('psychology');

  return (
    <div className="mt-8">
      {/* Navegación con pills animados */}
      <div className="flex flex-wrap gap-2 mb-6 relative">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            className={`relative px-5 py-3 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === tab.id
                ? 'text-black z-10'
                : 'text-white/80 hover:text-white'
            }`}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Fondo animado para el tab activo */}
            {activeTab === tab.id && (
              <motion.div
                className="absolute inset-0 bg-white rounded-full shadow-xl"
                layoutId="activeTab"
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}

            {/* Contenido del botón */}
            <span className="relative z-10 flex items-center gap-2">
              {tab.icon}
              {tab.label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Contenedor del contenido con animaciones */}
      <div className="relative min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.95 }}
            transition={{
              duration: 0.3,
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 text-white border border-white/20 shadow-2xl"
          >
            {/* Contenido de Psicología */}
            {activeTab === 'psychology' && palette.psychology && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <Brain className="w-6 h-6 text-purple-300 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold mb-2">Psicología del Color</h4>
                    <p className="text-base leading-relaxed text-white/90">
                      {palette.psychology}
                    </p>
                  </div>
                </div>

                {/* Indicadores de energía y formalidad */}
                <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-xs text-white/60 mb-1 uppercase tracking-wide">Energía</p>
                    <p className="text-lg font-bold">{palette.energy}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-xs text-white/60 mb-1 uppercase tracking-wide">Formalidad</p>
                    <p className="text-lg font-bold">{palette.formality}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Contenido de Uso */}
            {activeTab === 'usage' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <Briefcase className="w-6 h-6 text-blue-300 flex-shrink-0 mt-1" />
                  <h4 className="text-lg font-bold">Casos de Uso Ideales</h4>
                </div>
                <ul className="space-y-3">
                  {palette.usage.map((use, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 mt-2" />
                      <span className="text-white/90">{use}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Contenido de Ejemplos */}
            {activeTab === 'examples' && palette.examples && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                  <h4 className="text-lg font-bold">Ejemplos Reales</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {palette.examples.map((example, i) => (
                    <motion.a
                      key={i}
                      href={example.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-yellow-300/50 hover:bg-white/10 transition-all group block cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Globe className="w-5 h-5 text-yellow-300/60 group-hover:text-yellow-300 transition-colors flex-shrink-0" />
                          <span className="text-white/90 group-hover:text-white transition-colors">
                            {example.name}
                          </span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-yellow-300 transition-colors flex-shrink-0" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Contenido de Tips */}
            {activeTab === 'tips' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                {/* Mejores prácticas */}
                {palette.bestFor && palette.bestFor.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <h4 className="text-lg font-bold text-green-300">Mejores Prácticas</h4>
                    </div>
                    <ul className="space-y-2">
                      {palette.bestFor.map((tip, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="flex items-start gap-3 bg-green-500/10 rounded-lg p-3 border border-green-500/20"
                        >
                          <span className="text-green-400 flex-shrink-0">✓</span>
                          <span className="text-sm text-white/90">{tip}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Qué evitar */}
                {palette.avoid && palette.avoid.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <h4 className="text-lg font-bold text-red-300">Qué Evitar</h4>
                    </div>
                    <ul className="space-y-2">
                      {palette.avoid.map((warning, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="flex items-start gap-3 bg-red-500/10 rounded-lg p-3 border border-red-500/20"
                        >
                          <span className="text-red-400 flex-shrink-0">✕</span>
                          <span className="text-sm text-white/90">{warning}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
