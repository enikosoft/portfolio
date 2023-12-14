import {Footer, Header, LeftBar, TabBar} from 'components';
import {ThemeProvider} from 'providers/theme';
import {useMediaQuery} from 'react-responsive';
import {Outlet} from 'react-router-dom';
import {mediaBreakpoints} from 'responsive';

export const Layout = () => {
  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.xl}px)`,
  });

  return (
    <ThemeProvider>
      <div className="flex h-[100svh] w-full flex-col">
        <Header />

        <section className="flex h-content w-full xl:flex-row flex-col-reverse overflow-hidden">
          {!mobileAndTablet && <div className="bg-bgColor min-w-[48px] h-content"></div>}
          <LeftBar />
          <section className="overflow-hidden main-window h-full w-full bg-bgColor xl:ml-[288px]">
            <TabBar />

            <main className="page-wrapper px-4 sm:px-8 pt-4">
              <Outlet />
            </main>
          </section>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
};
