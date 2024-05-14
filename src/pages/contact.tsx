import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Box, Container, Flex, Heading, Text, Input, Textarea, Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter } from '@chakra-ui/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mqkrnvre");
  const [isOpen, setIsOpen] = useState(false);
  const leastDestructiveRef = React.useRef(null);
  const [formValues, setFormValues] = useState({ email: '', message: '' });

  const onClose = () => setIsOpen(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
    setIsOpen(true); // Mostrar el diálogo de agradecimiento
    setFormValues({ email: '', message: '' }); // Limpiar el formulario después de que se haya enviado el mensaje
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Box as="section" w="full" py={[12, 24, 32]} borderTop="1px solid" borderColor="gray.200" id="contact">
      <Container px={[4, 6]} maxW="container.lg">
        <Flex flexDir="column" alignItems="center" justifyContent="center" textAlign="center">
          <Box>
            <Heading fontSize={['3xl', '5xl']} fontWeight="bold" letterSpacing="tighter">Get in Touch</Heading>
            <Text maxW={['900px', null, '900px']} color={['gray.500', null, 'gray.400']} mt={2} mx="auto" fontSize={['xl', null, 'xl']}>
              Feel free to reach out if you have any questions or would like to discuss a project.
            </Text>
          </Box>
          <Box as="form" onSubmit={onSubmit} maxW="sm" mx="auto">
            <Flex flexDir="column">
              <Box mb={4}>
                <label htmlFor="email">Email</label>
                <Input id="email" placeholder="Enter your email" type="email" name="email" value={formValues.email} onChange={handleChange} required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </Box>
              <Box mb={4}>
                <label htmlFor="message">Message</label>
                <Textarea id="message" placeholder="Enter your message" minH="100px" name="message" value={formValues.message} onChange={handleChange} required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </Box>
              <Button type="submit" disabled={state.submitting}>Send Message</Button>
            </Flex>
          </Box>
          <AlertDialog leastDestructiveRef={leastDestructiveRef} isOpen={isOpen} onClose={onClose}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Thank You!
                </AlertDialogHeader>
                <AlertDialogBody>
                  We have received your message. We'll get back to you soon.
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button ref={leastDestructiveRef} onClick={onClose} colorScheme="blue">
                    Close
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact;
