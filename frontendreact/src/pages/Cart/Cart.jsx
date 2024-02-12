import React, { useEffect } from 'react';
import CartCard from '../../components/Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductfromCart, getProductFromCart, updateCartProduct } from '../../redux/Products/action';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const Cart = () => {
  const dispatch = useDispatch();
  const token = useSelector((st) => st.authReducer.token);
  const getfromCartProductData = useSelector((st) => st.producdtReducer.getfromCartProductData);

  useEffect(() => {
    dispatch(getProductFromCart(token));
  }, [dispatch, token]);

  const handleDeleteCartProduct = (id) => {
    dispatch(deleteProductfromCart(id, token)).then(() => {
      dispatch(getProductFromCart(token));
    });
  };

  const handleUpdateProduct = (id, data) => {
    dispatch(updateCartProduct(id, data, token)).then(() => {
      dispatch(getProductFromCart(token));
    });
  };

  const totalPrice = getfromCartProductData.reduce((acc, item) => (item.price * item.quantity) + acc, 0);

  return (
    <Box p={{ base: 4, md: 8 }} maxW="xl" margin="0 auto">
      <Heading mb={4} textAlign="center">
        Your Shopping Cart
      </Heading>

      {Array.isArray(getfromCartProductData) &&
        getfromCartProductData.map((product) => (
          <CartCard {...product} key={product._id} deleteProductFromCart={handleDeleteCartProduct} handleUpdateProduct={handleUpdateProduct} />
        ))}

      <VStack mt={8} spacing={4}>
        <Text fontSize="lg" fontWeight="bold">
          Total Price: $ {totalPrice.toFixed(2)}
        </Text>
      </VStack>
    </Box>
  );
};

export default Cart;
