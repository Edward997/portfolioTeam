import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './pages/homePage';
import FeaturedProjects from './pages/featuredProjects';

function App() {
  return (
    <ChakraProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/featuredProjects" element={<FeaturedProjects />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;