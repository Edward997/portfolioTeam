import { Navigate, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import homePage from './pages/homePage';


export const App = () =>(

    <ChakraProvider>
      <Routes>
        <Route path="/" Component={homePage} />
        <Route path="/" element={<Navigate replace to="/" />} />
      </Routes>
    </ChakraProvider>

)