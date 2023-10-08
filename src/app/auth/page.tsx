'use client';

import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Stack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';

import { authModalState } from '@/atoms/authModelAtom';
import Hero from '@/components/Hero/Hero';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';
import AuthModal from '@/components/Modals/AuthModal';
import { auth } from '@/firebase/firebase';

const AuthPage = () => {
  const authModel = useRecoilValue(authModalState);
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      router.push('/');
    }
    if (!user && !loading) setIsLoading(false);
  }, [loading, router, user]);

  console.log(isLoading, user, loading);

  if (isLoading) {
    return <LoadingSkeleton isLoaded={isLoading} />;
  }

  return (
    <Stack>
      <Hero />
      {authModel.isOpen && <AuthModal />}
    </Stack>
  );
};

export default AuthPage;
