import { Flex, Heading, Text, Link } from "@chakra-ui/react";
import Navbar from "./navbar";

interface BannerProps { }

const Banner: React.FC<BannerProps> = () => {
  return (
    <Flex
      backgroundImage="url('https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      height={['200px', '300px', '400px']} // Ajusta la altura para diferentes tamaños de pantalla
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      textAlign="center"
      position="relative" // Agregamos posición relativa al contenedor para posicionar el texto
      padding={['20px', '40px', '60px']} // Ajusta el espacio interior para diferentes tamaños de pantalla

    >

      <Flex direction="column" alignItems="center">
        <Navbar />
        <Heading as="h1" fontSize={["3xl", "4xl", "5xl"]}>
          IntelliEdge Solutions
        </Heading>
        <Text maxW="700px" color="gray.300" mt={4} mb={8} fontSize={["md", "xl"]}>
          Experienced full-stack developer with a passion for crafting beautiful and functional web and desktop applications.
        </Text>
        <Flex gap={4}>
          <Link
            href="#"
            fontSize="sm"
            fontWeight="medium"
            bg="#1D3557"
            color="gray.50"
            px={4}
            py={2}
            rounded="md"
            _hover={{ bg: '#1D3557', opacity: 0.9 }}
          >
            View Projects
          </Link>
          <Link
            href="#"
            fontSize="md"
            fontWeight="medium"
            border="1px"
            borderColor="#1D3557"
            color="gray.50"
            px={4}
            py={2}
            rounded="md"
            _hover={{ bg: '#1D3557', opacity: 0.9, color: 'gray.50' }}
          >
            Contact Us
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Banner;