import React from 'react';
import { Box, Image, Text, VStack, HStack, Badge, Button, Center, Heading } from '@chakra-ui/react';
import Mobile1 from "../../../utils/Home/products/mobile.jpg";
import Mobile2 from "../../../utils/Home/products/mobile2.jpg";
import Laptop1 from "../../../utils/Home/products/laptop.jpg";
import Laptop2 from "../../../utils/Home/products/laptop2.jpg";



const products = [
    { title: "iPhone 13 Pro", description: "The latest iPhone with a stunning camera and powerful performance.", price: "$1099.99", sellingPrice: "$999.99", rating: 4.9, image: Mobile1 },
    { title: "Samsung Galaxy S21", description: "A flagship Android phone with a high-resolution display and advanced camera features.", price: "$899.99", sellingPrice: "$849.99", rating: 4.7, image: Mobile2 },
    { title: "MacBook Pro 2022", description: "Powerful and sleek MacBook for professional users with M2 chip.", price: "$1999.99", sellingPrice: "$1899.99", rating: 4.8, image: Laptop1 },
    { title: "Dell XPS 13", description: "Ultra-thin and lightweight laptop with a stunning InfinityEdge display.", price: "$1299.99", sellingPrice: "$1199.99", rating: 4.6, image: Laptop2 },
];

const ElectronicsProducts = () => {
    return (
        <VStack className='app-container' align="start" spacing={4} p={4}>
        <Center>
        <Heading>Recomented Electronics For You</Heading>
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

export default ElectronicsProducts;
