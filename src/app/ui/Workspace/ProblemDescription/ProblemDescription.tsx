import React from 'react';
import {
  Box,
  Code,
  Heading,
  ListItem,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  UnorderedList,
} from '@chakra-ui/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';

import { ensureArray } from '@/app/lib/ensureArray/ensureArray';
import { Pre } from '@/app/ui/shared/Pre/Pre';
import { type Example, type Problem } from '@/utils/types/problem';

import ProblemToolbar from './ProblemToolbar';

type ProblemDescriptionProps = {
  problem: Problem;
};

const Examples: React.FC<{ examples: Example[] }> = ({ examples }) => {
  return examples.map((example) => {
    const { id, inputText, outputText, explanation } = example;
    return (
      <Stack key={id} spacing={0}>
        <Heading as="h4" size={'xs'}>
          Example {id}:
        </Heading>
        <Pre>
          <Box as="span" fontWeight={'bold'} mr={1}>
            Input:
          </Box>
          {inputText}
          {'\n'}
          <Box as="span" fontWeight={'bold'} mr={1}>
            Output:
          </Box>
          {outputText}
          {'\n'}
          <Box as="span" fontWeight={'bold'} mr={1}>
            Explanation:
          </Box>
          {explanation}
        </Pre>
      </Stack>
    );
  });
};

const Constraints: React.FC<{ constraints: string | string[] }> = ({ constraints }) => {
  let constraintList;
  if (Array.isArray(constraints)) {
    constraintList = ensureArray<string>(constraints).map((constraint) => (
      <ListItem key={constraint}>
        <Code fontSize={'xs'} borderRadius={'md'}>
          {constraint}
        </Code>
      </ListItem>
    ));

    return (
      <Stack>
        <Heading as="h4" size={'xs'}>
          Constraints:
        </Heading>
        <UnorderedList paddingInlineStart={2} spacing={1}>
          {constraintList}
        </UnorderedList>
      </Stack>
    );
  }
  return (
    <Box>
      <Heading as="h4" size={'xs'}>
        Constraints:
      </Heading>
      <Prose fontSize={'sm'}>
        <Box dangerouslySetInnerHTML={{ __html: constraints }} />
      </Prose>
    </Box>
  );
};

const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ problem }) => {
  const problemStatement = { __html: problem.problemStatement };
  return (
    <Box marginBlockStart={4}>
      <Tabs variant="workspace" colorScheme="whiteAlpha">
        <TabList>
          <Tab fontSize={'smaller'} fontWeight={'semibold'}>
            Description
          </Tab>
        </TabList>
        <TabPanels h={`calc(100vh - 7.5rem)`} overflow={'hidden'}>
          <TabPanel h={'full'} overflow={'auto'} fontSize={'sm'}>
            <Heading as="h2" size="sm">
              {problem?.order}. {problem?.title}
            </Heading>
            <ProblemToolbar problem={problem} />
            <Box>
              <Prose fontSize={'sm'}>
                <Box dangerouslySetInnerHTML={problemStatement} />
              </Prose>

              <Examples examples={problem.examples} />
              <Constraints constraints={problem.constraints} />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ProblemDescription;
