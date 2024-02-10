import React from 'react';
import { Box, Flex, Text, IconButton, Button, Spacer, useToast } from '@chakra-ui/react';
import { AiOutlineHeart } from 'react-icons/ai';
import ImageCarousel from '../ImageCarousels/ImageCarousels';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productAddToCart } from '../../redux/Products/action';

function ProductCard({ product }) {
  const token = useSelector(st => st.authReducer.token);
  const isAuth = useSelector(st => st.authReducer.isAuth);
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  const {name, description,price,ratings,images,category} = product;
  const cartItem = {
    name,description,price,ratings,images,category,ItemId : product._id
  }
  const handleAddToCart = () => {
    console.log({isAuth});
    console.log({token});
    
    if (!isAuth) {
      toast({
        title: 'Please Login',
        description: "Please login",
        status: 'info',
        duration: 2000,
        isClosable: true,
        position: "top"
      });
      navigate("/user/login");
    }
    dispatch(productAddToCart(cartItem, toast, token))
  }

  const imagesArr = product.images?.map((item) => item.url);
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}

    >
      <ImageCarousel cards={imagesArr} />

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
        </Link>
        <Flex mt={4} align="center">
          <Button onClick={handleAddToCart} colorScheme="teal" size="sm" mr={1}>
            Add to Cart
          </Button>
          <Button size="sm" colorScheme='pink' mr={1}>Buy</Button>
          <Button size="sm" colorScheme='blue' mr={1}>All Review</Button>
        </Flex>


      </Box>
    </Box>
  );
}



export default ProductCard;
