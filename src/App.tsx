import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import homePage from './pages/homePage';
import FeaturedProjects from './pages/featuredProjects';


function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/portfolioTeam/" Component={homePage} />
        <Route path="/portfolioTeam/featuredProjects" Component={FeaturedProjects} />
      </Routes>
    </ChakraProvider>
);
}

export default App;