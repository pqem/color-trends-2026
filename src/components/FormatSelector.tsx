import { ASPECT_RATIO_OPTIONS } from '../utils/aspect-ratios';
import type { AspectRatio } from '../types/visualizer';

interface FormatSelectorProps {
  selected: AspectRatio;
  onChange: (ratio: AspectRatio) => void;
}

export default function FormatSelector({ selected, onChange }: FormatSelectorProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-nowrap">
      {ASPECT_RATIO_OPTIONS.map((option) => {
        const isActive = selected === option.ratio;
        const [ratioW, ratioH] = option.ratio.split(':').map(Number);
        const maxSize = 22;
        const scale = maxSize / Math.max(ratioW, ratioH);
        const previewWidth = Math.round(ratioW * scale);
        const previewHeight = Math.round(ratioH * scale);
        return (
          <button
            key={option.ratio}
            type="button"
            onClick={() => onChange(option.ratio)}
            className={`flex min-w-[70px] flex-1 items-center gap-2 rounded-xl border px-2.5 py-2 text-left transition-all ${
              isActive
                ? 'border-white/60 bg-white/15 text-white shadow-lg'
                : 'border-white/20 bg-white/5 text-white/70 hover:bg-white/10'
            }`}
            aria-pressed={isActive}
          >
            <span
              className="flex items-center justify-center rounded-[6px] border border-white/30"
              style={{ width: previewWidth, height: previewHeight }}
              aria-hidden="true"
            />
            <span className="flex flex-col">
              <span className="text-[11px] font-semibold leading-tight">{option.label}</span>
              <span className="text-[9px] uppercase tracking-[0.18em] text-white/45">
                {option.description}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
