import { Download } from 'lucide-react';
import type { AspectRatio } from '../types/visualizer';
import { ASPECT_RATIO_MAP } from '../utils/aspect-ratios';
import FormatSelector from './FormatSelector';

interface ExportPanelProps {
  aspectRatio: AspectRatio;
  onAspectRatioChange: (ratio: AspectRatio) => void;
  quality: number;
  onQualityChange: (value: number) => void;
  onExport: () => void;
  isExporting: boolean;
}

export default function ExportPanel({
  aspectRatio,
  onAspectRatioChange,
  quality,
  onQualityChange,
  onExport,
  isExporting,
}: ExportPanelProps) {
  const size = ASPECT_RATIO_MAP[aspectRatio];
  const qualityLabel = `${Math.round(quality * 100)}%`;

  return (
    <div className="rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">Exportar Fondo</p>
        <h3 className="text-xl font-semibold text-white">Alta resolucion</h3>
        <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-white/50 leading-none">
          Tamano
          <span className="font-mono text-[11px] tracking-normal text-white/80">
            {size.width} x {size.height}px
          </span>
        </div>
      </div>

      <div className="mt-6">
        <FormatSelector selected={aspectRatio} onChange={onAspectRatioChange} />
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
          <span>Calidad JPG</span>
          <span>{qualityLabel}</span>
        </div>
        <input
          type="range"
          min={0.7}
          max={1}
          step={0.01}
          value={quality}
          onChange={(event) => onQualityChange(Number(event.target.value))}
          className="mt-3 w-full accent-white/70"
        />
      </div>

      <button
        type="button"
        onClick={onExport}
        disabled={isExporting}
        className={`mt-6 inline-flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-base font-semibold transition-all ${
          isExporting
            ? 'cursor-not-allowed bg-white/10 text-white/40'
            : 'bg-white text-black shadow-lg shadow-white/10 hover:-translate-y-0.5'
        }`}
      >
        <Download className="h-5 w-5" />
        {isExporting ? 'Exportando...' : 'Descargar JPG'}
      </button>
    </div>
  );
}
