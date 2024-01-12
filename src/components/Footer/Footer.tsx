import {ThemeDialog} from 'components';
import {ThemeContext, ThemeContextInterface} from 'providers/theme';
import {useContext, useState} from 'react';
import {createPortal} from 'react-dom';
import {MdOutlineDarkMode} from 'react-icons/md';
import {useMediaQuery} from 'react-responsive';
import {mediaBreakpoints} from 'responsive';
import {socialNetworks} from 'screens/contact';

export const Footer = () => {
  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.xl}px)`,
  });

  const {theme} = useContext(ThemeContext) as ThemeContextInterface;

  const [themeDialogOpen, setThemeDialogOpen] = useState<boolean>(false);

  const sidebarContentEl = document.getElementsByClassName('main-window')[0];

  return (
    <div className="relative flex h-[48px] w-full flex-row justify-between bg-themePrimaryColor xl:h-[24px]">
      {mobileAndTablet && (
        <div className="flex flex-row gap-2 pl-2">{socialNetworks(24, true).map((item) => item)}</div>
      )}

      {themeDialogOpen && createPortal(<ThemeDialog setThemeDialogOpen={setThemeDialogOpen} />, sidebarContentEl)}
      <div
        onClick={() => setThemeDialogOpen(!themeDialogOpen)}
        className="flex h-full flex-row items-center justify-end px-2 hover:cursor-pointer"
      >
        <MdOutlineDarkMode className="pr-1 text-xl text-tabBarActiveTextColor" />
        <span className="text-tabBarActiveTextColor">{theme}</span>
      </div>
    </div>
  );
};
