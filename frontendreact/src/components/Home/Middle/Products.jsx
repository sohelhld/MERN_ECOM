import React from 'react';
import { Box, Image, Text, VStack, HStack, Badge, Button, Heading, Center } from '@chakra-ui/react';
import Shoes from "../../../utils/Home/products/shoes.jpg";
import Phone from "../../../utils/Home/products/inphone.jpg";
import tshirt from "../../../utils/Home/products/tshirt.jpg";
import jeans from "../../../utils/Home/products/jeans.jpg";

const products = [
    { title: "Nike Shoes", description: "Comfortable and stylish Nike shoes for all occasions.", price: "$99.99", sellingPrice: "$90", rating: 4.5, image: Shoes },
    { title: "iPhone", description: "Latest iPhone model with advanced features.", price: "$799.99", sellingPrice: "$720", rating: 5.0, image: Phone },
    { title: "T-Shirt", description: "High-quality cotton T-shirt with a trendy design.", price: "$29.99", sellingPrice: "$27", rating: 4.2, image: tshirt },
    { title: "Jeans", description: "Classic denim jeans for a casual and stylish look.", price: "$49.99", sellingPrice: "$45", rating: 4.0, image: jeans },
];

const Products = () => {
    return (
        <VStack align="start" spacing={4} p={4}>
        <Center>
        <Heading>Recomented For You</Heading>
        </Center> 
            <HStack spacing={4} flexWrap="wrap">
                {products.map((product, index) => (
                    <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} flex="1 0 300px">
                        <Image src={product.image} alt={product.title} boxSize="100%" objectFit="cover" aspectRatio={1} mb={4} />
                        <Text fontSize="xl" fontWeight="semibold" mb={2}>{product.title}</Text>
                        <Text color="gray.600" mb={2}>{product.description}</Text>
                        <Text fontSize="lg" fontWeight="bold" color="red.500" textDecoration="line-through">${product.price}</Text>
                        <Text fontSize="lg" fontWeight="bold" color="green.500" mt={1}>${product.sellingPrice} <Badge colorScheme="green">10% off</Badge></Text>

                        <Text colorScheme="teal">Rating: {product.rating}</Text>
                        <VStack>
                        <Button colorScheme='green'>Buy Now</Button>
                        <Button colorScheme='orange'>Add To Cart</Button>
                        </VStack>    
                        
                    </Box>
                ))}
            </HStack>
        </VStack>
    );
};

export default Products;
