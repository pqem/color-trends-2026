import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { palettes } from '../data/palettes';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import { fadeInUpSlow, liftOnHover, subtleScaleOnHover, fadeIn, viewportOnce, viewportWithMargin, staggerItem } from '../utils/animations';
import { TOTAL_COLORS } from '../utils/constants';

export default function PaletteGallery() {
  const { copiedText, copyToClipboard } = useCopyToClipboard();

  return (
    <section id="palettes" className="py-20 md:py-24 px-5 md:px-10 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          {...fadeInUpSlow}
          viewport={viewportOnce}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-700 mb-4">
            9 Paletas de Color Completas
          </h2>
          <p className="text-lg text-neutral-500 max-w-3xl mx-auto leading-relaxed">
            Cada paleta contiene 5 colores cuidadosamente seleccionados con especificaciones completas. Haz clic en cualquier color para copiar su código HEX.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {palettes.map((palette, index) => (
            <motion.div
              key={palette.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-normal border border-neutral-200"
              {...staggerItem(index, 0.1)}
              {...liftOnHover}
              viewport={viewportWithMargin}
            >
              {/* Palette header */}
              <div className="p-6 border-b border-neutral-200">
                <h3 className="text-xl font-bold text-neutral-700 mb-2">
                  {palette.name}
                </h3>
                <p className="text-sm text-neutral-500 mb-4 leading-relaxed">
                  {palette.concept}
                </p>
                <div className="flex flex-wrap gap-2">
                  {palette.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Color swatches */}
              <div className="p-6">
                <div className="grid grid-cols-5 gap-2 mb-6">
                  {palette.colors.map((color) => (
                    <motion.button
                      key={color.hex}
                      className="relative aspect-square rounded-lg group cursor-pointer overflow-hidden border-2 border-neutral-200 hover:border-primary transition-colors"
                      style={{ backgroundColor: color.hex }}
                      onClick={() => copyToClipboard(color.hex)}
                      {...subtleScaleOnHover}
                      title={`${color.name} - ${color.hex}`}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                        {copiedText === color.hex ? (
                          <Check className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        ) : (
                          <Copy className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Color details */}
                <div className="space-y-2">
                  {palette.colors.map((color) => (
                    <div
                      key={color.hex}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="w-4 h-4 rounded border border-neutral-200"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-neutral-600 font-medium">
                          {color.name}
                        </span>
                      </div>
                      <span className="font-mono text-neutral-500 text-xs">
                        {color.hex}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Description */}
                {palette.description && (
                  <div className="mt-6 pt-6 border-t border-neutral-200">
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {palette.description}
                    </p>
                  </div>
                )}

                {/* Psychology */}
                {palette.psychology && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold text-neutral-700 mb-1">
                      🧠 Psicología:
                    </p>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {palette.psychology}
                    </p>
                  </div>
                )}

                {/* Usage */}
                <div className="mt-4">
                  <p className="text-xs font-semibold text-neutral-700 mb-2">
                    💼 Ideal para:
                  </p>
                  <ul className="text-xs text-neutral-600 space-y-1">
                    {palette.usage.map((use, i) => (
                      <li key={i}>• {use}</li>
                    ))}
                  </ul>
                </div>

                {/* Examples */}
                {palette.examples && palette.examples.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold text-neutral-700 mb-2">
                      ✨ Ejemplos:
                    </p>
                    <ul className="text-xs text-neutral-600 space-y-1">
                      {palette.examples.map((example, i) => (
                        <li key={i}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Best For */}
                {palette.bestFor && palette.bestFor.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold text-neutral-700 mb-2">
                      ✅ Mejores prácticas:
                    </p>
                    <ul className="text-xs text-neutral-600 space-y-1">
                      {palette.bestFor.map((tip, i) => (
                        <li key={i}>• {tip}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Avoid */}
                {palette.avoid && palette.avoid.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold text-neutral-700 mb-2">
                      ⚠️ Evitar:
                    </p>
                    <ul className="text-xs text-neutral-600 space-y-1">
                      {palette.avoid.map((warning, i) => (
                        <li key={i}>• {warning}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Energy & Formality */}
                <div className="mt-4 pt-4 border-t border-neutral-200 flex justify-between text-xs">
                  <div>
                    <span className="font-semibold text-neutral-700">Energía:</span>
                    <span className="ml-1 text-neutral-600">{palette.energy}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-700">Formalidad:</span>
                    <span className="ml-1 text-neutral-600">{palette.formality}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 text-center"
          {...fadeIn}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-neutral-500">
            <span className="font-bold text-neutral-700">{TOTAL_COLORS} colores</span> en total (9 paletas × 5 colores cada una)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
