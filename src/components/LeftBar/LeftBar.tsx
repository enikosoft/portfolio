import {useContext, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';

import {FaFolder, FaFolderOpen} from 'react-icons/fa';
import {IoIosArrowDown, IoIosArrowForward} from 'react-icons/io';

import {AppContext, AppContextInterface} from 'providers/application';
import {routesLinkItems} from 'providers/routes';
import {MdClose} from 'react-icons/md';
import {twMerge} from 'tailwind-merge';

export const LeftBar = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(true);

  const {isResponsiveTabBar, setResponsiveTabBar} = useContext(AppContext) as AppContextInterface;
  const {pdfPreviewerOpen, setPdfPreviewerOpen} = useContext(AppContext) as AppContextInterface;

  const handleCloseCVPreviewer = () => {
    setPdfPreviewerOpen(false);
    navigate('/');
  };

  return (
    <aside
      className={twMerge(
        `overflow-x border-t-1 fixed xl:static sm:block left-auto right-0 top-0 xl:top-12 z-40 h-[100svh] border border-b-0
        border-r-0 border-l-headerBorderColor border-r-leftSideBorder border-t-headerBorderColor
        bg-bgColor transition-all duration-200 ease-in
        xl:left-12 xl:right-auto xl:w-72
        xl:border-r xl:border-t-0
        xl:border-l-leftSideBorder xl:border-r-leftSideBorder xl:transition-none`,
        ` ${isResponsiveTabBar ? 'w-80' : 'w-0'}`
      )}
    >
      <div className="w-full px-4 py-2">
        <div className="block font-code font-light text-textEditorColor">EXPLORER</div>
      </div>
      <button
        type="button"
        className="flex w-full items-center gap-2 px-5 py-1 text-base text-textEditorColor hover:bg-textEditorHoverBg hover:text-textEditorHoverColor"
        onClick={() => setOpen(!open)}
      >
        {open ? <IoIosArrowDown /> : <IoIosArrowForward />}
        {open ? <FaFolderOpen color="#90a4ad" /> : <FaFolder color="#90a4ad" />}

        <p>Portfolio</p>
      </button>
      {open && (
        <>
          {routesLinkItems(pdfPreviewerOpen).map((item, key) => (
            <Link
              key={key}
              to={item?.path || '/'}
              onClick={() => setResponsiveTabBar(!isResponsiveTabBar)}
              className={`${
                pathname === item?.path && 'active'
              } flex relative items-center gap-2 px-14 py-1 text-base text-textEditorColor hover:bg-textEditorHoverBg hover:text-textEditorHoverColor [&.active]:bg-themePrimaryColor [&.active]:text-tabBarActiveTextColor`}
            >
              {item.logo}
              {item.title}
              {item?.closable && (
                <MdClose
                  onClick={handleCloseCVPreviewer}
                  className="text-xl absolute right-4 text-textEditorColor hover:cursor-pointer"
                />
              )}
            </Link>
          ))}
        </>
      )}
    </aside>
  );
};

export default LeftBar;
