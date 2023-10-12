import React from 'react';
import Split from 'react-split';
import { Box } from '@chakra-ui/react';

import ProblemDescription from './ProblemDescription/ProblemDescription';

interface WorkspaceProps {}

const NavbarHeight = 3.75; // 61px 60/16 = 3.75rem;

const Workspace: React.FC<WorkspaceProps> = () => {
  return (
    <Box w={'auto'} m={4} height={`calc(100vh - ${NavbarHeight + 2}rem)`} bgColor={'white'}>
      <Split className="split">
        <ProblemDescription />
        <div>right</div>
      </Split>
    </Box>
  );
};

export default Workspace;
