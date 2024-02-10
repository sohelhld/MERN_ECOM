import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { forgetpassFindAccoutn } from '../../../redux/Authentication/action';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

//

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const dispath = useDispatch();
  const loader = useSelector(st => st.authReducer.userForgetPassFindAccountIsLoading);
  const error = useSelector(st => st.authReducer.userForgetPassFindAccountIsError);
  const navigate = useNavigate();
  const toast = useToast();
  const handleSubmit = () => {
    dispath(forgetpassFindAccoutn({ email }, toast)).then((res) => {
      if (!loader && !error) {
       // window.location.href = "/user/resetpass"
       navigate('/user/resetpass')
      }
    })
  }
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
          Forgot your password?
        </Heading>
        <Text
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          You&apos;ll get an email with a reset link
        </Text>
        <FormControl id="email">
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            onClick={handleSubmit}
          >
            {loader ? <ClipLoader /> : "Request Reset"}
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}