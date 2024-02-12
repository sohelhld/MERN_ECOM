// import { Fragment } from 'react';
import {
  chakra,
  Box,
  Stack,
  VStack,
  // HStack,
  Flex,
  Text,
  Image,
  Container,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
// Here we have used react-icons package for the icons



const CartCard = ({ images, description, ratings, price, category, userName, quantity, createdAt, deleteProductFromCart, _id, handleUpdateProduct }) => {
  const [productQuantity, setProductQuantity] = useState(+quantity);
  const handleQuantityChange = (newQuantity) => {
    setProductQuantity(newQuantity);
    handleUpdateProduct(_id, { quantity: newQuantity });
  };
  return (
    <Container maxW="7xl" p={{ base: 5, md: 12 }} margin="0 auto">
      <VStack spacing={4}>

        <Stack
          spacing={{ base: 0, md: 4 }}
          direction={{ base: 'column', md: 'row' }}
          border="1px solid red"
          borderColor="gray.400"
          p={2}
          rounded="md"
          w={{ base: 'auto', md: '2xl' }}
          overflow="hidden"
          pos="relative"
        >
          <Flex ml="0 !important">
            {<Image
              rounded="md"
              w={{ base: '100%', md: '18rem' }}
              h="200px"
              objectFit="cover"
              src={images[0]?.url}
              alt="product image"
            />}
          </Flex>
          <Stack direction="column" spacing={2} w="100%" mt={{ base: '5px !important', sm: 0 }}>
            <Flex justifyContent="space-between">
              <chakra.h3 fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
                {description.split(' ').slice(0, 7).join(' ')}
              </chakra.h3>
              <chakra.h3 fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
                $  {price}
              </chakra.h3>
            </Flex>
            <Box>
              <Text fontSize="lg" fontWeight="500">
                Ratings :  {ratings}
              </Text>
            </Box>
            <Flex alignItems="center" gap={4} color="gray.500">
              <Button colorScheme='green' onClick={() => handleQuantityChange(productQuantity + 1)}>+</Button>
              <Text fontSize="lg" fontWeight="500">Quantity: {productQuantity}</Text>
              <Button colorScheme="red" disabled={productQuantity === 1} onClick={() => handleQuantityChange(productQuantity - 1)}>-</Button>
            </Flex>
            <Stack
              direction={{ base: 'column-reverse', sm: 'row' }}
              justifyContent="space-between"
              alignItems={{ base: 'flex-start', sm: 'center' }}
            >
              <Text fontSize="sm" mt={{ base: 1, sm: 0 }}>
                Category : {category}
              </Text>
              <Stack direction="row" spacing={1} mb="0 !important">
                <Button onClick={() => deleteProductFromCart(_id)} colorScheme='red'>
                  <Text fontSize="sm">Remove</Text>
                </Button>
                <Button colorScheme='green'>
                  <Text fontSize="sm">Buy Now</Text>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </VStack>
    </Container>
  );
};

// const IconButton = ({ children, ...props }) => {
//   return (
//     <HStack
//       cursor="pointer"
//       border="1px solid"
//       borderColor="gray.300"
//       px={2}
//       py="0.15rem"
//       alignItems="center"
//       rounded="sm"
//       spacing={2}
//       {...props}
//     >
//       {children}
//     </HStack>
//   );
// };

export default CartCard;