import { motion } from 'framer-motion';

export default function ColorIntro() {
  const colorsOfYear = [
    {
      name: "Cloud Dancer",
      hex: "#F4F4F2",
      code: "PANTONE 11-4201",
      brand: "Pantone",
      description: "The first white chosen as Color of the Year. Represents visual clarity and breathing room in a world of digital overload.",
      textColor: "text-neutral-700"
    },
    {
      name: "Transformative Teal",
      hex: "#316064",
      code: "COLORO 092-37-14",
      brand: "WGSN",
      description: "Innovation meets environmental consciousness. A balance between technology and nature, representing growth and transformation.",
      textColor: "text-neutral-50"
    }
  ];

  return (
    <section className="py-20 md:py-24 px-5 md:px-10 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-700 mb-4">
            Colors of the Year 2026
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
            A historic moment: For the first time, white leads the way, alongside a conscious teal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {colorsOfYear.map((color, index) => (
            <motion.div
              key={color.hex}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-normal"
              style={{ backgroundColor: color.hex }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="p-8 md:p-10 min-h-[400px] flex flex-col justify-between">
                <div>
                  <span className={`inline-block ${color.textColor} text-sm font-semibold bg-white/20 px-4 py-2 rounded-full mb-6`}>
                    {color.brand} 2026
                  </span>
                  <h3 className={`text-3xl md:text-4xl font-bold ${color.textColor} mb-4`}>
                    {color.name}
                  </h3>
                  <p className={`text-lg ${color.textColor} opacity-90 mb-6 leading-relaxed`}>
                    {color.description}
                  </p>
                </div>
                <div className={color.textColor}>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl font-mono font-bold">{color.hex}</span>
                  </div>
                  <span className="text-sm opacity-75">{color.code}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
