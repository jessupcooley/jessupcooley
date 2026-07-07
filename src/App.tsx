import './App.css';
import Home from './pages/Home';
import { createHashRouter, RouterProvider } from 'react-router';

function App() {
  const router = createHashRouter([
    {
      path: '/',
      element: <Home />,
    },
    // {
    //   path: '/gallery',
    //   element: <Gallery />,
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
