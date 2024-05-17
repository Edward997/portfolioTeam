import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './pages/homePage';
import FeaturedProjects from './pages/featuredProjects';

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/portfolioTeam/" element={<HomePage />} />
        <Route path="/portfolioTeam/featuredProjects" element={<FeaturedProjects />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;