import {Footer} from 'components/Footer/index';
import {Header} from 'components/Header/index';
import {TabBar} from 'components/TabBar/TabBar';
import {ThemeProvider} from 'providers/theme/ThemeProvider';
import {Suspense, lazy} from 'react';
import {useMediaQuery} from 'react-responsive';
import {Outlet} from 'react-router-dom';
import {mediaBreakpoints} from 'responsive';

const LeftBar = lazy(() => import('../components/LeftBar/LeftBar'));
const SocialNetworks = lazy(() => import('./SocialNetworks'));

export const Layout = () => {
  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.xl}px)`,
  });

  return (
    <ThemeProvider>
      <div className="flex h-[100svh] w-full flex-col">
        <Header mobileAndTablet={mobileAndTablet} />

        <section className="flex h-content w-full flex-col-reverse overflow-hidden xl:flex-row">
          {!mobileAndTablet && <SocialNetworks />}
          <LeftBar />
          <section className="main-window h-full w-full overflow-hidden bg-bgColor pb-2">
            <TabBar mobileAndTablet={mobileAndTablet} />

            <main className="page-wrapper px-4 pt-4 sm:px-8">
              <Suspense fallback={<div></div>}>
                <Outlet />
              </Suspense>
            </main>
          </section>
        </section>

        <Footer mobileAndTablet={mobileAndTablet} />
      </div>
    </ThemeProvider>
  );
};
