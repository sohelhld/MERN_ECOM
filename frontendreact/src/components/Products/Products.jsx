import React from 'react';
import { Box, Flex, Text, IconButton, Button, Spacer } from '@chakra-ui/react';
import {  AiOutlineHeart } from 'react-icons/ai';
import ImageCarousel from '../ImageCarousels/ImageCarousels';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  /*
  
{"_id":"65c11a441a7ce7735e4e6049","name":"Laptop 1","description":"This is a sample product description.","price":40999,"ratings":4,"images":[{"public_id":"sample_public_id_1","url":"https://unsplash.com/photos/a-laptop-on-a-table-ff11JzQk690","_id":"65c11a441a7ce7735e4e604a"},{"public_id":"sample_public_id_2","url":"https://unsplash.com/photos/a-white-box-on-a-table-T0t72_3yIIY","_id":"65c11a441a7ce7735e4e604b"},{"public_id":"sample_public_id_2","url":"https://unsplash.com/photos/a-laptop-on-a-table-ff11JzQk690","_id":"65c11a441a7ce7735e4e604c"},{"public_id":"sample_public_id_2","url":"https://unsplash.com/photos/a-person-holding-a-piece-of-paper-6jQ5ukoVRTU","_id":"65c11a441a7ce7735e4e604d"},{"public_id":"sample_public_id_2","url":"https://unsplash.com/photos/silver-laptop-on-brown-wooden-table-e59Y6vqbL7Y","_id":"65c11a441a7ce7735e4e604e"},{"public_id":"sample_public_id_2","url":"https://unsplash.com/photos/silver-laptop-on-brown-wooden-table-uWFFw7leQNI","_id":"65c11a441a7ce7735e4e604f"}],"category":"Electronics","Stock":100,"numOfReviews":2,"reviews":[{"name":"John Doe","rating":5,"comment":"Great product!","_id":"65c11a441a7ce7735e4e6050"},{"name":"Jane Doe","rating":4,"comment":"Good value for the money.","_id":"65c11a441a7ce7735e4e6051"}],"user":"65b5f50fa99da8fb868fe5da","createdAt":"2024-02-05T17:26:28.585Z","__v":0}
  */

const imagesArr = product.images?.map((item)=> item.url);
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
    >
    <ImageCarousel cards={imagesArr}/>
    
    <Box p="6">
    <Link to={`/product/${product._id}`}>
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
    </Link>
       
      </Box>
    </Box>
  );
}



export default ProductCard;
