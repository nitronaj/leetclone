'use client';

import AuthModal from '@/components/Modals/AuthModal';
import { Container } from '@chakra-ui/react';
import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
// import SignUp from '@/components/Modals/Signup';
// import Login from '@/components/Modals/Loging';
import { authModalState } from '@/atoms/authModelAtom';
import { useRecoilValue } from 'recoil';

const AuthPage = () => {
  const authModel = useRecoilValue(authModalState);

  return (
    <>
      <Navbar />
      <Container maxW={'5xl'}>
        <Hero />
        {authModel.isOpen && <AuthModal />}
      </Container>
    </>
  );
};

export default AuthPage;
