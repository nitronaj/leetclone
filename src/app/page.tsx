'use client';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Stack } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

import Hero from '@/app/ui/Hero/Hero';
import AuthModal from '@/app/ui/Modals/AuthModal';
import HomeNavbar from '@/app/ui/Navbar/HomeNavbar';
import Navbar from '@/app/ui/Navbar/Navbar';
import { authModalState } from '@/atoms/authModelAtom';
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
