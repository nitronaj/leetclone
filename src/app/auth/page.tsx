'use client';

import AuthModal from '@/components/Modals/AuthModal';
import { Container } from '@chakra-ui/react';
import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Navbar/Navbar';
// import SignUp from '@/components/Modals/Signup';
// import Login from '@/components/Modals/Loging';
import ResetPassword from '@/components/Modals/ResetPassword';

const AuthPage = () => {
  return (
    <>
      <Navbar />
      <Container maxW={'5xl'}>
        <Hero />
        <AuthModal>
          <ResetPassword />
        </AuthModal>
      </Container>
    </>
  );
};

export default AuthPage;
