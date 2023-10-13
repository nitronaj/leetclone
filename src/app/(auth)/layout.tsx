'use client';

import { Stack, useColorModeValue } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

import Navbar from '@/components/Navbar/Navbar';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const { pid } = useParams();

  const bgColor = useColorModeValue(pid ? 'white' : 'white', 'gray.800');

  return (
    <Stack spacing={0} bgColor={bgColor}>
      <Navbar />
      {children}
    </Stack>
  );
}
