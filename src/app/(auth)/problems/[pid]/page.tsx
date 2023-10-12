'use client';

import { Box } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

import Workspace from '@/components/Workspace/Workspace';

type ProblemPageProps = {};

const ProblemPage: React.FC<ProblemPageProps> = () => {
  const { pid } = useParams();
  return (
    <Box bgColor={'gray.200'} height={'full'} overflow={'hidden'}>
      <Workspace />
    </Box>
  );
};

export default ProblemPage;
