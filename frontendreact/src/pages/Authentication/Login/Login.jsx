// Import necessary components from Chakra UI and Framer Motion
import { ChakraProvider, CSSReset, Box, Heading, FormControl, FormLabel, Input, Button, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function Login() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        boxShadow="lg" // Add box shadow
        p={6} // Add padding for a cleaner look
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animation when component mounts
          exit={{ opacity: 0, y: -20 }} // Animation when component unmounts
        >
          <VStack spacing={4} border={"1px solid black"} p={10}
          boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
          borderRadius={"10px"}
          w={400}
          >
            <Heading mb={8}>Login</Heading>

            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter your password" />
            </FormControl>

            <Button colorScheme="teal" type="submit">
              Sign Up
            </Button>
          </VStack>
        </motion.div>
      </Box>
    </ChakraProvider>
  );
}

export default Login;
