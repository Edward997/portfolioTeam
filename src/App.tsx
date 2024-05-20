import { Route, RouterProvider, Routes, createHashRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './pages/homePage';
import FeaturedProjects from './pages/featuredProjects';


const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/featuredProjects",
    element: <FeaturedProjects />
  }
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;