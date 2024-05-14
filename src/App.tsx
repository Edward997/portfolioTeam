import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import homePage from './pages/homePage';


function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/portfolioTeam/" Component={homePage} />
      </Routes>
    </ChakraProvider>
);
}

export default App;