export interface ColorOfYear {
  name: string;
  hex: string;
  code: string;
  brand: string;
  description: string;
  textColor: string;
}

export const colorsOfYear: ColorOfYear[] = [
  {
    name: 'Cloud Dancer',
    hex: '#F0EFEB',
    code: 'PANTONE 11-4201',
    brand: 'Pantone',
    description:
      'El primer blanco elegido como Color del Año. Un blanco cálido y suave como una nube iluminada al amanecer. Representa claridad visual y espacio para respirar en un mundo de sobrecarga digital.',
    textColor: 'text-neutral-700',
  },
  {
    name: 'Teal Transformativo',
    hex: '#316064',
    code: 'COLORO 092-37-14',
    brand: 'WGSN',
    description:
      'La innovación se encuentra con la conciencia ambiental. Un equilibrio entre tecnología y naturaleza, representando crecimiento y transformación.',
    textColor: 'text-neutral-50',
  },
];
