import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Ecoumarce2 from "../../../utils/Home/Images/ecoumarce2.jpg";
import MobileEcoumarce from "../../../utils/Home/Images/mobileEco.jpg";
import ExampleComponent from './TextAnimations';
import useWindowDimensions from '../../../utils/dimensions';
import FeaturesComponent from './FeatureComponents';

const HeroDescription = () => {
    const { height } = useWindowDimensions();

    return (
        <Flex
            h={height / 1.2}
            w="100%"
            position="relative"
            overflow="hidden"
            m={{ base: '5px', md: '10px' }}
            flexDirection={{
                md : "row",
                base : "column"
            }}
        >
            <Box
                bgImage={{
                    base: `url(${MobileEcoumarce})`,
                    md: `url(${Ecoumarce2})`,
                }}
                bgSize="cover"
                bgPosition="center center"
                bgRepeat="no-repeat"
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                zIndex={1}
            />

            <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                zIndex={11}
            />

            <Box
                zIndex={1}
                position="relative"
                width={{ base: '100%', md: '50%' }}
                p={{ base: 4, md: 8 }}
                h={height/1.2}
            >

                <Center>
                    <Heading as="h1" size={{ base: 'xl', md: '2xl' }} mb={4}>
                        Welcome to Ecoumarce
                    </Heading>
                </Center>
                <Center>
                    <ExampleComponent />
                </Center>
            </Box>
            <Box
                zIndex={1}
                width={{ base: '100%', md: '50%' }}
                p={{ base: 4, md: 8 }}
                color="white"
            >
                <FeaturesComponent />
            </Box>
        </Flex>
    );
};

export default HeroDescription;
