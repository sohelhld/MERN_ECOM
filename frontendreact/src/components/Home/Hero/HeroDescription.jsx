import { Box, Button, Center, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Ecoumarce2 from "../../../utils/Home/Images/ecoumarce2.jpg";
import ExampleComponent from './TextAnimations';
import useWindowDimensions from '../../../utils/dimensions';

const HeroDescription = () => {
    const { height } = useWindowDimensions();

    return (
        <Flex
            h={height / 2}
            w="100%"
            position="relative"
            overflow="hidden"
            m={{ base: '5px', md: '10px' }}
            flexDirection={{
                md: "row",
                base: "column"
            }}
        >
            <Box
                bgImage={{
                    base: `url(${Ecoumarce2})`,
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
                width={{ base: '100%', md: '100%' }}
                p={{ base: 4, md: 8 }}
                h={height / 1.2}
                boxShadow="0 0 20px rgba(0, 0, 0, 0.3)"
            >

                <Center>
                    <Heading as="h1" size={{ base: 'xl', md: '2xl' }} mb={4}>
                        Welcome to Ecoumarce
                    </Heading>
                </Center>
                <Center>
                    <ExampleComponent />
                </Center>
                <Heading as="h1" size={{ base: 'xl', md: '2xl' }} mb={4}>
                    Discover exclusive deals and a seamless shopping experience.
                </Heading>
                <Button
                    colorScheme='red'
                    size="lg"
                    mt={6}
                    _hover={{ bg: 'red.500', p : "6px" }}
                >
                    {`Today's Offer`}
                </Button>
            </Box>

        </Flex>
    );
};

export default HeroDescription;
