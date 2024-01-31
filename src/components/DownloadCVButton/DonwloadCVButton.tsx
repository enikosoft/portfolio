import {useDownloadPdf} from 'hooks/useDownloadPdf';
import {useMediaQuery} from 'react-responsive';
import {mediaBreakpoints} from 'responsive';

export const DonwloadCVButton = ({isSmall}: {isSmall?: boolean}) => {
  const [, handleDownload] = useDownloadPdf(import.meta.env.VITE_CV_PATH, 'Evgen-Nikolenko-FullStack-CV.pdf');

  const mobile = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.sm}px)`,
  });

  return mobile ? (
    <a
      title="download cv"
      className={`${!isSmall ? 'mb-8 mr-10 w-full rounded px-12 py-4 text-center sm:mb-0 sm:w-fit' : ''}  btn`}
      href={import.meta.env.VITE_CV_PATH}
    >
      Download CV
    </a>
  ) : (
    <button
      title="download cv"
      onClick={handleDownload}
      className={`${!isSmall ? 'mb-8 mr-10 w-full rounded px-12 py-4 sm:mb-0 sm:w-fit' : ''}  btn`}
    >
      Download CV
    </button>
  );
};
