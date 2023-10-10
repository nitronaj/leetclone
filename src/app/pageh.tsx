'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Heading } from '@chakra-ui/react';

import HomeNavbar from '@/components/Navbar/HomeNavbar';
import Navbar from '@/components/Navbar/Navbar';
import { auth } from '@/firebase/firebase';

export function Home1() {
  const [user] = useAuthState(auth);

  return (
    <main>
      {!user ? <HomeNavbar /> : <Navbar />}

      <Container maxW={'5xl'} textAlign={'center'}>
        <Heading fontWeight={600} lineHeight={'110%'} py={{ base: 8, md: 12 }}>
          Home Page
        </Heading>
      </Container>
    </main>
  );
}
