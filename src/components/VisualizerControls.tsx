import { HexColorInput, HexColorPicker } from 'react-colorful';
import { Shuffle } from 'lucide-react';
import type { VisualizerPaletteOption } from '../types/visualizer';

interface VisualizerControlsProps {
  palettes: VisualizerPaletteOption[];
  activePaletteId: number;
  onPaletteChange: (paletteId: number) => void;
  primaryColor: string;
  secondaryColor: string;
  onPrimaryColorChange: (color: string) => void;
  onSecondaryColorChange: (color: string) => void;
  animationSpeed: number;
  onAnimationSpeedChange: (value: number) => void;
  particleIntensity: number;
  onParticleIntensityChange: (value: number) => void;
  enableBlur: boolean;
  onToggleBlur: () => void;
  enableNoise: boolean;
  onToggleNoise: () => void;
  onRandomize: () => void;
}

const toggleClassName = (active: boolean) =>
  `rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
    active
      ? 'border-white/60 bg-white text-black'
      : 'border-white/20 bg-white/5 text-white/70 hover:bg-white/10'
  }`;

export default function VisualizerControls({
  palettes,
  activePaletteId,
  onPaletteChange,
  primaryColor,
  secondaryColor,
  onPrimaryColorChange,
  onSecondaryColorChange,
  animationSpeed,
  onAnimationSpeedChange,
  particleIntensity,
  onParticleIntensityChange,
  enableBlur,
  onToggleBlur,
  enableNoise,
  onToggleNoise,
  onRandomize,
}: VisualizerControlsProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Controles</p>
          <h3 className="text-xl font-semibold text-white">Crea tu fondo</h3>
        </div>
        <button
          type="button"
          onClick={onRandomize}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/20"
        >
          <Shuffle className="h-4 w-4" />
          Randomizar
        </button>
      </div>

      <div className="mt-6">
        <label className="text-xs uppercase tracking-[0.3em] text-white/60">Paleta base</label>
        <select
          value={activePaletteId}
          onChange={(event) => onPaletteChange(Number(event.target.value))}
          className="mt-3 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white"
        >
          {palettes.map((palette) => (
            <option key={palette.id} value={palette.id} className="text-black">
              {palette.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">Primario</span>
            <span
              className="h-5 w-5 rounded-full border border-white/30"
              style={{ backgroundColor: primaryColor }}
            />
          </div>
          <HexColorPicker className="mt-4 w-full" color={primaryColor} onChange={onPrimaryColorChange} />
          <HexColorInput
            className="mt-4 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 font-mono text-sm uppercase text-white/80"
            color={primaryColor}
            onChange={onPrimaryColorChange}
            prefixed
          />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">Secundario</span>
            <span
              className="h-5 w-5 rounded-full border border-white/30"
              style={{ backgroundColor: secondaryColor }}
            />
          </div>
          <HexColorPicker className="mt-4 w-full" color={secondaryColor} onChange={onSecondaryColorChange} />
          <HexColorInput
            className="mt-4 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 font-mono text-sm uppercase text-white/80"
            color={secondaryColor}
            onChange={onSecondaryColorChange}
            prefixed
          />
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div>
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
            <span>Velocidad</span>
            <span>{animationSpeed.toFixed(1)}x</span>
          </div>
          <input
            type="range"
            min={0.5}
            max={3}
            step={0.1}
            value={animationSpeed}
            onChange={(event) => onAnimationSpeedChange(Number(event.target.value))}
            className="mt-3 w-full accent-white/70"
          />
        </div>

        <div>
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
            <span>Particulas</span>
            <span>{Math.round(particleIntensity)}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={particleIntensity}
            onChange={(event) => onParticleIntensityChange(Number(event.target.value))}
            className="mt-3 w-full accent-white/70"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={onToggleBlur} className={toggleClassName(enableBlur)}>
          Blur suave
        </button>
        <button type="button" onClick={onToggleNoise} className={toggleClassName(enableNoise)}>
          Textura noise
        </button>
      </div>
    </div>
  );
}
