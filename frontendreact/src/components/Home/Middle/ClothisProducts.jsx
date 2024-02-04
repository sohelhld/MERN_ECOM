import React from 'react';
import { Box, Image, Text, VStack, HStack, Badge, Button, Heading, Center } from '@chakra-ui/react';
import shirt from "../../../utils/Home/products/shirt and shoe.jpg"
import bleazer from "../../../utils/Home/products/bleazer.jpg"
import cloths from "../../../utils/Home/products/clothes.jpg"
import combo from "../../../utils/Home/products/combo.jpg"



const products = [
    { title: "Shirt and Shoe Combo", description: "Trendy shirt and shoe combo for a stylish look.", price: "$79.99", sellingPrice: "$69.99", rating: 4.5, image: shirt },
    { title: "Bleazer", description: "Classy bleazer for formal occasions or business meetings.", price: "$129.99", sellingPrice: "$119.99", rating: 4.7, image: bleazer },
    { title: "Clothes Set", description: "A set of fashionable clothes for a complete outfit.", price: "$149.99", sellingPrice: "$139.99", rating: 4.8, image: cloths },
    { title: "Combo Pack", description: "Combo pack with a variety of stylish clothing items.", price: "$99.99", sellingPrice: "$89.99", rating: 4.6, image:combo  },
];

const ClothisProducts = () => {
    return (
        <VStack align="start" spacing={4} p={4}>
       <Center>
       <Heading>Recomented Cloths For You</Heading>
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

export default ClothisProducts;
