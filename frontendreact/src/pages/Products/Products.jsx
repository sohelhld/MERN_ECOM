import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/Products/action';
import { Box, Flex, Heading } from '@chakra-ui/react';
import ProductCard from '../../components/Products/Products';

const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector(st => st.producdtReducer.allProducts);
  console.log(data);
  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])
  return (
    <Box m={"15px"} mt={25}>
    <Heading>All The Products Are Here</Heading>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="flex-start" spacing={4}>
        {data?.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Flex>
    </Box>
  )
}

export default Products