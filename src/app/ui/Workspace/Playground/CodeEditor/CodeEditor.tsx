import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

import { Problem } from '@/utils/types/problem';

import CodeMirrorEditor from './CodeMirrorEditor/CodeMirrorEditor';

interface CodeEditorProps {
  problem: Problem;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ problem }) => {
  const bgColorEditor = useColorModeValue('white', 'eerie.800');
  const starterCode = problem.starterCode;

  return (
    <Box
      border={'1px solid '}
      borderColor={'inherit'}
      borderRadius={'lg'}
      bgColor={bgColorEditor}
      position={'relative'}
      overflow={'auto'}
    >
      <CodeMirrorEditor value={starterCode} />
      {/* <MonacoEditor value={tmpCode} /> */}
    </Box>
  );
};

export default CodeEditor;
