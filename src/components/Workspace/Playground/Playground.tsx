import React from 'react';
import Split from 'react-split';
import {
  Box,
  Button,
  Code,
  HStack,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { Problem } from '@/utils/types/problem';

import CodeMirrorEditor from './CodeMirrorEditor/CodeMirrorEditor';
import PreferenceNav from './PreferenceNav/PreferenceNav';

interface PlaygroundProps {
  problem: Problem;
}

const Playground: React.FC<PlaygroundProps> = ({ problem }) => {
  const color = useColorModeValue('gray.800', 'white.900');
  const bgColor = useColorModeValue('white', 'gray.800');
  const bgColorEditor = useColorModeValue('white', 'eerie.800');

  const starterCode = problem.starterCode;

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
            overflow={'auto'}
          >
            <CodeMirrorEditor value={starterCode} />
            {/* <MonacoEditor value={tmpCode} /> */}
          </Box>
          <Box border={'1px solid '} borderColor={'inherit'} borderRadius={'lg'} bgColor={bgColor} overflow={'auto'}>
            <Tabs size={'md'}>
              <TabList bgColor={bgColor}>
                <Tab color={color} fontSize={'xs'} fontWeight={'semibold'}>
                  TestCases
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel fontSize={'xs'}>
                  <Stack>
                    <HStack>
                      <Button size={'sm'}>Case1</Button>
                      <Button size={'sm'}>Case2</Button>
                      <Button size={'sm'}>Case3</Button>
                    </HStack>
                    <Text fontWeight={'semibold'}>Input</Text>
                    <Code w={'full'} py={2} paddingInlineStart={2} borderRadius={'md'}>
                      nums = [2,7,11,15], target = 9
                    </Code>
                    <Text fontWeight={'semibold'}>Output</Text>
                    <Code w={'full'} py={2} paddingInlineStart={2} borderRadius={'md'}>
                      [0,1]
                    </Code>

                    <Text fontWeight={'semibold'}>Output</Text>
                    <Code w={'full'} py={2} paddingInlineStart={2} borderRadius={'md'}>
                      [0,1]
                    </Code>
                    <Text fontWeight={'semibold'}>Output</Text>
                    <Code w={'full'} py={2} paddingInlineStart={2} borderRadius={'md'}>
                      [0,1]
                    </Code>
                    <Text fontWeight={'semibold'}>Output</Text>
                    <Code w={'full'} py={2} paddingInlineStart={2} borderRadius={'md'}>
                      [0,1]
                    </Code>
                    <Text fontWeight={'semibold'}>Output</Text>
                    <Code w={'full'} py={2} paddingInlineStart={2} borderRadius={'md'}>
                      [0,1]
                    </Code>
                  </Stack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Split>
      </Box>
    </Stack>
  );
};

export default Playground;
