import {lazy} from 'react';
import {GrSearch} from 'react-icons/gr';

const MenuResponsive = lazy(() => import('../../components/TabBar/MenuResponsive'));

export const Header = ({mobileAndTablet}: {mobileAndTablet: boolean}) => {
  return (
    <section className="left-0 top-0 flex h-header w-full	 items-center justify-between border-b border-b-headerBorderColor bg-bgColor pl-3">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      <div className="flex h-4/6 items-center rounded-lg border-solid blue:border-[#b9bec271] xl:border xl:pl-60 xl:pr-60">
        {!mobileAndTablet && <GrSearch className="mr-2 rotate-90 text-xl text-primaryColor opacity-80" />}
        <p className="justify-center font-code text-sm text-primaryColor opacity-80">portfolio</p>
      </div>

      <div>
        <MenuResponsive />
      </div>
    </section>
  );
};

export default Header;
