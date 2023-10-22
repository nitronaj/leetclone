import { Stack } from '@chakra-ui/react';

import Navbar from '@/components/Navbar/Navbar';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Stack spacing={0}>
      <Navbar />
      {children}
    </Stack>
  );
}
