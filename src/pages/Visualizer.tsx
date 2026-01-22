import { useRef, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackgroundVisualizer from '../components/BackgroundVisualizer';
import ExportPanel from '../components/ExportPanel';
import VisualizerControls from '../components/VisualizerControls';
import { palettes } from '../data/palettes';
import { useImageExport } from '../hooks/use-image-export';
import type { AspectRatio, VisualizerPaletteOption } from '../types/visualizer';

const paletteOptions: VisualizerPaletteOption[] = palettes.map((palette) => {
  const primary = palette.colors[0]?.hex ?? '#F0EFEB';
  const secondary = palette.colors[palette.colors.length - 1]?.hex ?? primary;

  return {
    id: palette.id,
    name: palette.name,
    primary,
    secondary,
  };
});

const DEFAULT_PALETTE = paletteOptions[0];

export default function Visualizer() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [activePaletteId, setActivePaletteId] = useState(DEFAULT_PALETTE.id);
  const [primaryColor, setPrimaryColor] = useState(DEFAULT_PALETTE.primary);
  const [secondaryColor, setSecondaryColor] = useState(DEFAULT_PALETTE.secondary);
  const [animationSpeed, setAnimationSpeed] = useState(1.2);
  const [particleIntensity, setParticleIntensity] = useState(60);
  const [enableBlur, setEnableBlur] = useState(true);
  const [enableNoise, setEnableNoise] = useState(true);
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('16:9');
  const [quality, setQuality] = useState(0.92);

  const { exportAsJpg, isExporting, error } = useImageExport();

  const activePalette = paletteOptions.find((palette) => palette.id === activePaletteId) ?? DEFAULT_PALETTE;

  const handlePaletteChange = (paletteId: number) => {
    const nextPalette = paletteOptions.find((palette) => palette.id === paletteId);
    if (!nextPalette) return;
    setActivePaletteId(nextPalette.id);
    setPrimaryColor(nextPalette.primary);
    setSecondaryColor(nextPalette.secondary);
  };

  const handleExport = async () => {
    if (!backgroundRef.current) return;
    await exportAsJpg(backgroundRef.current, aspectRatio, quality);
  };

  const handleRandomize = () => {
    const randomPalette = paletteOptions[Math.floor(Math.random() * paletteOptions.length)];
    const paletteSource = palettes.find((palette) => palette.id === randomPalette.id);
    const colors = paletteSource?.colors ?? [];
    const randomIndices = new Set<number>();

    while (randomIndices.size < 2 && colors.length >= 2) {
      randomIndices.add(Math.floor(Math.random() * colors.length));
    }

    const [firstIndex, secondIndex] = Array.from(randomIndices.values());
    const nextPrimary = colors[firstIndex]?.hex ?? randomPalette.primary;
    const nextSecondary = colors[secondIndex]?.hex ?? randomPalette.secondary;

    setActivePaletteId(randomPalette.id);
    setPrimaryColor(nextPrimary);
    setSecondaryColor(nextSecondary);
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0">
        <BackgroundVisualizer
          ref={backgroundRef}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          animationSpeed={animationSpeed}
          particleIntensity={particleIntensity}
          enableBlur={enableBlur}
          enableNoise={enableNoise}
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="flex flex-wrap items-center justify-between gap-4 px-6 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver
          </Link>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Visualizador</p>
            <h1 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
              Fondos Interactivos
            </h1>
          </div>
          <div className="text-right text-sm text-white/70">
            <div className="font-semibold">{activePalette.name}</div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">Paleta activa</div>
          </div>
        </header>

        <div className="flex-1" />

        <div className="fixed bottom-0 left-0 right-0 z-20 px-6 pb-6 lg:bottom-auto lg:left-auto lg:right-6 lg:top-24 lg:w-96 lg:px-0 lg:pb-0">
          <div className="mx-auto w-full max-w-xl space-y-6 lg:max-w-none">
            <VisualizerControls
              palettes={paletteOptions}
              activePaletteId={activePaletteId}
              onPaletteChange={handlePaletteChange}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              onPrimaryColorChange={setPrimaryColor}
              onSecondaryColorChange={setSecondaryColor}
              animationSpeed={animationSpeed}
              onAnimationSpeedChange={setAnimationSpeed}
              particleIntensity={particleIntensity}
              onParticleIntensityChange={setParticleIntensity}
              enableBlur={enableBlur}
              onToggleBlur={() => setEnableBlur((prev) => !prev)}
              enableNoise={enableNoise}
              onToggleNoise={() => setEnableNoise((prev) => !prev)}
              onRandomize={handleRandomize}
            />
            <div className="space-y-4">
              <ExportPanel
                aspectRatio={aspectRatio}
                onAspectRatioChange={setAspectRatio}
                quality={quality}
                onQualityChange={setQuality}
                onExport={handleExport}
                isExporting={isExporting}
              />
              {error && (
                <div className="rounded-2xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-100">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
