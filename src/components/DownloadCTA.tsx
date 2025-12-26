import { motion } from 'framer-motion';
import { Download, FileText, Palette } from 'lucide-react';

export default function DownloadCTA() {
  return (
    <section className="py-20 md:py-24 px-5 md:px-10 bg-primary text-neutral-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-2xl">
              <FileText className="w-12 h-12" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Download the Complete Guide
          </h2>

          <p className="text-lg md:text-xl text-neutral-50/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get the full 60+ page guide with extended content, case studies, implementation guides, and all color specifications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <div className="flex items-center gap-2 text-sm">
              <Palette className="w-5 h-5" />
              <span>9 Complete Palettes</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full" />
            <div className="flex items-center gap-2 text-sm">
              <FileText className="w-5 h-5" />
              <span>60+ Pages</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full" />
            <div className="flex items-center gap-2 text-sm">
              <span className="font-bold">100% Free</span>
            </div>
          </div>

          <motion.button
            className="bg-white text-primary px-10 py-5 rounded-lg font-bold text-lg hover:bg-neutral-50 transition-colors duration-normal inline-flex items-center gap-3 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-6 h-6" />
            Download Complete Guide
          </motion.button>

          <p className="mt-6 text-sm text-neutral-50/70">
            PDF format • No email required • Instant access
          </p>
        </motion.div>
      </div>
    </section>
  );
}
