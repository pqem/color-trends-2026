export interface Color {
  hex: string;
  name: string;
  rgb?: string;
  cmyk?: string;
}

export interface Example {
  name: string;
  url: string;
}

export interface Palette {
  id: number;
  name: string;
  concept: string;
  description?: string;
  psychology?: string;
  colors: Color[];
  usage: string[];
  examples?: Example[];
  tags: string[];
  energy: string;
  formality: string;
  bestFor?: string[];
  avoid?: string[];
}

export const palettes: Palette[] = [
  {
    id: 1,
    name: "Minimalismo Moderno Sereno",
    concept: "Calidez esencial, claridad y orden visual sin frialdad corporativa",
    description: "Combina Neutrales Emocionales con minimalismo moderno. Colores que transmiten calidez sin caer en frialdad. Perfecto para marcas que buscan simplicidad sofisticada con toque humano.",
    psychology: "Reduce la ansiedad y promueve la concentración. Crea sensación de seguridad y estabilidad. Ideal para contenido que requiere atención sostenida y calma.",
    colors: [
      { hex: "#F0EFEB", name: "Cloud Dancer", rgb: "240, 239, 235", cmyk: "0, 0, 2, 6" },
      { hex: "#CFD8DC", name: "Gris Nimbus", rgb: "207, 216, 220", cmyk: "6, 2, 0, 14" },
      { hex: "#455A64", name: "Mar Báltico", rgb: "69, 90, 100", cmyk: "31, 10, 0, 61" },
      { hex: "#B39DDB", name: "Violeta Silencioso", rgb: "179, 157, 219", cmyk: "18, 28, 0, 14" },
      { hex: "#DDC48E", name: "Niebla Dorada", rgb: "221, 196, 142", cmyk: "0, 11, 36, 13" }
    ],
    usage: ["Sitios corporativos con personalidad", "Interfaces UI/UX limpias", "Diseño editorial minimalista", "Portfolios profesionales"],
    examples: [
      { name: "Blue Bottle Coffee", url: "https://bluebottlecoffee.com" },
      { name: "Kinfolk Magazine", url: "https://kinfolk.com" },
      { name: "Norm Architects", url: "https://normcph.com" },
      { name: "Cereal Magazine", url: "https://readcereal.com" }
    ],
    tags: ["Minimalismo", "Profesional", "Limpio", "Cálido"],
    energy: "Baja-Media",
    formality: "Alta",
    bestFor: ["Usar espacio en blanco generoso (40-50%)", "Combinar con texturas sutiles (ruido, grano)", "Perfecto para lectura de formato largo"],
    avoid: ["No usar con tipografía muy ornamentada", "Evitar negro puro (#000000)", "No sobresaturar con demasiados colores"]
  },
  {
    id: 2,
    name: "Bienestar Sintetizado",
    concept: "Naturaleza + Tecnología + Bienestar mental",
    description: "Fusión de mundos orgánico y digital. Representa el equilibrio entre tecnología y naturaleza, bienestar mental e innovación. Perfecto para marcas en health-tech e innovación sostenible.",
    psychology: "Promueve equilibrio emocional y renovación. Calma sin inducir somnolencia. Energía positiva sin agresividad.",
    colors: [
      { hex: "#A8D5BA", name: "Menta Floreciente", rgb: "168, 213, 186", cmyk: "21, 0, 13, 16" },
      { hex: "#CADBAF", name: "Pistacho Pálido", rgb: "202, 219, 175", cmyk: "8, 0, 20, 14" },
      { hex: "#7CBFAD", name: "Verde Clínico", rgb: "124, 191, 173", cmyk: "35, 0, 10, 25" },
      { hex: "#D49A6A", name: "Ámbar Cálido", rgb: "212, 154, 106", cmyk: "0, 27, 50, 17" },
      { hex: "#7B2F2F", name: "Merlot Profundo", rgb: "123, 47, 47", cmyk: "0, 62, 62, 52" }
    ],
    usage: ["Apps de salud y fitness", "Plataformas educativas", "Herramientas de bienestar digital", "Apps de meditación", "Productos sostenibles"],
    examples: [
      { name: "Headspace", url: "https://www.headspace.com" },
      { name: "Farmacy Beauty", url: "https://www.farmacybeauty.com" },
      { name: "Thrive Market", url: "https://thrivemarket.com" },
      { name: "Everlywell", url: "https://www.everlywell.com" }
    ],
    tags: ["Bienestar", "Natural", "Tecnología", "Consciente"],
    energy: "Media",
    formality: "Media",
    bestFor: ["Combinar con fotografía de naturaleza", "Usar ilustraciones geométricas", "Perfecto para flujos de onboarding"],
    avoid: ["No usar en contextos industriales pesados", "Evitar tecnología pura sin elemento humano", "No combinar con tipografía agresiva"]
  },
  {
    id: 3,
    name: "Tierra y Herencia",
    concept: "Raíces, sostenibilidad, narrativa emocional, autenticidad artesanal",
    description: "Tonos terrosos que evocan tradición, artesanía y prácticas sostenibles. Perfecto para marcas que valoran la autenticidad y el patrimonio sobre las tendencias.",
    psychology: "Crea sensación de estabilidad y autenticidad. Conecta con valores ancestrales. Ideal para storytelling y narrativas emocionales.",
    colors: [
      { hex: "#B66E41", name: "Arcilla", rgb: "182, 110, 65", cmyk: "0, 40, 64, 29" },
      { hex: "#A79874", name: "Raíz de Olivo", rgb: "167, 152, 116", cmyk: "0, 9, 31, 35" },
      { hex: "#C59A6B", name: "Ocre", rgb: "197, 154, 107", cmyk: "0, 22, 46, 23" },
      { hex: "#8C6C50", name: "Taupe Café", rgb: "140, 108, 80", cmyk: "0, 23, 43, 45" },
      { hex: "#9B372E", name: "Óxido", rgb: "155, 55, 46", cmyk: "0, 64, 70, 39" }
    ],
    usage: ["Publicaciones editoriales", "Branding artesanal", "Marcas sostenibles", "Productos orgánicos", "Marcas patrimoniales"],
    examples: [
      { name: "Patagonia", url: "https://www.patagonia.com" },
      { name: "Warby Parker", url: "https://www.warbyparker.com" },
      { name: "Filson", url: "https://www.filson.com" },
      { name: "Red Wing Heritage", url: "https://www.redwingheritage.com" }
    ],
    tags: ["Auténtico", "Arraigado", "Cálido", "Patrimonio"],
    energy: "Baja",
    formality: "Alta",
    bestFor: ["Combinar con tipografía serif", "Usar texturas naturales", "Perfecto para diseño de packaging"],
    avoid: ["No usar con tecnología ultra-moderna", "Evitar estética digital plana", "No combinar con colores neón"]
  },
  {
    id: 4,
    name: "Contraste Vívido",
    concept: "Energía, impacto, visibilidad instantánea para la economía de atención",
    description: "Colores saturados de alta energía diseñados para capturar atención inmediata en la economía digital de la atención. Perfecto para redes sociales y marcas orientadas a jóvenes.",
    psychology: "Genera emoción y urgencia. Alto impacto visual. Ideal para llamados a la acción y contenido viral.",
    colors: [
      { hex: "#FF3AC1", name: "Fucsia Eléctrico", rgb: "255, 58, 193", cmyk: "0, 77, 0, 0" },
      { hex: "#7DA9D9", name: "Aura Azul", rgb: "125, 169, 217", cmyk: "42, 22, 0, 15" },
      { hex: "#FFB94C", name: "Neblina Ámbar", rgb: "255, 185, 76", cmyk: "0, 27, 70, 0" },
      { hex: "#A1E3C5", name: "Menta Gelatina", rgb: "161, 227, 197", cmyk: "29, 0, 13, 11" },
      { hex: "#333333", name: "Carbón Profundo", rgb: "51, 51, 51", cmyk: "0, 0, 0, 80" }
    ],
    usage: ["Contenido de redes sociales", "Campañas digitales", "Marcas orientadas a jóvenes", "Contenido TikTok/Instagram", "Promociones de eventos"],
    examples: [
      { name: "Spotify", url: "https://www.spotify.com" },
      { name: "Twitch", url: "https://www.twitch.tv" },
      { name: "Discord", url: "https://discord.com" },
      { name: "Figma", url: "https://www.figma.com" }
    ],
    tags: ["Energético", "Audaz", "Moderno", "Juvenil"],
    energy: "Muy Alta",
    formality: "Baja",
    bestFor: ["Usar para CTAs y destacados", "Perfecto para Stories y Reels", "Reservar un vibrante + resto neutrales"],
    avoid: ["No combinar todos los vibrantes a la vez", "Evitar como color base (causa fatiga)", "No para servicios financieros o de salud"]
  },
  {
    id: 5,
    name: "Calidez Metálica",
    concept: "Lujo cálido, experiencia táctil, sofisticación accesible",
    description: "Tonos metálicos cálidos que transmiten lujo sin frialdad. Perfecto para marcas premium que buscan sofisticación accesible.",
    psychology: "Evoca calidad y artesanía. Lujo accesible. Crea sensación aspiracional pero alcanzable.",
    colors: [
      { hex: "#B66D4E", name: "Cobre Cepillado", rgb: "182, 109, 78", cmyk: "0, 40, 57, 29" },
      { hex: "#C08E58", name: "Brillo Bronce", rgb: "192, 142, 88", cmyk: "0, 26, 54, 25" },
      { hex: "#C89F99", name: "Oro Rosa", rgb: "200, 159, 153", cmyk: "0, 20, 24, 22" },
      { hex: "#837060", name: "Sombra Taupe", rgb: "131, 112, 96", cmyk: "0, 15, 27, 49" },
      { hex: "#C4C4C4", name: "Plata Suave", rgb: "196, 196, 196", cmyk: "0, 0, 0, 23" }
    ],
    usage: ["Editorial premium", "Marcas de lujo", "Packaging de alta gama", "Branding de joyería", "Cosméticos"],
    examples: [
      { name: "Glossier", url: "https://www.glossier.com" },
      { name: "Aesop", url: "https://www.aesop.com" },
      { name: "The Line", url: "https://the-line.com" },
      { name: "Cuyana", url: "https://www.cuyana.com" }
    ],
    tags: ["Lujo", "Cálido", "Táctil", "Premium"],
    energy: "Media",
    formality: "Muy Alta",
    bestFor: ["Usar efectos de papel metálico", "Combinar con texturas táctiles", "Perfecto para materiales impresos"],
    avoid: ["No aplicar uniformemente (pierde tactilidad)", "Evitar con sans-serif ultra-moderno solo", "No abusar - menos es más"]
  },
  {
    id: 6,
    name: "Ciber-Orgánico",
    concept: "Futurismo biológico, tecnología limpia, fusión bio-digital",
    description: "Fusión de naturaleza y tecnología. Representa tecnología limpia, innovación biotecnológica y el futuro de la tecnología sostenible.",
    psychology: "Equilibrio entre crecimiento e innovación. Esperanza en soluciones tecnológicas para desafíos ambientales.",
    colors: [
      { hex: "#005F6A", name: "Teal Transformativo Oscuro", rgb: "0, 95, 106", cmyk: "92, 45, 48, 23" },
      { hex: "#A2FF86", name: "Menta Eléctrica", rgb: "162, 255, 134", cmyk: "40, 0, 65, 0" },
      { hex: "#4E6E5D", name: "Musgo Digital", rgb: "78, 110, 93", cmyk: "68, 40, 65, 25" },
      { hex: "#4B3621", name: "Tierra Fértil", rgb: "75, 54, 33", cmyk: "55, 68, 80, 60" },
      { hex: "#316064", name: "Teal Transformativo", rgb: "49, 96, 100", cmyk: "51, 4, 0, 61" }
    ],
    usage: ["Startups tecnológicas", "Productos biotech", "IA ambiental", "Tecnología verde", "Laboratorios de innovación"],
    examples: [
      { name: "Notion", url: "https://www.notion.so" },
      { name: "Linear", url: "https://linear.app" },
      { name: "Stripe", url: "https://stripe.com" },
      { name: "Vercel", url: "https://vercel.com" }
    ],
    tags: ["Innovación", "Futurista", "Consciente", "Tecnología"],
    energy: "Media-Alta",
    formality: "Media",
    bestFor: ["Combinar con ilustraciones geométricas", "Usar para tecnología con propósito", "Perfecto para narrativa de innovación"],
    avoid: ["No usar en contextos muy tradicionales", "Evitar sin narrativa eco/tech", "No combinar solo con tonos tierra cálidos"]
  },
  {
    id: 7,
    name: "Optimismo Radical",
    concept: "Energía retro-futurista de los 70s, vitalidad, antídoto a la fatiga de crisis",
    description: "Colores audaces retro-futuristas que celebran la vida y el optimismo. Antídoto a la fatiga de crisis con energía vibrante y alegre.",
    psychology: "Combate la fatiga del doom-scrolling. Transmite esperanza y celebración. Energizante sin ser agresivo.",
    colors: [
      { hex: "#FF5F1F", name: "Naranja Atardecer", rgb: "255, 95, 31", cmyk: "0, 75, 95, 0" },
      { hex: "#630330", name: "Púrpura Cósmico", rgb: "99, 3, 48", cmyk: "45, 100, 50, 40" },
      { hex: "#FFD700", name: "Amarillo Yema", rgb: "255, 215, 0", cmyk: "0, 15, 100, 0" },
      { hex: "#DC143C", name: "Rojo Carmesí", rgb: "220, 20, 60", cmyk: "0, 91, 73, 14" },
      { hex: "#FF6600", name: "Naranja Brillante", rgb: "255, 102, 0", cmyk: "0, 60, 100, 0" }
    ],
    usage: ["Festivales y eventos", "Contenido Gen Z", "Campañas de activismo social", "Proyectos comunitarios", "Agencias creativas"],
    examples: [
      { name: "Coachella", url: "https://www.coachella.com" },
      { name: "Dropbox", url: "https://www.dropbox.com" },
      { name: "Mailchimp", url: "https://mailchimp.com" },
      { name: "Asana", url: "https://asana.com" }
    ],
    tags: ["Energético", "Audaz", "Celebratorio", "Retro"],
    energy: "Muy Alta",
    formality: "Baja",
    bestFor: ["Usar para declaraciones audaces", "Perfecto para movimientos sociales", "Excelente para branding de eventos"],
    avoid: ["No para servicios financieros", "Evitar para salud", "No usar para temas serios/sombríos"]
  },
  {
    id: 8,
    name: "Sueño Nocturno",
    concept: "Modo oscuro elevado, experiencia de lujo nocturno, oscuridad sofisticada",
    description: "Paleta oscura sofisticada para experiencias premium. Modo oscuro elevado que transmite lujo y misterio.",
    psychology: "Crea atmósfera íntima y premium. Sofisticado sin ser frío. Perfecto para marcas enfocadas en la noche.",
    colors: [
      { hex: "#443352", name: "Crepúsculo Futuro", rgb: "68, 51, 82", cmyk: "75, 80, 40, 30" },
      { hex: "#1A1A1B", name: "Gris Obsidiana", rgb: "26, 26, 27", cmyk: "75, 68, 65, 80" },
      { hex: "#191970", name: "Azul Medianoche", rgb: "25, 25, 112", cmyk: "78, 78, 0, 56" },
      { hex: "#5E2C5F", name: "Ciruela Profunda", rgb: "94, 44, 95", cmyk: "1, 54, 0, 63" },
      { hex: "#F5F5DC", name: "Blanco Perla", rgb: "245, 245, 220", cmyk: "0, 0, 10, 4" }
    ],
    usage: ["Apps premium con modo oscuro", "Gaming de alta gama", "Streaming y multimedia", "Vida nocturna de lujo", "Audio premium"],
    examples: [
      { name: "Apple Music", url: "https://music.apple.com" },
      { name: "Netflix", url: "https://www.netflix.com" },
      { name: "PlayStation", url: "https://www.playstation.com" },
      { name: "Razer", url: "https://www.razer.com" }
    ],
    tags: ["Sofisticado", "Misterioso", "Reparador", "Premium"],
    energy: "Baja",
    formality: "Muy Alta",
    bestFor: ["Combinar con animaciones sutiles", "Usar gradientes para profundidad", "Siempre proporcionar alternativa de modo claro"],
    avoid: ["No usar negro puro #000000", "Evitar sin opción de modo claro", "No olvidar contraste de accesibilidad"]
  },
  {
    id: 9,
    name: "Confort Mineral",
    concept: "Neutrales de nueva generación, piedra táctil, minimalismo cálido",
    description: "Neutrales de nueva generación con calidez y textura. Inspirado en minerales y piedras naturales. Perfecto para diseño sereno y centrado en lo humano.",
    psychology: "Crea comodidad sin aburrimiento. Neutrales cálidos que se sienten humanos y accesibles. Ideal para contenido de formato largo.",
    colors: [
      { hex: "#D2B48C", name: "Arcilla Suave", rgb: "210, 180, 140", cmyk: "20, 30, 50, 0" },
      { hex: "#F5F5F0", name: "Blanco Tiza", rgb: "245, 245, 240", cmyk: "3, 2, 5, 0" },
      { hex: "#B7ACA3", name: "Mocha Mousse", rgb: "183, 172, 163", cmyk: "0, 6, 11, 28" },
      { hex: "#3A3A3A", name: "Silueta", rgb: "58, 58, 58", cmyk: "0, 0, 0, 77" },
      { hex: "#4E3629", name: "Marrón Espresso", rgb: "78, 54, 41", cmyk: "0, 31, 47, 69" }
    ],
    usage: ["Diseño editorial", "Interfaces de lectura", "Blogs y contenido largo", "Plataformas de publicación", "Sitios de noticias"],
    examples: [
      { name: "Medium", url: "https://medium.com" },
      { name: "Substack", url: "https://substack.com" },
      { name: "The New York Times", url: "https://www.nytimes.com" },
      { name: "Pocket", url: "https://getpocket.com" }
    ],
    tags: ["Cálido", "Humano", "Confortable", "Legible"],
    energy: "Baja-Media",
    formality: "Media-Alta",
    bestFor: ["Perfecto para lectura de formato largo", "Usar para contenido con mucho texto", "Combinar con altura de línea generosa"],
    avoid: ["No confundir con 'beige aburrido'", "Evitar sin jerarquía tipográfica fuerte", "No usar plano - agregar textura sutil"]
  }
];
