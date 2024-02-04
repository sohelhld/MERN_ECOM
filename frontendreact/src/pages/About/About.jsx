import React from 'react';
import { Box, Text, Heading, VStack, Image, Flex } from '@chakra-ui/react';
import { FaStar, FaHeart } from 'react-icons/fa';
import aboutImage from "../../utils/Home/products/about.jpg";

const About = () => {
  return (
    <Box p={8} textAlign="center" minHeight="100vh" backgroundImage={`url(${aboutImage})`} backgroundSize="cover" backgroundPosition="center">
      <VStack align="center" spacing={8} color="white">
        <Heading as="h2" size="2xl" mb={6}>
          About Us
        </Heading>

        <VStack align="start" spacing={6} maxW="800px" p={8} bg="rgba(0, 0, 0, 0.7)" borderRadius="lg">
          <Text fontSize="lg">
            Welcome to our online store! We are passionate about providing high-quality products and excellent customer service.
          </Text>

          <Text fontSize="lg">
           {` At our store, you'll find a curated selection of the latest fashion trends, electronics, and lifestyle products.`} </Text>

          <Text fontSize="lg">
            Our mission is to make your shopping experience enjoyable and convenient. We value your satisfaction and aim to bring you the best deals on the market.
          </Text>

          <Flex align="center">
            <Image src={aboutImage} alt="About Us Image" boxSize="150px" objectFit="cover" borderRadius="md" mr={6} />

            <VStack align="start">
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Our team is dedicated to ensuring that you receive top-notch service and find the products you love.
              </Text>

              <Flex align="center">
                <Text fontSize="lg" mr={2}>
                  Rated: 4.9 <FaStar color="yellow" />
                </Text>

                <Text fontSize="lg">
                  Made with <FaHeart color="red" /> by our team.
                </Text>
              </Flex>
            </VStack>
          </Flex>
        </VStack>
      </VStack>
    </Box>
  );
}

export default About;
