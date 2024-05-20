import { Box, Flex, Link, Spacer } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex
      as="header"
      px={4}
      py={2}
      color="white"
      alignItems="center"
      justifyContent="space-between"
      width="100vw"
      position="fixed"
      top={0}
      zIndex={999} // Ajusta el valor según sea necesario
      bg="#37D39F"
    >
      
      <Flex>
        <Box p="2" >
          <Link href="#" fontWeight="bold">Home</Link>
        </Box>
        <Spacer />
        <Box p="2">
          <Link href="#featuredProjects" fontWeight="bold">Projects</Link>
        </Box>
        {/* <Box p="2">
          <Link as={RouterLink} to="skills" fontWeight="bold">Skills</Link>
        </Box>
        <Box p="2">
          <Link href="#contact" fontWeight="bold">Contact</Link>
        </Box> */}
      </Flex>
    
    </Flex>
    
  );
}

export default Navbar;