import { useState } from 'react';
import html2canvas from 'html2canvas';
import type { AspectRatio } from '../types/visualizer';
import { ASPECT_RATIO_MAP } from '../utils/aspect-ratios';
import { downloadBlob, drawCover } from '../utils/export-utils';

export const useImageExport = () => {
  const [isExporting, setIsExporting] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const exportAsJpg = async (
    element: HTMLElement,
    aspectRatio: AspectRatio,
    quality: number
  ) => {
    setIsExporting(true);
    setError(null);

    try {
      const snapshot = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
        logging: false,
      });

      const config = ASPECT_RATIO_MAP[aspectRatio];
      const targetCanvas = document.createElement('canvas');
      targetCanvas.width = config.width;
      targetCanvas.height = config.height;

      const context = targetCanvas.getContext('2d');
      if (!context) {
        throw new Error('No se pudo preparar el canvas de exportacion');
      }

      drawCover(snapshot, context, config.width, config.height);

      const blob = await new Promise<Blob | null>((resolve) => {
        targetCanvas.toBlob(resolve, 'image/jpeg', quality);
      });

      if (!blob) {
        throw new Error('No se pudo generar el archivo JPG');
      }

      downloadBlob(blob, `fondo-${aspectRatio}-${Date.now()}.jpg`);
      return true;
    } catch (exportError) {
      const nextError =
        exportError instanceof Error
          ? exportError
          : new Error('Error al exportar el fondo');
      setError(nextError);
      return false;
    } finally {
      setIsExporting(false);
    }
  };

  return {
    exportAsJpg,
    isExporting,
    error,
  };
};
