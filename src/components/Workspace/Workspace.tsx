'use client';

import React from 'react';
import Split from 'react-split';
import { Box } from '@chakra-ui/react';

import { problems } from '@/utils/problems';

import Playground from './Playground/Playground';
import ProblemDescription from './ProblemDescription/ProblemDescription';

interface WorkspaceProps {
  pid: string;
}

const Workspace: React.FC<WorkspaceProps> = ({ pid }) => {
  const problem = problems[pid];

  return (
    <Box w={'auto'} marginInline={4} h={'full'} overflowX={'hidden'}>
      <Split className="split split-horizontal" minSize={0}>
        <ProblemDescription problem={problem} />
        <Playground problem={problem} />
      </Split>
    </Box>
  );
};

export default Workspace;
