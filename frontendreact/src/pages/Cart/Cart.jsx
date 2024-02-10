import {
    Heading,
    HStack,
    VStack,
    Image,
    AspectRatio,
    Text,
    Divider,
    Stack,
    Button,
    useColorMode,
    useColorModeValue,
  } from '@chakra-ui/react';
  
 export const Cart = () => {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('gray.50', 'whiteAlpha.50');
    const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');
    return (
      <VStack
        w="full"
        h="full"
        p={10}
        spacing={6}
        align="flex-start"
        bg={bgColor}
      >
        <VStack alignItems="flex-start" spacing={3}>
          <Heading size="2xl">Your cart</Heading>
          <Text>
            If the price is too hard on your eyes,{' '}
            <Button onClick={toggleColorMode} variant="link" colorScheme="black">
              try changing the theme.
            </Button>
          </Text>
        </VStack>
        <HStack
          spacing={{ base: 3, md: 6 }}
          alignItems={{ base: 'flex-start', md: 'center' }}
          w="full"
        >
          <AspectRatio ratio={1} w={24}>
            <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Skateboard" />
          </AspectRatio>
          <Stack
            spacing={0}
            w="full"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <VStack w="full" spacing={0} alignItems="flex-start">
              <Heading size="md">Penny board</Heading>
              <Text color={secondaryTextColor}>PNYCOMP27541</Text>
            </VStack>
            <Heading size="sm" textAlign="end">
              $119.00
            </Heading>
          </Stack>
        </HStack>
        <VStack spacing={4} alignItems="stretch" w="full">
          <HStack justifyContent="space-between">
            <Text color={secondaryTextColor}>Subtotal</Text>
            <Heading size="sm">$119.00</Heading>
          </HStack>
          <HStack justifyContent="space-between">
            <Text color={secondaryTextColor}>Shipping</Text>
            <Heading size="sm">$19.99</Heading>
          </HStack>
          <HStack justifyContent="space-between">
            <Text color={secondaryTextColor}>Taxes (estimated)</Text>
            <Heading size="sm">$23.80</Heading>
          </HStack>
        </VStack>
        <Divider />
        <HStack justifyContent="space-between" w="full">
          <Text color={secondaryTextColor}>Total</Text>
          <Heading size="lg">$162.79</Heading>
        </HStack>
      </VStack>
    );
  };
  