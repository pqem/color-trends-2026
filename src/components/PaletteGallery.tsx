import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { palettes } from '../data/palettes';

export default function PaletteGallery() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = async (hex: string) => {
    await navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <section id="palettes" className="py-20 md:py-24 px-5 md:px-10 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-700 mb-4">
            9 Complete Color Palettes
          </h2>
          <p className="text-lg text-neutral-500 max-w-3xl mx-auto leading-relaxed">
            Each palette contains 5 carefully curated colors with complete specifications. Click any color to copy its HEX code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {palettes.map((palette, index) => (
            <motion.div
              key={palette.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-normal border border-neutral-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
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
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title={`${color.name} - ${color.hex}`}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                        {copiedColor === color.hex ? (
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

                {/* Usage */}
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <p className="text-xs font-semibold text-neutral-600 mb-2">
                    Ideal for:
                  </p>
                  <ul className="text-xs text-neutral-500 space-y-1">
                    {palette.usage.map((use, i) => (
                      <li key={i}>• {use}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-neutral-500">
            <span className="font-bold text-neutral-700">45 colors</span> in total (9 palettes × 5 colors each)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
