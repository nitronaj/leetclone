import React from 'react';
import Split from 'react-split';
import { Box } from '@chakra-ui/react';

import Playground from './Playground/Playground';
import ProblemDescription from './ProblemDescription/ProblemDescription';

interface WorkspaceProps {}

const Workspace: React.FC<WorkspaceProps> = () => {
  return (
    <Box w={'auto'} marginInline={4} h={'full'}>
      <Split className="split split-horizontal" minSize={0}>
        <ProblemDescription />
        <Playground />
      </Split>
    </Box>
  );
};

export default Workspace;
