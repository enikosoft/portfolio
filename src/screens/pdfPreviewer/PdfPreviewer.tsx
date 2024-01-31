import {Viewer, Worker} from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import {RenderEnterFullScreenProps, fullScreenPlugin} from '@react-pdf-viewer/full-screen';
import {RenderCurrentScaleProps, RenderZoomInProps, RenderZoomOutProps, zoomPlugin} from '@react-pdf-viewer/zoom';
import {BsArrowsFullscreen} from 'react-icons/bs';
import {LuZoomIn, LuZoomOut} from 'react-icons/lu';

import {useDownloadPdf} from 'hooks/useDownloadPdf';
import {IoMdDownload} from 'react-icons/io';
import {useMediaQuery} from 'react-responsive';
import {mediaBreakpoints} from 'responsive';

export const PdfPriever = () => {
  const fullScreenPluginInstance = fullScreenPlugin();

  const {EnterFullScreen} = fullScreenPluginInstance;

  const zoomPluginInstance = zoomPlugin();
  const {CurrentScale, ZoomIn, ZoomOut} = zoomPluginInstance;

  const mobile = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.sm}px)`,
  });

  console.log('import.meta.env.VITE_CV_PATH', import.meta.env.VITE_CV_PATH);
  const [, handleDownload] = useDownloadPdf(import.meta.env.VITE_CV_PATH, 'Evgen-Nikolenko-FullStack-CV.pdf');
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
      <div className="h-full overflow-hidden p-2">
        <div className="flex flex-row items-start justify-center">
          <EnterFullScreen>
            {(props: RenderEnterFullScreenProps) => (
              <>
                {mobile ? (
                  <button onClick={handleDownload} title="download" className="btn mb-2 mr-2 h-8">
                    <IoMdDownload />{' '}
                  </button>
                ) : (
                  <button title="fullscreen" className="btn mb-2 mr-2 h-8" onClick={props.onClick}>
                    <BsArrowsFullscreen />
                  </button>
                )}
              </>
            )}
          </EnterFullScreen>

          <div className="flex h-8 flex-row pb-2">
            <ZoomOut>
              {(props: RenderZoomOutProps) => (
                <button title="zoom out" className="btn h-8" onClick={props.onClick}>
                  <LuZoomOut />
                </button>
              )}
            </ZoomOut>

            <div className="h-8 px-2 pt-1 text-textEditorColor">
              <CurrentScale>
                {(props: RenderCurrentScaleProps) => <>{`${Math.round(props.scale * 100)}%`}</>}
              </CurrentScale>
            </div>
            <ZoomIn>
              {(props: RenderZoomInProps) => (
                <button title="zoom in" className="btn h-8" onClick={props.onClick}>
                  <LuZoomIn />
                </button>
              )}
            </ZoomIn>
          </div>
        </div>
        <Viewer fileUrl={import.meta.env.VITE_CV_PATH} plugins={[zoomPluginInstance, fullScreenPluginInstance]} />
      </div>
    </Worker>
  );
};

export default PdfPriever;
