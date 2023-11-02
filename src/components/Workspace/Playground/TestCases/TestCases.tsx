import React, { useState } from 'react';
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

import { type Problem } from '@/utils/types/problem';

interface TestCasesProps {
  problem: Problem;
}

const TestCases: React.FC<TestCasesProps> = ({ problem }) => {
  const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);

  const color = useColorModeValue('gray.800', 'white.900');
  const bgColor = useColorModeValue('white', 'gray.800');
  const { examples } = problem;
  const selectedExample = examples[activeTestCaseId];
  const inputs = selectedExample.inputText.split(',');

  const handleClick = (index: number) => () => setActiveTestCaseId(index);

  return (
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
                {examples.map((example, index) => (
                  <Button key={example.id} size={'sm'} onClick={handleClick(index)}>
                    Case{example.id}
                  </Button>
                ))}
              </HStack>
              {inputs.map((input) => {
                const [inputText, inputValue] = input.split('=');
                return (
                  <>
                    <Text fontWeight={'semibold'}>{inputText}</Text>
                    <Code w={'full'} py={2} paddingInlineStart={2} borderRadius={'md'}>
                      {inputValue}
                    </Code>
                  </>
                );
              })}

              {/* <Text fontWeight={'semibold'}>{output}</Text>
              <Code w={'full'} py={2} paddingInlineStart={2} borderRadius={'md'}>
                {outputValue}
              </Code> */}
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TestCases;
