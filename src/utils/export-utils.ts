export const drawCover = (
  sourceCanvas: HTMLCanvasElement,
  targetContext: CanvasRenderingContext2D,
  targetWidth: number,
  targetHeight: number
) => {
  const sourceWidth = sourceCanvas.width;
  const sourceHeight = sourceCanvas.height;
  const sourceRatio = sourceWidth / sourceHeight;
  const targetRatio = targetWidth / targetHeight;

  let sourceX = 0;
  let sourceY = 0;
  let sourceDrawWidth = sourceWidth;
  let sourceDrawHeight = sourceHeight;

  if (sourceRatio > targetRatio) {
    sourceDrawWidth = sourceHeight * targetRatio;
    sourceX = (sourceWidth - sourceDrawWidth) / 2;
  } else {
    sourceDrawHeight = sourceWidth / targetRatio;
    sourceY = (sourceHeight - sourceDrawHeight) / 2;
  }

  targetContext.drawImage(
    sourceCanvas,
    sourceX,
    sourceY,
    sourceDrawWidth,
    sourceDrawHeight,
    0,
    0,
    targetWidth,
    targetHeight
  );
};

export const downloadBlob = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};
