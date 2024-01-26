import {useState} from 'react';
import {FaGithub} from 'react-icons/fa';
import {MdClose, MdOutlineOpenInNew} from 'react-icons/md';
import {useMediaQuery} from 'react-responsive';
import {mediaBreakpoints} from 'responsive';
import {Project} from './utils';

interface ProjectCardProps {
  project: Project;
  isDialog?: boolean;
  isOpenDialog: boolean;
  toggleShowMore(): void;
}

const ProjectCard = ({project, isDialog = false, isOpenDialog, toggleShowMore}: ProjectCardProps) => {
  const displayedText = isOpenDialog ? project.description : `${project.description.slice(0, 180)}...`;

  return (
    <div className="relative flex w-full flex-col items-center justify-center rounded-lg px-4 py-4 sm:p-8 sm:py-6">
      {!isDialog && (
        <div className="before:absolute before:inset-0 before:rounded-lg before:bg-white before:opacity-c8 before:light:bg-black"></div>
      )}
      <div className="relative flex w-full flex-row items-center">
        <div className="flex h-24 w-24 min-w-[96px] items-center rounded-sm">
          <img src={project.img} alt={project.name} className="h-full w-full" />
        </div>
        <div className="pl-4 text-primaryColor">
          <span className="h-7 text-base font-semibold xl:text-2xl xl:font-bold">{project.name}</span>
          <div className="pt-1 text-sm font-light sm:pt-2 xl:text-base">
            <span>Main stack:</span>
            <div className="flex flex-row">
              {project.stack.map((item, key) => (
                <div
                  key={key}
                  className="group relative mx-0 my-2 flex h-9 w-9 items-center justify-center rounded-sm p-0 first:ml-0 hover:cursor-pointer hover:bg-white sm:mx-1 sm:p-1"
                >
                  {item}
                  <span
                    className="py-1/2 absolute left-1/2 m-5 mx-auto mt-10 -translate-x-1/2 translate-y-full rounded-md bg-white px-2 text-sm 
font-semibold text-black opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    {item.key}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full pb-4">
        {project?.git && (
          <div className="flex w-full items-center pt-4">
            <FaGithub className="mr-2 text-[30px]" />
            <a
              title="View on git hub"
              className="rounded-md bg-black px-4 py-1 text-primaryColor hover:cursor-pointer"
              href={project.git}
              target="_blank"
              rel="noreferrer"
            >
              Visit project
            </a>
          </div>
        )}

        {project?.url && (
          <div className="flex w-full items-center pt-2">
            <MdOutlineOpenInNew className="mr-2 text-[30px] text-themePrimaryColor" />
            <a
              className="px-1 text-base text-themePrimaryColor hover:underline"
              href={project?.url}
              target="_blank"
              rel="noreferrer"
            >
              View Demo
            </a>
          </div>
        )}

        <p className="mt-4 w-full break-words pb-2 text-base text-primaryColor">
          {isDialog ? project.description : displayedText}
        </p>

        {project.description.length > 3 && !isDialog && (
          <button
            title={isOpenDialog ? 'Read less' : 'Read more'}
            className="absolute font-semibold text-themePrimaryColor hover:cursor-pointer"
            onClick={toggleShowMore}
          >
            {isOpenDialog ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>
    </div>
  );
};

const ProjectCardWrapper = ({project}: {project: Project}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const mobile = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.sm}px)`,
  });

  return (
    <div>
      <ProjectCard project={project} isOpenDialog={showMore} toggleShowMore={toggleShowMore} />

      {showMore
        ? !mobile && (
            <>
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden  outline-none focus:outline-none">
                <div className="before:absolute before:inset-0 before:bg-white before:opacity-80"></div>

                <div className="relative mx-auto my-6 w-auto max-w-3xl">
                  <div className="relative flex w-full flex-col rounded-lg border-0 bg-bgColor shadow-lg outline-none focus:outline-none">
                    <div className="relative">
                      <ProjectCard isDialog project={project} isOpenDialog={showMore} toggleShowMore={toggleShowMore} />
                      <button
                        title="See more"
                        className="absolute right-2 top-2 text-white"
                        onClick={() => setShowMore(false)}
                      >
                        <MdClose className="text-[28px]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
            </>
          )
        : null}
    </div>
  );
};

export default ProjectCardWrapper;
