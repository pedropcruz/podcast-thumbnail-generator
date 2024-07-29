import html2canvas from "html2canvas";

export async function generateThumbnail(
  element: HTMLElement,
  episodeNumber: number
): Promise<void> {
  const scale = 1400 / element.clientWidth;

  const canvas = await html2canvas(element, { scale });

  await downloadCanvasAsImage(canvas, episodeNumber);
}

async function downloadCanvasAsImage(
  canvas: HTMLCanvasElement,
  episodeNumber: number
): Promise<void> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("Não foi possível gerar o blob"));
        return;
      }

      const url = URL.createObjectURL(blob);
      const downloadLink = createDownloadLink(url, episodeNumber);

      downloadLink.click();

      cleanup(downloadLink, url);
      resolve();
    }, "image/png");
  });
}

function createDownloadLink(
  url: string,
  episodeNumber: number
): HTMLAnchorElement {
  const a = document.createElement("a");
  a.href = url;
  a.download = `podcast-thumbnail-${episodeNumber}.png`;
  document.body.appendChild(a);
  return a;
}

function cleanup(element: HTMLElement, url: string): void {
  document.body.removeChild(element);
  URL.revokeObjectURL(url);
}
