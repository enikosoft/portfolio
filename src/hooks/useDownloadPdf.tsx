import {useEffect, useState} from 'react';

export const useDownloadPdf = (pdfUrl: string, name?: string): [Blob | null, () => void] => {
  const [pdf, setPdf] = useState<Blob | null>(null);

  useEffect(() => {
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => setPdf(blob))
      .catch((error) => console.error('Error loading PDF:', error));
  }, [pdfUrl]);

  const handleDownload = () => {
    if (pdf) {
      const url = URL.createObjectURL(pdf);
      const link = document.createElement('a');
      link.href = url;
      link.download = name || 'file.pdf';
      link.type = 'application/pdf';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);
    }
  };

  return [pdf, handleDownload];
};
