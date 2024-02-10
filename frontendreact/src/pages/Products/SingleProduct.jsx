import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Button,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';
import DemoCarousel from '../../components/ImageCarousels/SinglePageImageCarousels';
import { getSingleProduct } from '../../redux/Products/action';

export default function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state.producdtReducer.singleProduct);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id, dispatch]);

  const imagesArr = singleProduct?.images?.map((item) => item.url);

  
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 12, md: 16 }}>
        <Flex>
          <DemoCarousel images={imagesArr} />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {singleProduct?.name}
            </Heading>
            <Text color={useColorModeValue('gray.900', 'gray.400')} fontWeight={300} fontSize={'2xl'}>
              ${singleProduct?.price} USD
            </Text>
          </Box>

          <VStack spacing={{ base: 4, sm: 6 }}>
            <Text color={useColorModeValue('gray.500', 'gray.400')} fontSize={'2xl'} fontWeight={'300'}>
              {singleProduct?.description}
            </Text>
          </VStack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to Cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
