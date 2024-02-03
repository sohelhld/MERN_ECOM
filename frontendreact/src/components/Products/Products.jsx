import React from 'react';
import { Box, Flex, Image, Text, IconButton, Button, Spacer } from '@chakra-ui/react';
import {  AiOutlineHeart } from 'react-icons/ai';

function ProductCard({ product }) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
    >
      <Image src={product.images[0] || 'https://via.placeholder.com/150'} alt={product.name} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text fontSize="sm" color="gray.500">
            {product.category}
          </Text>
          <Spacer />
          <IconButton
            aria-label="Favorite"
            icon={<AiOutlineHeart />}
            colorScheme="red"
            variant="ghost"
          />
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {product.name}
        </Box>

        <Box>
          <Text color="gray.600" fontSize="sm">
            {product.description}
          </Text>
        </Box>

        <Box>
          <Text fontSize="lg" fontWeight="bold" color="teal.600">
            ${product.price}
          </Text>
        </Box>

        <Flex mt={4} align="center">
          <Button colorScheme="teal" size="sm" mr={2}>
            Add to Cart
          </Button>
          <Button size="sm">Details</Button>
        </Flex>
      </Box>
    </Box>
  );
}



export default ProductCard;
