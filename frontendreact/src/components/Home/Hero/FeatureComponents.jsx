import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const featuresData = [
  {
    title: 'Online Payment',
    description: 'Secure and convenient online transactions at your fingertips.',
  },
  {
    title: 'Fast Delivery',
    description: 'Swift and reliable delivery to your doorstep.',
  },
  {
    title: 'Secure Payment',
    description: 'Your payment information is protected with top-notch security.',
  },
  {
    title: 'Cashback',
    description: 'Enjoy cashback rewards on your purchases.',
  },
  {
    title: 'Coupons',
    description: 'Unlock exclusive discounts with our special coupons.',
  },
];

const FeaturesComponent = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      p={8}
      bgColor="black.100"
    >
      <Heading mb={6} textAlign="center" fontSize="2xl" color="white">
        Our Exciting Features
      </Heading>

      <Flex
        wrap="wrap"
        justify="center"
        spacing={4}
      >
        {featuresData.map((feature, index) => (
          <Box
            key={index}
            h={{ base: 'auto', md: '100px' }} // Adjust height for responsiveness
            w={{ base: '100%', md: '300px' }} // Adjust width for responsiveness
            p={4}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            color="green"
            bgColor="yellow.100"
            transition="transform 0.2s, box-shadow 0.2s"
            _hover={{
              transform: 'scale(1.05)',
              boxShadow: 'lg',
            }}
          >
            <Text mb={2} fontWeight="bold" color="black">
              {feature.title}
            </Text>
            <Text color="black">{feature.description}</Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default FeaturesComponent;
