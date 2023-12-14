import {MenuResponsive} from 'components';
import {GrSearch} from 'react-icons/gr';
import {useMediaQuery} from 'react-responsive';
import {mediaBreakpoints} from 'responsive';

export const Header = () => {
  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.xl}px)`,
  });

  return (
    <section className="pl-3 left-0 top-0 flex justify-between	 h-header w-full items-center border-b border-b-headerBorderColor bg-bgColor">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      <div className="xl:border xl:pl-60 xl:pr-60 flex h-4/6 items-center rounded-lg border-solid blue:border-[#b9bec271]">
        {!mobileAndTablet && <GrSearch className="mr-2 rotate-90 text-xl text-primaryColor opacity-80" />}
        <p className="justify-center font-code text-sm text-primaryColor opacity-80"> evgennikolenko_portfolio</p>
      </div>

      <div>
        <MenuResponsive />{' '}
      </div>
    </section>
  );
};

export default Header;
