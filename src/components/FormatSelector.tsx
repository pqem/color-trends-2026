import { ASPECT_RATIO_OPTIONS } from '../utils/aspect-ratios';
import type { AspectRatio } from '../types/visualizer';

interface FormatSelectorProps {
  selected: AspectRatio;
  onChange: (ratio: AspectRatio) => void;
}

export default function FormatSelector({ selected, onChange }: FormatSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {ASPECT_RATIO_OPTIONS.map((option) => {
        const isActive = selected === option.ratio;
        return (
          <button
            key={option.ratio}
            type="button"
            onClick={() => onChange(option.ratio)}
            className={`rounded-2xl border px-4 py-3 text-left transition-all ${
              isActive
                ? 'border-white/60 bg-white/15 text-white shadow-lg'
                : 'border-white/20 bg-white/5 text-white/70 hover:bg-white/10'
            }`}
            aria-pressed={isActive}
          >
            <div className="text-lg font-semibold">{option.label}</div>
            <div className="text-xs uppercase tracking-widest text-white/50">{option.description}</div>
          </button>
        );
      })}
    </div>
  );
}
