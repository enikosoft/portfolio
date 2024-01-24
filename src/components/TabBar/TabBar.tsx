import {AppContext, AppContextInterface} from 'providers/application';
import {RoutesLinkItems, routesLinkItems} from 'providers/routes';
import {useContext} from 'react';
import {MdClose} from 'react-icons/md';
import {Link, useLocation, useNavigate} from 'react-router-dom';

export const TabBar = ({mobileAndTablet}: {mobileAndTablet: boolean}) => {
  const {pathname, state} = useLocation();
  const navigate = useNavigate();

  const {pdfPreviewerOpen, setPdfPreviewerOpen} = useContext(AppContext) as AppContextInterface;

  const handleCloseCVPreviewer = () => {
    setPdfPreviewerOpen(false);
    navigate('/');
  };

  const getLink = (item: RoutesLinkItems, key: number) => (
    <Link
      key={key}
      to={item?.path || '/'}
      state={{historyPath: state?.historyPath}}
      className={`
        ${pathname === item?.path && 'active'}
        relative flex items-center gap-2 border-b border-r border-t border-b-tabBarBorderColor border-r-tabBarBorderColor border-t-tabBarBgColor bg-tabBarBgColor px-6 py-2 text-base text-textEditorColor
        hover:bg-textEditorHoverBg hover:text-textEditorHoverColor
        [&.active]:border-t-2 [&.active]:border-solid [&.active]:border-b-[none] [&.active]:border-t-tabBarActiveBorderColor [&.active]:bg-tabBarActiveBgColor [&.active]:text-tabBarActiveTextColor`}
    >
      {item.logo}
      {item.title}
      {item?.closable && (
        <MdClose
          onClick={handleCloseCVPreviewer}
          className="absolute right-px text-textEditorColor hover:cursor-pointer"
        />
      )}
    </Link>
  );

  return (
    <header className="relative mt-px flex h-9 w-full items-end justify-between">
      <nav className="flex h-9 flex-row items-center">
        {routesLinkItems(pdfPreviewerOpen).map((item, key) => {
          if (mobileAndTablet) {
            const linksForResponsive = [];
            if (pdfPreviewerOpen && item.path === '/cv') {
              linksForResponsive.push(getLink(item, key));
            } else if (pathname === item?.path || state?.historyPath === item?.path) {
              linksForResponsive.push(getLink(item, key));
            }

            return linksForResponsive;
          }
          return getLink(item, key);
        })}
      </nav>
    </header>
  );
};
