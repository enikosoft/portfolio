import {AppProvider} from 'providers/application';
import {RouterProvider} from 'providers/routes';
import './App.css';

function App() {
  return (
    <AppProvider>
      <RouterProvider />
    </AppProvider>
  );
}

export default App;
