'use client';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import { Box, Container, Flex } from '@chakra-ui/react';
import Image from 'next/image';

const AuthPage = () => {
  return (
    <>
      <Navbar />
      <Container maxW={'5xl'}>
        <Hero />
      </Container>
    </>
  );
};

export default AuthPage;
