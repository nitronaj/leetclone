'use client';
import { useState } from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Icon,
  Link,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { type MockProblem, mockProblems } from '@/mockProblems/problems';
import { api } from '@/trpc/react';
// import { problems } from '@/utils/problems';
import { type Problem } from '@/utils/types/problem';

import YouTubeModal from '../Modals/YouTube';

export const difficultyColors: Record<string, string> = {
  Easy: 'green.500',
  Medium: 'yellow.500',
  Hard: 'red.500',
};

export default function Problems() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setID] = useState('');

  const { data, isLoading } = api.problem.getProblems.useQuery();

  const handleVideoClick = (id: string) => () => {
    setID(id);
    onOpen();
  };

  const ProblemList = data?.map((problem: Problem, index) => {
    const mockProblem = mockProblems.find((p: MockProblem) => p.id === problem.id);
    const difficultyColor = difficultyColors[mockProblem?.difficulty ?? 'Easy'];
    return (
      <Tr key={problem.id}>
        <Td textAlign={'center'}>
          <CheckIcon color={'green.500'} />
        </Td>
        <Td>
          <Link as={NextLink} href={`problems/${problem.id}`}>
            {index + 1}. {problem.title}
          </Link>
        </Td>
        <Td color={difficultyColor}>{mockProblem?.difficulty}</Td>
        <Td>{mockProblem?.category}</Td>
        <Td>
          {mockProblem?.videoId ? (
            <Icon
              as={AiFillYoutube}
              fontSize={'2xl'}
              _hover={{
                color: 'red.500',
                cursor: 'pointer',
              }}
              onClick={handleVideoClick(problem.id)}
            />
          ) : (
            <Text color="gray.400">Comming Soon</Text>
          )}
        </Td>
      </Tr>
    );
  });

  return (
    <Box>
      <TableContainer>
        <Table variant="striped" colorScheme="gray" size="md">
          <Thead>
            <Tr>
              <Th>Status</Th>
              <Th>Title</Th>
              <Th>Difficulty</Th>
              <Th>Category</Th>
              <Th>Solution</Th>
            </Tr>
          </Thead>
          <Tbody>{ProblemList}</Tbody>
        </Table>
      </TableContainer>
      <YouTubeModal id={id} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
