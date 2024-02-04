'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from 'react-icons/fc'



const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
      </Stack>
    </Box>
  )
}

export default function MiddleFeature() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Discover Ecoumarce
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Explore a world of unique products and exclusive deals. Ecoumarce provides a seamless shopping experience with a wide range of categories to suit your needs.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Fashion & Style'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={'Discover the latest trends and elevate your style with our exclusive fashion collection.'}
            href={'#'}
          />
          <Card
            heading={'Collaborative Deals'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={'Save big with collaborative deals. Partner with us for exciting discounts and offers.'}
            href={'#'}
          />
          <Card
            heading={'Donation Campaigns'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={'Join our donation campaigns. Contribute towards meaningful causes and make a difference.'}
            href={'#'}
          />
          <Card
            heading={'Management Solutions'}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={'Efficiently manage your orders and inventory with our advanced management solutions.'}
            href={'#'}
          />
          <Card
            heading={'About Ecoumarce'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={'Learn more about Ecoumarce and our commitment to providing the best shopping experience for our customers.'}
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  )
}
