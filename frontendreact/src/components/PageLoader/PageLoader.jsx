import { Center } from '@chakra-ui/react';
import React from 'react';
import { HashLoader } from 'react-spinners';

const PageLoader = () => {
  return (
    <Center
      height="100vh" // Set the height to 100% of the viewport height
      mt="25%"       // You can adjust this margin-top value as needed
    >
      <HashLoader color="#36d7b7" />
    </Center>
  );
};

export default PageLoader;
