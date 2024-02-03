import React from 'react';
import Slideshow from '../../components/Home/Hero/HeroImageSliding';
import HeroDescription from '../../components/Home/Hero/HeroDescription';
import { Box } from '@chakra-ui/react';
import useWindowDimensions from '../../utils/dimensions';

const Home = () => {
  const {width} = useWindowDimensions();
  return (
    <Box w={width} overflowX="hidden">
      <Slideshow />
      <HeroDescription />
    </Box>
  );
};

export default Home;
