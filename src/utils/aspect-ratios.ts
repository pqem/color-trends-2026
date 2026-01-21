import type { AspectRatio, AspectRatioOption } from '../types/visualizer';

export const ASPECT_RATIO_OPTIONS: AspectRatioOption[] = [
  {
    ratio: '16:9',
    width: 1920,
    height: 1080,
    label: '16:9',
    description: 'Landscape HD',
  },
  {
    ratio: '9:16',
    width: 1080,
    height: 1920,
    label: '9:16',
    description: 'Vertical Stories',
  },
  {
    ratio: '1:1',
    width: 2048,
    height: 2048,
    label: '1:1',
    description: 'Square Post',
  },
  {
    ratio: '5:4',
    width: 2560,
    height: 2048,
    label: '5:4',
    description: 'Editorial',
  },
];

export const ASPECT_RATIO_MAP = ASPECT_RATIO_OPTIONS.reduce(
  (acc, option) => {
    acc[option.ratio] = option;
    return acc;
  },
  {} as Record<AspectRatio, AspectRatioOption>
);
