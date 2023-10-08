'use client';

import { Box, Container } from '@chakra-ui/react';

import Navbar from '@/components/Navbar/Navbar';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <Navbar />
      <Container maxW={'5xl'}>{children}</Container>
    </Box>
  );
}
