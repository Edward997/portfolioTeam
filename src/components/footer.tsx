import { Flex, Link, Text } from "@chakra-ui/react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Flex
      as="footer"
      py={6}
      px={4}
      bg="gray.900"
      color="white"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text fontSize="xs">© 2024 IntelliEdge. All rights reserved.</Text>
      <Flex gap={4}>
        <Link href="#" fontSize="xs" _hover={{ textDecoration: 'underline' }}>
          Terms of Service
        </Link>
        <Link href="#" fontSize="xs" _hover={{ textDecoration: 'underline' }}>
          Privacy
        </Link>
      </Flex>
    </Flex>
  );
};

export default Footer;