// Contact.js
import React from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box p={8} maxWidth="500px" mx="auto">
      <VStack spacing={4}>
        <Heading as="h1" size="xl" textAlign="center">
          Contact Us
        </Heading>

        <FormControl id="name">
          <FormLabel>Your Name</FormLabel>
          <Input type="text" placeholder="John Doe" />
        </FormControl>

        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="john.doe@example.com" />
        </FormControl>

        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Type your message here..." rows={4} />
        </FormControl>

        <Button
          colorScheme="teal"
          variant="solid"
          _hover={{
            bg: useColorModeValue('teal.500', 'teal.600'),
          }}
        >
          Send Message
        </Button>
      </VStack>
    </Box>
  );
};

export default Contact;
