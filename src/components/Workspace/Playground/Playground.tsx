import React from 'react';
import Split from 'react-split';
import { Box, Stack, useColorModeValue } from '@chakra-ui/react';

import CodeMirrorEditor from './CodeMirrorEditor/CodeMirrorEditor';
import PreferenceNav from './PreferenceNav/PreferenceNav';

const Playground = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const bgColorEditor = useColorModeValue('white', 'eerie.800');

  return (
    <Stack marginBlockStart={4} spacing={0}>
      <PreferenceNav />
      <Box h={`calc(100vh - 7.5rem)`}>
        <Split className="split" direction="vertical" sizes={[70, 30]}>
          <Box
            border={'1px solid '}
            borderColor={'inherit'}
            borderRadius={'lg'}
            bgColor={bgColorEditor}
            position={'relative'}
            overflow={'hidden'}
          >
            <CodeMirrorEditor />
            {/* <MonacoEditor value={tmpCode} /> */}
          </Box>
          <Box border={'1px solid '} borderColor={'inherit'} borderRadius={'lg'} bgColor={bgColor}>
            <div>Extra</div>
          </Box>
        </Split>
      </Box>
    </Stack>
  );
};

export default Playground;
