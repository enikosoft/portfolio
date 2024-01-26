import {ThemeContext} from 'providers/theme/ThemeContex';
import {ThemeContextInterface} from 'providers/theme/types';

import {Suspense, lazy, useContext, useState} from 'react';
import {createPortal} from 'react-dom';
import {MdOutlineDarkMode} from 'react-icons/md';
import {socialNetworks} from 'screens/contact/utils';

const ThemeDialog = lazy(() => import('../../components/ThemeDialog/ThemeDialog'));

export const Footer = ({mobileAndTablet}: {mobileAndTablet: boolean}) => {
  const {theme} = useContext(ThemeContext) as ThemeContextInterface;

  const [themeDialogOpen, setThemeDialogOpen] = useState<boolean>(false);

  const sidebarContentEl = document.getElementsByClassName('main-window')[0];

  return (
    <div className="relative flex h-[48px] w-full flex-row justify-between bg-themePrimaryColor xl:h-[24px] xl:justify-end">
      {mobileAndTablet && (
        <div className="flex flex-row gap-2 pl-2">{socialNetworks(24, true).map((item) => item)}</div>
      )}

      {themeDialogOpen &&
        createPortal(
          <Suspense>
            <ThemeDialog setThemeDialogOpen={setThemeDialogOpen} />
          </Suspense>,
          sidebarContentEl
        )}
      <div
        onClick={() => setThemeDialogOpen(!themeDialogOpen)}
        className="flex h-full flex-row items-center justify-end px-2 hover:cursor-pointer"
      >
        <MdOutlineDarkMode className="pr-1 text-xl text-bgColor" />
        <span className="font-bold text-bgColor">{theme}</span>
      </div>
    </div>
  );
};
