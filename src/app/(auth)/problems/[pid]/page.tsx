'use client';

import { Stack } from '@chakra-ui/react';

import { NavbarHeight } from '@/components/Navbar/Navbar';
import Workspace from '@/components/Workspace/Workspace';

type ProblemPageProps = {};

const ProblemPage: React.FC<ProblemPageProps> = () => {
  return (
    <Stack overflow={'auto'} spacing={0} h={`calc(100vh - ${NavbarHeight}px)`}>
      <Workspace />
    </Stack>
  );
};

export default ProblemPage;
