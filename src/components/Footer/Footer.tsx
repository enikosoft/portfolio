import {ThemeDialog} from 'components';
import {ThemeContext, ThemeContextInterface} from 'providers/theme';
import {useContext, useState} from 'react';
import {createPortal} from 'react-dom';
import {MdOutlineDarkMode} from 'react-icons/md';

export const Footer = () => {
  const {theme} = useContext(ThemeContext) as ThemeContextInterface;

  const [themeDialogOpen, setThemeDialogOpen] = useState<boolean>(false);

  const sidebarContentEl = document.getElementsByClassName('main-window')[0];

  return (
    <div className="relative h-[48px] w-full bg-themePrimaryColor xl:h-[24px]">
      {themeDialogOpen && createPortal(<ThemeDialog setThemeDialogOpen={setThemeDialogOpen} />, sidebarContentEl)}
      <div
        onClick={() => setThemeDialogOpen(!themeDialogOpen)}
        className="flex h-full flex-row items-center justify-end px-2 hover:cursor-pointer"
      >
        <MdOutlineDarkMode className="pr-1 text-xl text-primaryColor" />
        <span className="text-primaryColor">{theme}</span>
      </div>
    </div>
  );
};
