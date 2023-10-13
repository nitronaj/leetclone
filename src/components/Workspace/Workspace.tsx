import React from 'react';
import Split from 'react-split';
import { Box } from '@chakra-ui/react';

import ProblemDescription from './ProblemDescription/ProblemDescription';

interface WorkspaceProps {}

const Workspace: React.FC<WorkspaceProps> = () => {
  return (
    <Box w={'auto'} m={4} h={'full'}>
      <Split className="split" minSize={1}>
        <ProblemDescription />
        <div>right</div>
      </Split>
    </Box>
  );
};

export default Workspace;
