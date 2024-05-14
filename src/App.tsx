import { Navigate, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import homePage from './pages/homePage';


function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" Component={homePage} />
        <Route path="/" element={<Navigate replace to="/" />} />
      </Routes>
    </ChakraProvider>
);
}

export default App;