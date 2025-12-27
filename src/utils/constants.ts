// Configuración de animaciones del Hero
export const HERO_ANIMATION_CONFIG = {
  CIRCLES_COUNT: 3,
  BASE_CIRCLE_SIZE: 200,
  BASE_ANIMATION_DURATION: 3,
} as const;

// Duraciones de feedback
export const FEEDBACK_DURATIONS = {
  COPY_SUCCESS: 2000,
  TOAST_DISPLAY: 3000,
  ERROR_DISPLAY: 5000,
} as const;

// Breakpoints (alineados con Tailwind)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// Configuración de colores del proyecto
export const TOTAL_PALETTES = 9;
export const COLORS_PER_PALETTE = 5;
export const TOTAL_COLORS = TOTAL_PALETTES * COLORS_PER_PALETTE;

// URLs (cuando estén disponibles)
export const EXTERNAL_LINKS = {
  GITHUB: '#', // TODO: Agregar URL real
  TWITTER: '#', // TODO: Agregar URL real
  LINKEDIN: '#', // TODO: Agregar URL real
  DESIGN_SYSTEM: '#', // TODO: Agregar URL real
  DOCUMENTATION: '#', // TODO: Agregar URL real
  ACCESSIBILITY: '#', // TODO: Agregar URL real
} as const;

// Timing de transiciones
export const TRANSITION_DURATIONS = {
  INSTANT: 100,
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  SLOWER: 700,
} as const;
