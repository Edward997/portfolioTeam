import { Box, Flex, Link, Spacer } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex
      as="header"
      px={4}
      py={2}
      color="white"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      position="fixed"
      top={0}
      zIndex={999} // Ajusta el valor según sea necesario
    >
      
      <Flex>
        <Box p="2">
          <Link href="#">Home</Link>
        </Box>
        <Spacer />
        <Box p="2">
          <Link href="#">About Us</Link>
        </Box>
        <Box p="2">
          <Link href="#">Services</Link>
        </Box>
        <Box p="2">
          <Link href="#">Contact</Link>
        </Box>
      </Flex>
    
    </Flex>
    
  );
}

export default Navbar;