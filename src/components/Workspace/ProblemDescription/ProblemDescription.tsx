import React from 'react';
import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';
import { useParams } from 'next/navigation';

import { problems } from '@/mockProblems/problems';

import ProblemToolbar from './ProblemToolbar';

interface ProblemDescriptionProps {}

const ProblemDescription: React.FC<ProblemDescriptionProps> = () => {
  const { pid } = useParams();

  const problem = problems.find((p) => p.id === pid);

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
              1. {problem?.title}
            </Heading>
            <ProblemToolbar />
            <Box>
              <Prose fontSize={'sm'}>
                <p>
                  Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return{' '}
                  <em>
                    indices of the two numbers such that they add up to <code>target</code>
                  </em>
                  .
                </p>
                <p>
                  You may assume that each input would have{' '}
                  <strong>
                    <em>exactly</em> one solution
                  </strong>
                  , and you may not use the <em>same</em> element twice.
                </p>
                <p>You can return the answer in any order.</p>
                <p>
                  <strong className="example">Example 1:</strong>
                </p>
                <pre>
                  <strong>Input:</strong> nums = [2,7,11,15], target = 9 {'\n'}
                  <strong>Output:</strong> [0,1] {'\n'}
                  <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
                </pre>
                <p>
                  <strong className="example">Example 2:</strong>
                </p>
                <pre>
                  <strong>Input:</strong> nums = [3,2,4], target = 6 {'\n'}
                  <strong>Output:</strong> [1,2]
                </pre>
                <p>
                  <strong className="example">Example 3:</strong>
                </p>
                <pre>
                  <strong>Input:</strong> nums = [3,3], target = 6{'\n'}
                  <strong>Output:</strong> [0,1]
                </pre>
                <p>&nbsp;</p>
                <p>
                  <strong>Constraints:</strong>
                </p>
                <ul>
                  <li>
                    <code>
                      2 &lt;= nums.length &lt;= 10<sup>4</sup>
                    </code>
                  </li>
                  <li>
                    <code>
                      -10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup>
                    </code>
                  </li>
                  <li>
                    <code>
                      -10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup>
                    </code>
                  </li>
                  <li>
                    <strong>Only one valid answer exists.</strong>
                  </li>
                </ul>
                <p>&nbsp;</p>
                <strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than{' '}
                <code>
                  O(n<sup>2</sup>)
                </code>
                &nbsp;time complexity?
              </Prose>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ProblemDescription;
