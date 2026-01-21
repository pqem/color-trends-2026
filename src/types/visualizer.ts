export type AspectRatio = '16:9' | '9:16' | '1:1' | '5:4';

export interface AspectRatioOption {
  ratio: AspectRatio;
  width: number;
  height: number;
  label: string;
  description: string;
}

export interface VisualizerPaletteOption {
  id: number;
  name: string;
  primary: string;
  secondary: string;
}

export interface BackgroundSettings {
  primaryColor: string;
  secondaryColor: string;
  animationSpeed: number;
  particleIntensity: number;
  enableBlur: boolean;
  enableNoise: boolean;
}
