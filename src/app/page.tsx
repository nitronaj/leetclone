'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Center, Container, Spinner, Stack } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

import { authModalState } from '@/atoms/authModelAtom';
import Hero from '@/components/Hero/Hero';
import AuthModal from '@/components/Modals/AuthModal';
import HomeNavbar from '@/components/Navbar/HomeNavbar';
import Navbar from '@/components/Navbar/Navbar';
import { auth } from '@/firebase/firebase';

export default function Home() {
  const authModel = useRecoilValue(authModalState);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <Center h={'100vh'}>
        <Spinner mt={'-30%'} thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
      </Center>
    );
  }

  return (
    <main>
      {!user ? <HomeNavbar /> : <Navbar />}

      <Container maxW={'5xl'} textAlign={'center'}>
        <Stack>
          <Hero />
          {authModel.isOpen && <AuthModal />}
        </Stack>
      </Container>
    </main>
  );
}
