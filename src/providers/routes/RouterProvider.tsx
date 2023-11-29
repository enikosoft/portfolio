import {AppContext, AppContextInterface} from 'providers/application';
import {useContext} from 'react';
import {RouterProvider as Router} from 'react-router-dom';
import {routes} from './utils';

export const RouterProvider = () => {
  const {pdfPreviewerOpen} = useContext(AppContext) as AppContextInterface;

  return <Router router={routes(pdfPreviewerOpen)} />;
};
