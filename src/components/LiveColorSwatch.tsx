import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface Color {
  hex: string;
  name: string;
  rgb?: string;
  cmyk?: string;
}

interface LiveColorSwatchProps {
  color: Color;
  index?: number;
}

export default function LiveColorSwatch({ color, index = 0 }: LiveColorSwatchProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="relative group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleCopy}
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 200,
      }}
      whileHover={{
        scale: 1.15,
        rotate: [0, -3, 3, -3, 0],
        transition: { duration: 0.4 }
      }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Color principal con efectos */}
      <motion.div
        className="w-24 h-24 md:w-28 md:h-28 rounded-3xl relative overflow-hidden"
        style={{ backgroundColor: color.hex }}
        animate={{
          boxShadow: isHovered
            ? `0 25px 70px -15px ${color.hex}aa, 0 0 0 3px ${color.hex}44`
            : `0 10px 30px -5px rgba(0,0,0,0.3)`,
        }}
      >
        {/* Brillo interno animado */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
          }}
          animate={{
            opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
            scale: isHovered ? [1, 1.2, 1] : 1,
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Partículas flotantes al hover */}
        {isHovered && (
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => {
              const angle = (i * 360) / 8;
              const radians = (angle * Math.PI) / 180;
              const distance = 50;
              const x = Math.cos(radians) * distance;
              const y = Math.sin(radians) * distance;

              return (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: color.hex,
                    left: '50%',
                    top: '50%',
                    marginLeft: '-4px',
                    marginTop: '-4px',
                  }}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                  animate={{
                    x: x,
                    y: y,
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'easeOut',
                  }}
                />
              );
            })}
          </div>
        )}

        {/* Ondas expansivas al hover */}
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`wave-${i}`}
                className="absolute inset-0 rounded-3xl border-2"
                style={{ borderColor: color.hex }}
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{
                  scale: [1, 2],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'easeOut',
                }}
              />
            ))}
          </>
        )}

        {/* Overlay de copiado */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: copied ? 1 : 0,
            scale: copied ? 1 : 0.5,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{
              scale: copied ? 1 : 0,
              rotate: copied ? 0 : -180,
            }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Check className="w-12 h-12 text-white" strokeWidth={3} />
          </motion.div>
        </motion.div>

        {/* Ícono de copiar al hover */}
        {!copied && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <div className="bg-black/40 backdrop-blur-md p-3 rounded-xl">
              <Copy className="w-6 h-6 text-white" />
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Label con glassmorphism */}
      <motion.div
        className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-xl px-4 py-2 rounded-xl whitespace-nowrap border border-white/10 shadow-2xl z-10"
        initial={{ opacity: 0, y: -10, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : -10,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <p className="text-white text-sm font-semibold mb-1">{color.name}</p>
        <p className="text-white/70 text-xs font-mono">{color.hex}</p>
        {color.rgb && (
          <p className="text-white/50 text-xs mt-1">RGB: {color.rgb}</p>
        )}
      </motion.div>

      {/* Mensaje de copiado flotante */}
      {copied && (
        <motion.div
          className="absolute -top-12 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-xl"
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.8 }}
        >
          ¡Copiado! {color.hex}
        </motion.div>
      )}
    </motion.div>
  );
}
