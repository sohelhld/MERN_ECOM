import React, { useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { confirmpassFindAccoutn } from '../../../redux/Authentication/action';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

export default function ResetPasswordForm() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const dispath = useDispatch();
  const navigate = useNavigate();
const loader = useSelector(st=>st.authReducer.userConfirmPassFindAccountIsLoading);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = () => {
    // Add your logic for handling form submission here
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Handle OTP validation logic here

      setError('');
      // Add your logic for handling the form submission
      dispath(confirmpassFindAccoutn(password,confirmPassword,otp)).then((res)=>{
       if(!loader){
        navigate('/user/login')
       }
      })
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Enter new password
        </Heading>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={handlePasswordChange} />
        </FormControl>
        <FormControl id="confirmPassword" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          {error && <FormLabel color="red.500">{error}</FormLabel>}
        </FormControl>
        <FormControl id="otp" isRequired>
          <FormLabel>Enter OTP</FormLabel>
          <Input type="text" value={otp} onChange={handleOtpChange} />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            onClick={handleSubmit}>
            {loader ? <ClipLoader/> : `Submit`}
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
