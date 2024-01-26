import {AppContext, AppContextInterface} from 'providers/application';
import {useContext} from 'react';
import {useMediaQuery} from 'react-responsive';

import {mediaBreakpoints} from 'responsive';
import './styles.css';

export const MenuResponsive = () => {
  const {isResponsiveTabBar, setResponsiveTabBar} = useContext(AppContext) as AppContextInterface;

  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.xl}px)`,
  });

  if (!mobileAndTablet) return null;

  return (
    <button
      title="Menu button"
      type="button"
      className={`hamburger-menu ${isResponsiveTabBar && 'active'}`}
      onClick={() => setResponsiveTabBar(!isResponsiveTabBar)}
    >
      <div className="line-1"></div>
      <div className="line-2"></div>
      <div className="line-3"></div>
    </button>
  );
};

export default MenuResponsive;
