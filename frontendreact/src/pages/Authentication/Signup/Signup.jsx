import { useState } from 'react';
import { ChakraProvider, CSSReset, Box, Heading, FormControl, FormLabel, Input, Button, VStack, InputGroup, InputRightElement, IconButton, useToast, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../../../redux/Authtication/action';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
const loader = useSelector(st=>st.authReducer.isSignupLoading);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use formData.name, formData.email, and formData.password for further processing or API calls
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Password:', formData.password);
    // Add your logic for user registration or other actions
    dispatch(userRegister({
      "name": formData.name,
      "email": formData.email,
      "password": formData.password,
      "role": "user"
    }, toast))

  };

  return (
    <ChakraProvider>
      <CSSReset />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        boxShadow="lg"
        p={6}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <VStack spacing={4} border={"1px solid black"} p={10} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"} borderRadius={"10px"} w={400}>
            <Heading mb={8}>Sign Up</Heading>

            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                      onClick={handleTogglePassword}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Button m={5} colorScheme="teal" type="submit">
                {loader ? <ClipLoader/> : "Sign Up"}
              </Button>
            </form>
            <Text>{`Already Have A Accout`} <span color='blue'> <Link color='blue' to={"/login"}>Login Here</Link></span> </Text>

          </VStack>
        </motion.div>
      </Box>
    </ChakraProvider>
  );
}

export default Signup;
