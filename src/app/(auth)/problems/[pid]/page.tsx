'use client';

import { Stack } from '@chakra-ui/react';

import Workspace from '@/components/Workspace/Workspace';

const NavbarHeight = 3.75; // 61px 60/16 = 3.75rem;

type ProblemPageProps = {};

const ProblemPage: React.FC<ProblemPageProps> = () => {
  return (
    <Stack overflow={'auto'} spacing={0} h={`calc(100vh - ${NavbarHeight}rem)`}>
      <Workspace />
    </Stack>
  );
};

export default ProblemPage;
