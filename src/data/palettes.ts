export interface Color {
  hex: string;
  name: string;
  rgb?: string;
  cmyk?: string;
}

export interface Palette {
  id: number;
  name: string;
  concept: string;
  colors: Color[];
  usage: string[];
  tags: string[];
  energy: string;
  formality: string;
}

export const palettes: Palette[] = [
  {
    id: 1,
    name: "Quiet Modern Minimal",
    concept: "Essential warmth, clarity, and visual order without corporate coldness",
    colors: [
      { hex: "#F4F4F2", name: "Cloud Dancer", rgb: "244, 244, 242", cmyk: "0, 0, 1, 4" },
      { hex: "#CFD8DC", name: "Nimbus Gray", rgb: "207, 216, 220", cmyk: "6, 2, 0, 14" },
      { hex: "#455A64", name: "Baltic Sea", rgb: "69, 90, 100", cmyk: "31, 10, 0, 61" },
      { hex: "#B39DDB", name: "Quiet Violet", rgb: "179, 157, 219", cmyk: "18, 28, 0, 14" },
      { hex: "#DDC48E", name: "Golden Mist", rgb: "221, 196, 142", cmyk: "0, 11, 36, 13" }
    ],
    usage: ["Corporate websites with personality", "Clean UI/UX interfaces", "Minimalist editorial design"],
    tags: ["Minimalism", "Professional", "Clean"],
    energy: "Low-Medium",
    formality: "High"
  },
  {
    id: 2,
    name: "Synthesized Wellness",
    concept: "Nature + Technology + Mental wellbeing",
    colors: [
      { hex: "#A8D5BA", name: "Blossom Mint", rgb: "168, 213, 186", cmyk: "21, 0, 13, 16" },
      { hex: "#CADBAF", name: "Pale Pistachio", rgb: "202, 219, 175", cmyk: "8, 0, 20, 14" },
      { hex: "#7CBFAD", name: "Clinical Green", rgb: "124, 191, 173", cmyk: "35, 0, 10, 25" },
      { hex: "#D49A6A", name: "Warm Amber", rgb: "212, 154, 106", cmyk: "0, 27, 50, 17" },
      { hex: "#7B2F2F", name: "Deep Merlot", rgb: "123, 47, 47", cmyk: "0, 62, 62, 52" }
    ],
    usage: ["Health & fitness apps", "Educational platforms", "Digital wellness tools"],
    tags: ["Wellness", "Natural", "Technology"],
    energy: "Medium",
    formality: "Medium"
  },
  {
    id: 3,
    name: "Earth & Heritage",
    concept: "Roots, sustainability, emotional narrative, artisanal authenticity",
    colors: [
      { hex: "#B66E41", name: "Clay", rgb: "182, 110, 65", cmyk: "0, 40, 64, 29" },
      { hex: "#A79874", name: "Olive Root", rgb: "167, 152, 116", cmyk: "0, 9, 31, 35" },
      { hex: "#C59A6B", name: "Ochre", rgb: "197, 154, 107", cmyk: "0, 22, 46, 23" },
      { hex: "#8C6C50", name: "Coffee Taupe", rgb: "140, 108, 80", cmyk: "0, 23, 43, 45" },
      { hex: "#9B372E", name: "Rust", rgb: "155, 55, 46", cmyk: "0, 64, 70, 39" }
    ],
    usage: ["Editorial publications", "Artisanal branding", "Sustainability brands"],
    tags: ["Authentic", "Grounded", "Warm"],
    energy: "Low",
    formality: "High"
  },
  {
    id: 4,
    name: "Vivid Contrast",
    concept: "Energy, impact, instant visibility for attention economy",
    colors: [
      { hex: "#FF3AC1", name: "Electric Fuchsia", rgb: "255, 58, 193", cmyk: "0, 77, 0, 0" },
      { hex: "#7DA9D9", name: "Blue Aura", rgb: "125, 169, 217", cmyk: "42, 22, 0, 15" },
      { hex: "#FFB94C", name: "Amber Haze", rgb: "255, 185, 76", cmyk: "0, 27, 70, 0" },
      { hex: "#A1E3C5", name: "Jelly Mint", rgb: "161, 227, 197", cmyk: "29, 0, 13, 11" },
      { hex: "#333333", name: "Deep Charcoal", rgb: "51, 51, 51", cmyk: "0, 0, 0, 80" }
    ],
    usage: ["Social media content", "Digital campaigns", "Youth-oriented brands"],
    tags: ["Energetic", "Bold", "Modern"],
    energy: "Very High",
    formality: "Low"
  },
  {
    id: 5,
    name: "Metallic Warmth",
    concept: "Warm luxury, tactile experience, accessible sophistication",
    colors: [
      { hex: "#B66D4E", name: "Brushed Copper", rgb: "182, 109, 78", cmyk: "0, 40, 57, 29" },
      { hex: "#C08E58", name: "Bronze Glow", rgb: "192, 142, 88", cmyk: "0, 26, 54, 25" },
      { hex: "#C89F99", name: "Rose Gold", rgb: "200, 159, 153", cmyk: "0, 20, 24, 22" },
      { hex: "#837060", name: "Taupe Shadow", rgb: "131, 112, 96", cmyk: "0, 15, 27, 49" },
      { hex: "#C4C4C4", name: "Soft Silver", rgb: "196, 196, 196", cmyk: "0, 0, 0, 23" }
    ],
    usage: ["Premium editorial", "Luxury brands", "High-end packaging"],
    tags: ["Luxury", "Warm", "Tactile"],
    energy: "Medium",
    formality: "Very High"
  },
  {
    id: 6,
    name: "Cyber-Organic",
    concept: "Biological futurism, clean technology, bio-digital fusion",
    colors: [
      { hex: "#005F6A", name: "Transformative Teal", rgb: "0, 95, 106", cmyk: "92, 45, 48, 23" },
      { hex: "#A2FF86", name: "Electric Mint", rgb: "162, 255, 134", cmyk: "40, 0, 65, 0" },
      { hex: "#4E6E5D", name: "Digital Moss", rgb: "78, 110, 93", cmyk: "68, 40, 65, 25" },
      { hex: "#4B3621", name: "Fertile Earth", rgb: "75, 54, 33", cmyk: "55, 68, 80, 60" },
      { hex: "#316064", name: "Transformative Teal Alt", rgb: "49, 96, 100", cmyk: "51, 4, 0, 61" }
    ],
    usage: ["Tech startups", "Biotech products", "Environmental AI"],
    tags: ["Innovation", "Futuristic", "Conscious"],
    energy: "Medium-High",
    formality: "Medium"
  },
  {
    id: 7,
    name: "Radical Optimism",
    concept: "70s retro-future energy, vitality, crisis fatigue antidote",
    colors: [
      { hex: "#FF5F1F", name: "Sunset Orange", rgb: "255, 95, 31", cmyk: "0, 75, 95, 0" },
      { hex: "#630330", name: "Cosmic Purple", rgb: "99, 3, 48", cmyk: "45, 100, 50, 40" },
      { hex: "#FFD700", name: "Yolk Yellow", rgb: "255, 215, 0", cmyk: "0, 15, 100, 0" },
      { hex: "#DC143C", name: "Crimson Red", rgb: "220, 20, 60", cmyk: "0, 91, 73, 14" },
      { hex: "#FF6600", name: "Bright Orange", rgb: "255, 102, 0", cmyk: "0, 60, 100, 0" }
    ],
    usage: ["Festivals and events", "Gen Z content", "Social activism campaigns"],
    tags: ["Energetic", "Bold", "Celebratory"],
    energy: "Very High",
    formality: "Low"
  },
  {
    id: 8,
    name: "Nocturnal Dream",
    concept: "Elevated dark mode, luxury night experience, sophisticated darkness",
    colors: [
      { hex: "#443352", name: "Future Dusk", rgb: "68, 51, 82", cmyk: "75, 80, 40, 30" },
      { hex: "#1A1A1B", name: "Obsidian Gray", rgb: "26, 26, 27", cmyk: "75, 68, 65, 80" },
      { hex: "#191970", name: "Midnight Blue", rgb: "25, 25, 112", cmyk: "78, 78, 0, 56" },
      { hex: "#5E2C5F", name: "Deep Plum", rgb: "94, 44, 95", cmyk: "1, 54, 0, 63" },
      { hex: "#F5F5DC", name: "Pearl White", rgb: "245, 245, 220", cmyk: "0, 0, 10, 4" }
    ],
    usage: ["Premium apps with dark mode", "High-end gaming", "Streaming & multimedia"],
    tags: ["Sophisticated", "Mysterious", "Restful"],
    energy: "Low",
    formality: "Very High"
  },
  {
    id: 9,
    name: "Mineral Comfort",
    concept: "New generation neutrals, tactile stone, warm minimalism",
    colors: [
      { hex: "#D2B48C", name: "Soft Clay", rgb: "210, 180, 140", cmyk: "20, 30, 50, 0" },
      { hex: "#F5F5F0", name: "Chalk White", rgb: "245, 245, 240", cmyk: "3, 2, 5, 0" },
      { hex: "#B7ACA3", name: "Mocha Mousse", rgb: "183, 172, 163", cmyk: "0, 6, 11, 28" },
      { hex: "#3A3A3A", name: "Silhouette", rgb: "58, 58, 58", cmyk: "0, 0, 0, 77" },
      { hex: "#4E3629", name: "Espresso Brown", rgb: "78, 54, 41", cmyk: "0, 31, 47, 69" }
    ],
    usage: ["Editorial design", "Reading interfaces", "Blogs and long-form content"],
    tags: ["Warm", "Human", "Comfortable"],
    energy: "Low-Medium",
    formality: "Medium-High"
  }
];
