import { Theme, ThemeContext, ThemeContextInterface } from "providers/theme";
import { useContext } from "react";

import { CgDarkMode } from "react-icons/cg";
import { GrSearch } from "react-icons/gr";
import { useMediaQuery } from "react-responsive";
import { mediaBreakpoints } from "responsive";

export const Header = () => {
  const { theme, toggleTheme } = useContext(
    ThemeContext,
  ) as ThemeContextInterface;

  const handleTheme = () => {
    const nextTheme = theme === Theme.LIGHT ? Theme.BLUE : Theme.LIGHT;
    toggleTheme(nextTheme);
  };

  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.xl}px)`,
  });

  return (
    <section className="left-0 top-0 flex h-header w-full items-center justify-center border-b border-b-headerBorderColor bg-bgColor">
      <div className="xl:border xl:pl-60 xl:pr-60 flex h-4/6 items-center rounded-lg border-solid blue:border-[#b9bec271]">
        {!mobileAndTablet && (
          <GrSearch className="mr-2 rotate-90 text-xl text-primaryColor opacity-80" />
        )}
        <p className="justify-center font-code text-sm text-primaryColor opacity-80">
          {" "}
          evgennikolenko_portfolio
        </p>
      </div>

      <div className="absolute left-3 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      <div className="absolute right-3">
        <CgDarkMode onClick={handleTheme} />
      </div>
    </section>
  );
};

export default Header;
