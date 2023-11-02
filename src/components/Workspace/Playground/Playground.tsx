import React from 'react';
import Split from 'react-split';
import { Box, Stack } from '@chakra-ui/react';

import { type Problem } from '@/utils/types/problem';

import CodeEditor from './CodeEditor/CodeEditor';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import TestCases from './TestCases/TestCases';

interface PlaygroundProps {
  problem: Problem;
}

const Playground: React.FC<PlaygroundProps> = ({ problem }) => {
  return (
    <Stack marginBlockStart={4} spacing={0}>
      <PreferenceNav />
      <Box h={`calc(100vh - 7.5rem)`}>
        <Split className="split" direction="vertical" sizes={[70, 30]}>
          <CodeEditor problem={problem} />
          <TestCases problem={problem} />
        </Split>
      </Box>
    </Stack>
  );
};

export default Playground;
