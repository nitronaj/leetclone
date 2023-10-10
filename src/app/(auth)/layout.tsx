'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Box, Container } from '@chakra-ui/react';

import Navbar from '@/components/Navbar/Navbar';
import { auth } from '@/firebase/firebase';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [user, loading] = useAuthState(auth);

  return (
    <Box>
      <Navbar />
      <Container maxW={'5xl'}>{children}</Container>
    </Box>
  );
}
