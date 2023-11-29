import {ReactElement} from 'react';
import {FaHtml5, FaReact} from 'react-icons/fa';
import {SiJavascript, SiTypescript} from 'react-icons/si';
import {VscJson} from 'react-icons/vsc';
import {Navigate, createBrowserRouter} from 'react-router-dom';
import {About, Home, Layout, Projects, Technologies} from 'screens';

export interface RoutesLinkItems {
  logo: ReactElement;
  title: string;
  path: string;
}

export const routesLinkItems: RoutesLinkItems[] = [
  {
    logo: <FaReact color="#5ED4F4" />,
    title: 'home.jsx',
    path: '/',
  },
  {
    logo: <FaHtml5 color="#DE4B25" />,
    title: 'aboute.html',
    path: '/about',
  },
  {
    logo: <SiTypescript color="#2F75C0" />,
    title: 'technologies.ts',
    path: '/technologies',
  },
  {
    logo: <VscJson color="#f1980d" />,
    title: 'projects.json',
    path: '/projects',
  },
  {
    logo: <SiJavascript color="#E9D54B" />,
    title: 'contact.js',
    path: '/contact',
  },
];

export const routes = () => {
  return createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {path: '*', element: <Navigate to="/" replace />},
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/projects',
          element: <Projects />,
        },
        {
          path: '/technologies',
          element: <Technologies />,
        },
        {
          path: '/contact',
          element: <div>contact</div>,
        },
      ],
    },
  ]);
};
