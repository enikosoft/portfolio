import {Theme, ThemeContext, ThemeContextInterface} from 'providers/theme';
import {Dispatch, SetStateAction, useContext} from 'react';
import {MdClose} from 'react-icons/md';

export const ThemeDialog = ({setThemeDialogOpen}: {setThemeDialogOpen: Dispatch<SetStateAction<boolean>>}) => {
  const {theme, toggleTheme} = useContext(ThemeContext) as ThemeContextInterface;

  const handleSelectTheme = (selectedTheme: Theme) => () => {
    toggleTheme(selectedTheme);
    setThemeDialogOpen(false);
  };

  return (
    <div className="right-3 bottom-3 w-[95%] sm:w-[480px] bg-bgColor h-auto absolute rounded-lg border-1 border-themePrimaryColor shadow-technologiesCard">
      <div className="flex flex-row justify-between px-4 pt-2">
        <p className="text-primaryColor text-md font-nunito">Choose theme:</p>
        <MdClose className="text-primaryColor hover:cursor-pointer" onClick={() => setThemeDialogOpen(false)} />
      </div>
      <div className="flex flex-row justify-center">
        {Object.values(Theme).map((item, key) => {
          const selected = theme === item;
          return (
            <div key={key} className="px-4 py-2 text-primaryColor text-lg text-center">
              <button
                onClick={handleSelectTheme(item)}
                disabled={selected}
                className={`btn disabled:cursor-not-allowed ${selected ? 'bg-themePrimaryColor' : ''}`}
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
