import { useState, useCallback } from 'react';
import { FEEDBACK_DURATIONS } from '../utils/constants';

interface UseCopyToClipboardReturn {
  copiedText: string | null;
  copyToClipboard: (text: string) => Promise<boolean>;
  error: Error | null;
}

/**
 * Hook personalizado para copiar texto al portapapeles con manejo de errores
 * y feedback visual temporal.
 *
 * @returns {UseCopyToClipboardReturn} Estado y función de copia
 */
export function useCopyToClipboard(): UseCopyToClipboardReturn {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const copyToClipboard = useCallback(async (text: string): Promise<boolean> => {
    try {
      // Intenta usar la API moderna de clipboard
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        setCopiedText(text);
        setError(null);

        // Resetear después del tiempo de feedback
        setTimeout(() => {
          setCopiedText(null);
        }, FEEDBACK_DURATIONS.COPY_SUCCESS);

        return true;
      } else {
        // Fallback para navegadores sin soporte o contextos no seguros
        return fallbackCopyToClipboard(text);
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Error al copiar al portapapeles');
      console.error('Error copying to clipboard:', error);
      setError(error);
      setCopiedText(null);

      // Intentar fallback en caso de error
      return fallbackCopyToClipboard(text);
    }
  }, []);

  const fallbackCopyToClipboard = (text: string): boolean => {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);

      if (successful) {
        setCopiedText(text);
        setError(null);
        setTimeout(() => {
          setCopiedText(null);
        }, FEEDBACK_DURATIONS.COPY_SUCCESS);
        return true;
      }

      throw new Error('Comando de copia falló');
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Método de fallback falló');
      console.error('Fallback copy failed:', error);
      setError(error);
      return false;
    }
  };

  return { copiedText, copyToClipboard, error };
}
