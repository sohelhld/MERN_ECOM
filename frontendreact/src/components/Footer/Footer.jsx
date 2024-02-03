import React from 'react';
import { Box, Flex, Text, Link, VStack, IconButton, Divider, HStack } from '@chakra-ui/react';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import useWindowDimensions from '../../utils/dimensions';

function Footer() {
  const { width } = useWindowDimensions();
  return (
    <Box width={width} as="footer" mt={8} borderTop="1px solid" borderColor="gray.200">
      <Flex
        align="center"
        justify="space-between"
        direction={{ base: 'column', md: 'row' }}
        p={4}
      >
        <VStack spacing={4} align={{ base: 'center', md: 'flex-start' }}>
          <Text fontSize="lg" fontWeight="bold">
            Connect with us
          </Text>
          <HStack spacing={4}>
            <IconButton
              as={Link}
              href="https://twitter.com/example"
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
              fontSize="20px"
            />
            <IconButton
              as={Link}
              href="https://github.com/example"
              aria-label="GitHub"
              icon={<FaGithub />}
              variant="ghost"
              fontSize="20px"
            />
            <IconButton
              as={Link}
              href="https://www.linkedin.com/in/example"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              variant="ghost"
              fontSize="20px"
            />
          </HStack>
        </VStack>

        <Divider orientation="vertical" />

        <VStack spacing={4} align={{ base: 'center', md: 'flex-end' }}>
          <Text fontSize="lg" fontWeight="bold">
            Contact
          </Text>
          <HStack spacing={2}>
            <IconButton
              as={Link}
              href="mailto:info@example.com"
              aria-label="Email"
              icon={<FaEnvelope />}
              variant="ghost"
              fontSize="20px"
            />
            <Link href="mailto:info@example.com">info@example.com</Link>
          </HStack>
        </VStack>

        {/* Additional Links Section */}
        <VStack spacing={4} align="center" mt={{ base: 4, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">
            Additional Links
          </Text>
          <Link href="/about">About Us</Link>
          <Link href="/services">Our Services</Link>
          <Link href="/blog">Blog</Link>
        </VStack>
      </Flex>

      {/* Description Section */}
      <Text mt={4} textAlign="center" fontSize="sm" color="gray.500">
        Providing innovative solutions for your business needs. Reach out to us for a personalized experience.
      </Text>

      {/* Copyright Section */}
      <Text textAlign="center" fontSize="sm" color="gray.500" mt={2}>
        © 2024 One Store. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;
