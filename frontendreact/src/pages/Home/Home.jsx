import React from 'react';
import Slideshow from '../../components/Home/Hero/HeroImageSliding';
import HeroDescription from '../../components/Home/Hero/HeroDescription';
import { Box } from '@chakra-ui/react';
import useWindowDimensions from '../../utils/dimensions';
import Products from '../../components/Home/Middle/Products';
import MiddleFeature from '../../components/Home/Middle/Feature';
import ElectronicsProducts from '../../components/Home/Middle/ElectrinicsProducts';
import ClothisProducts from '../../components/Home/Middle/ClothisProducts';

const Home = () => {
  const {width} = useWindowDimensions();
  return (
    <Box w={width} overflowX="hidden">
      <Slideshow />
      <HeroDescription />
      <Products/>
      <ElectronicsProducts/>
      <ClothisProducts/>
      <MiddleFeature/>
    </Box>
  );
};

export default Home;
