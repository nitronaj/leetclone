import React from 'react';
import { Box, Code, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
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
        <TabPanels h={`calc(100vh - 8.1rem)`} overflow={'hidden'}>
          <TabPanel h={'full'} overflow={'auto'}>
            <Heading as="h2" size="sm">
              1. {problem?.title}
            </Heading>
            <ProblemToolbar />
            <div data-track-load="description_content">
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
              <p>&nbsp;</p>
              <p>
                <strong>Example 1:</strong>
              </p>
              <Code>
                <strong>Input:</strong> nums = [2,7,11,15], target = 9<strong>Output:</strong> [0,1]
                <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
              </Code>
              <p>
                <strong>Example 2:</strong>
              </p>
              <Code>
                <strong>Input:</strong> nums = [3,2,4], target = 6<strong>Output:</strong> [1,2]
              </Code>
              <p>
                <strong>Example 3:</strong>
              </p>
              <Code>
                <strong>Input:</strong> nums = [3,3], target = 6<strong>Output:</strong> [0,1]
              </Code>
              <p>&nbsp;</p>
              <p>
                <strong>Constraints:</strong>
              </p>
              <ul className="ps-8">
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
              time complexity?
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est excepturi quos, amet facere ad nostrum.
                Quia nisi molestias harum tempore incidunt impedit ea, sint deleniti. Molestiae corrupti autem magnam
                soluta?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est excepturi quos, amet facere ad nostrum.
                Quia nisi molestias harum tempore incidunt impedit ea, sint deleniti. Molestiae corrupti autem magnam
                soluta?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est excepturi quos, amet facere ad nostrum.
                Quia nisi molestias harum tempore incidunt impedit ea, sint deleniti. Molestiae corrupti autem magnam
                soluta?
              </p>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ProblemDescription;
