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
      width="100vw"
      position="fixed"
      top={0}
      zIndex={999} // Ajusta el valor según sea necesario
      bg="#586F7C"
    >
      
      <Flex>
        <Box p="2" >
          <Link href="#" fontWeight="bold">Home</Link>
        </Box>
        <Spacer />
        <Box p="2">
          <Link href="#" fontWeight="bold">About Us</Link>
        </Box>
        <Box p="2">
          <Link href="#" fontWeight="bold">Services</Link>
        </Box>
        <Box p="2">
          <Link href="#" fontWeight="bold">Contact</Link>
        </Box>
      </Flex>
    
    </Flex>
    
  );
}

export default Navbar;