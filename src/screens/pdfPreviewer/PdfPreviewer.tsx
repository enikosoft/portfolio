import {Viewer, Worker} from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import {fullScreenPlugin, RenderEnterFullScreenProps} from '@react-pdf-viewer/full-screen';
import {RenderCurrentScaleProps, RenderZoomInProps, RenderZoomOutProps, zoomPlugin} from '@react-pdf-viewer/zoom';
import {BsArrowsFullscreen} from 'react-icons/bs';
import {LuZoomIn, LuZoomOut} from 'react-icons/lu';

import pdf from 'assets/EvgenNikolenko-JSdev.pdf';

export const PdfPriever = () => {
  const fullScreenPluginInstance = fullScreenPlugin();

  const {EnterFullScreen} = fullScreenPluginInstance;

  const zoomPluginInstance = zoomPlugin();
  const {CurrentScale, ZoomIn, ZoomOut} = zoomPluginInstance;

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
      <div className="p-2 overflow-hidden h-full">
        <div className="flex justify-center flex-row items-start">
          <EnterFullScreen>
            {(props: RenderEnterFullScreenProps) => (
              <button className="btn mr-2 mb-2 h-8" onClick={props.onClick}>
                <BsArrowsFullscreen />
              </button>
            )}
          </EnterFullScreen>

          <div className="flex flex-row pb-2 h-8">
            <ZoomOut>
              {(props: RenderZoomOutProps) => (
                <button className="btn h-8" onClick={props.onClick}>
                  <LuZoomOut />
                </button>
              )}
            </ZoomOut>

            <div className="text-textEditorColor px-2 h-8 pt-1">
              <CurrentScale>
                {(props: RenderCurrentScaleProps) => <>{`${Math.round(props.scale * 100)}%`}</>}
              </CurrentScale>
            </div>
            <ZoomIn>
              {(props: RenderZoomInProps) => (
                <button className="btn h-8" onClick={props.onClick}>
                  <LuZoomIn />
                </button>
              )}
            </ZoomIn>
          </div>
        </div>
        <Viewer fileUrl={pdf} plugins={[zoomPluginInstance, fullScreenPluginInstance]} />
      </div>
    </Worker>
  );
};
