import {useState} from 'react';
import ProjectCard from './ProjectCard';
import {comerciaProjects, customProjects} from './utils';

import {DonwloadCVButton} from 'components/DownloadCVButton';

export const Projects = () => {
  const data = [
    {
      label: 'Comercial',
      value: 'comercial',
    },
    {
      label: 'Personal',
      value: 'personal',
    },
  ];
  const [activeTab, setActiveTab] = useState(data[0].value);

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center sm:px-1">
        <div className="flex flex-row items-center pb-6 pt-4 align-middle">
          <span className="html-tag">{'<b>'} </span>
          <p className="px-2 pb-2 text-xl font-bold text-primaryColor sm:text-2xl">
            My <span className="text-xl text-themePrimaryColor sm:text-2xl">Projects</span>
          </p>
          <span className="html-tag">{'</b>'}</span>
        </div>
      </div>
      <div className="mb-8">
        <button
          title="Comercial projects"
          onClick={() => setActiveTab('comercial')}
          className={activeTab === 'comercial' ? `btn-active` : 'btn'}
        >
          Comercial
        </button>
        <button
          title="Personal projects"
          onClick={() => setActiveTab('personal')}
          className={activeTab === 'personal' ? `btn-active` : 'btn'}
        >
          Personal
        </button>
      </div>
      <>
        {activeTab === 'comercial' ? (
          <div className="xxl:grid-cols-3 grid grid-cols-1 gap-6 md:grid-cols-2">
            {comerciaProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        ) : (
          <div className="xxl:grid-cols-3 grid grid-cols-1 gap-6 md:grid-cols-2">
            {customProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        )}
      </>
      <div className="mt-12 w-full">
        <i className="fond-light pr-4 text-lg text-primaryColor">More information</i>
        <DonwloadCVButton isSmall />
      </div>
    </>
  );
};

export default Projects;
