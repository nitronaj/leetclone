'use client';
import { useState } from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Icon,
  Link,
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

import { Problem, problems } from '@/mockProblems/problems';

import YouTubeModal from '../Modals/YouTube';

const difficultyColors: Record<string, string> = {
  Easy: 'green.500',
  Medium: 'yellow.500',
  Hard: 'red.500',
};

export default function Problems() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setID] = useState('');

  const handleVideoClick = (id: string) => () => {
    setID(id);
    onOpen();
  };

  const ProblemList = problems.map((problem: Problem) => {
    const difficultyColor = difficultyColors[problem.difficulty];
    return (
      <Tr key={problem.id}>
        <Td textAlign={'center'}>
          <CheckIcon color={'green.500'} />
        </Td>
        <Td>
          <Link as={NextLink} href={`problem/${problem.id}`}>
            {problem.title}
          </Link>
        </Td>
        <Td color={difficultyColor}>{problem.difficulty}</Td>
        <Td>{problem.category}</Td>
        <Td>
          {problem.videoId ? (
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
