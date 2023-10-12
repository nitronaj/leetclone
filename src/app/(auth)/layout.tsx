import { Box } from '@chakra-ui/react';

import Navbar from '@/components/Navbar/Navbar';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
}
