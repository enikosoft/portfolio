import {AppProvider} from 'providers/application';
import {RouterProvider} from 'providers/routes';
import {Suspense} from 'react';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Suspense fallback={<div>loading...</div>}>
        <RouterProvider />
      </Suspense>
    </AppProvider>
  );
}

export default App;
