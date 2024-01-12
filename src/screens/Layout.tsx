import {Footer, Header, LeftBar, TabBar} from 'components';
import {ThemeProvider} from 'providers/theme';
import {useMediaQuery} from 'react-responsive';
import {Outlet} from 'react-router-dom';
import {mediaBreakpoints} from 'responsive';
import {socialNetworks} from './contact';

export const Layout = () => {
  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.xl}px)`,
  });

  return (
    <ThemeProvider>
      <div className="flex h-[100svh] w-full flex-col">
        <Header />

        <section className="flex h-content w-full flex-col-reverse overflow-hidden xl:flex-row">
          {!mobileAndTablet && (
            <div className="flex h-content min-w-[48px] justify-center bg-bgColor">
              <div className="absolute bottom-16 flex flex-col gap-4">{socialNetworks(32).map((item) => item)}</div>
            </div>
          )}
          <LeftBar />
          <section className="main-window h-full w-full overflow-hidden bg-bgColor pb-2">
            <TabBar />

            <main className="page-wrapper px-4 pt-4 sm:px-8">
              <Outlet />
            </main>
          </section>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
};
