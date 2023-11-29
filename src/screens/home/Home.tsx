import {AppContext, AppContextInterface} from 'providers/application';
import {useContext} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {TypeAnimation} from 'react-type-animation';

import pdf from 'assets/EvgenNikolenko-JSdev.pdf';

export const Home = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();

  const {setPdfPreviewerOpen} = useContext(AppContext) as AppContextInterface;

  const handleShowCV = () => {
    setPdfPreviewerOpen(true);
    navigate('/cv', {state: {historyPath: pathname}});
  };

  return (
    <div className="xl:pt-20 lg:pb-40 xl:pb-0 flex items-center justify-center sm:px-20 xl:flex-row flex-col-reverse">
      <div className="flex items-center xl:items-end flex-col py-10 xl:w-1/2 w-full text-xl">
        <div className="w-fit">
          <p className="text-xl text-themePrimaryColor">
            <span className="span">{'<'}</span>Hi 👋 my name is
          </p>

          <h1 className="font-bold text-primaryColor opacity-70 pt-2 text-3xl sm:text-5xl">
            Evgen Nikolenko <span className="text-3xl sm:text-5xl font-extrabold text-themePrimaryColor">{'/>'}</span>{' '}
          </h1>
          <TypeAnimation
            sequence={['Full-Stack Developer', 1000, 'React Developer', 1000, 'Back-End Developer', 1000]}
            wrapper="span"
            speed={1}
            style={{
              paddingTop: '8px',
              fontWeight: '300',
              fontSize: '1.5rem',
              color: '#768390',
              display: 'inline-block',
            }}
            repeat={Infinity}
          />
          <div className="w-full mt-10 flex flex-col sm:flex-row">
            <Link to={pdf} target="_blank" download>
              <button className="w-full sm:w-fit rounded btn mb-8 sm:mb-0 mr-10 px-12 py-4">Download CV</button>
            </Link>

            <button
              className="w-full sm:w-fit rounded btn-secondary px-12 py-4 hover:brightness-110"
              onClick={handleShowCV}
            >
              Open CV
            </button>
          </div>
        </div>
      </div>
      <div className="static: xl:relative top-0 xl:top-[-64px] xl:w-1/2 w-ful justify-center">
        <div className="bg-cover bg-bottom bg-photo w-[300px] h-[300px] md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[580px]"></div>
      </div>
    </div>
  );
};
