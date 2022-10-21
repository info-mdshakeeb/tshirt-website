import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Layout from './Layout/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          loader: async () => fetch('tshirt.json'),
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: async () => fetch('tshirt.json'),
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>,
        },
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
