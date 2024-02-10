import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getAllProducts } from '../../redux/Products/action';
import { Box, Flex, Heading, Checkbox, VStack, Spacer } from '@chakra-ui/react';
import { getAllProducts } from '../../../redux/Products/action';
import PageLoader from '../../../components/PageLoader/PageLoader';
import ProductCard from '../../../components/Products/Products';
// import ProductCard from '../../components/Products/Products';
// import PageLoader from '../../components/PageLoader/PageLoader';

const ProductsGrocery = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.producdtReducer.allProducts);

  const [selectedCategories, setSelectedCategories] = useState(["Grocery"]);
  const loader = useSelector((state) => state.producdtReducer.getAllProductsIsLoading);

  console.log(allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevSelected) =>
        prevSelected.filter((selected) => selected !== category)
      );
    } else {
      setSelectedCategories((prevSelected) => [...prevSelected, category]);
    }
  };

  const filterProductsByCategory = () => {
    if (selectedCategories.length === 0) {
      return allProducts;
    }
    return allProducts.filter((product) =>
      selectedCategories.includes(product.category)
    );
  };

  if (loader) {
    return <PageLoader />;
  }

  return (
    <Box m="15px" mt={25}>
      <Heading mb={4}>All The Products Are Here</Heading>

      <Flex>
        {/* Fixed filter section */}
        <Box
          position="fixed"
          top="20"
          width="20%"
          height="30vh"
          pr="4"
        >
          <VStack align="start" spacing={4}>
            <Heading fontSize="xl">Filter By</Heading>
            <Checkbox
              isChecked={selectedCategories.includes('Electronics')}
              onChange={() => handleCategoryChange('Electronics')}
            >
              Electronics
            </Checkbox>
            <Checkbox
              isChecked={selectedCategories.includes('Laptop')}
              onChange={() => handleCategoryChange('Laptop')}
            >
              Laptop
            </Checkbox>
            <Checkbox
              isChecked={selectedCategories.includes("T-Shirt")}
              onChange={() => handleCategoryChange("T-Shirt")}
            >
              T-Shirt
            </Checkbox>
            <Checkbox
              isChecked={selectedCategories.includes('Grocery')}
              onChange={() => handleCategoryChange('Grocery')}
            >
              Grocery
            </Checkbox>
            <Checkbox
              isChecked={selectedCategories.includes('Shoes')}
              onChange={() => handleCategoryChange('Shoes')}
            >
            Shoes
            </Checkbox>
            <Checkbox
              isChecked={selectedCategories.includes('Watch')}
              onChange={() => handleCategoryChange('Watch')}
            >
            Watch
            </Checkbox>
          </VStack>
        </Box>

        {/* Scrollable product section */}
        <Flex width="80%" ml={"20%"} minW={"80%"} flexDirection="column">
          <Spacer />
          <Flex minW={"100%"} gap={10} flexWrap="wrap" justifyContent="center" alignItems="flex-start" spacing={4}>
            {filterProductsByCategory().map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </Flex>

        </Flex>
      </Flex>
    </Box>
  );
};

export default ProductsGrocery;
