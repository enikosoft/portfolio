import {Footer, Header, LeftBar, TabBar} from 'components';
import {AppProvider} from 'providers/application';
import {ThemeProvider} from 'providers/theme';
import {Outlet} from 'react-router-dom';

export const Layout = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <div className="flex h-screen w-full flex-col">
          <Header />

          <section className="flex h-content w-full xl:flex-row flex-col-reverse overflow-hidden">
            <div className="min-w-full h-10 bg-bgColor xl:min-w-[48px] xl:h-content"></div>
            <LeftBar />
            <section className="h-full w-full bg-bgColor xl:ml-[288px]">
              <TabBar />

              <main className="page-wrapper">
                <Outlet />
              </main>
            </section>
          </section>

          <Footer />
        </div>
      </AppProvider>
    </ThemeProvider>
  );
};
