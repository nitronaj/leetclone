'use client';
import { CheckIcon } from '@chakra-ui/icons';
import { Icon, Link, Td, Text, Tr } from '@chakra-ui/react';
import NextLink from 'next/link';
import { problems } from '@/mockProblems/problems';
import { difficultyColors } from './Problems';

export function ProblemList() {
  const list = problems.map((problem, index) => {
    const difficultyColor = difficultyColors[problem.difficulty];
    return (
      <Tr key={problem.id}>
        <Td>
          <CheckIcon color={'green.500'} />
        </Td>
        <Td>
          <Link as={NextLink} href={`problem/${problem.id}`}>
            {problem.title}
          </Link>
        </Td>
        <Td color={difficultyColor}>{problem.difficulty}</Td>
        <Td>{problem.category}</Td>
        <Td>{problem.videoId ? <Icon as={FiYoutube} /> : <Text color="gray-400">Comming Soon</Text>}</Td>
      </Tr>
    );
  });

  return list;
}
