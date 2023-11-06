'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Stack } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

import { authModalState } from '@/atoms/authModelAtom';
import Hero from '@/components/Hero/Hero';
import AuthModal from '@/components/Modals/AuthModal';
import HomeNavbar from '@/components/Navbar/HomeNavbar';
import Navbar from '@/components/Navbar/Navbar';
import { auth } from '@/firebase/firebase';

export default function Home() {
  const authModel = useRecoilValue(authModalState);
  const [user] = useAuthState(auth);

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
