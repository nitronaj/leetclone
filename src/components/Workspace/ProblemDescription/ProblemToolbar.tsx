import React from 'react';
import { AiFillDislike, AiFillLike, AiFillStar } from 'react-icons/ai';
import { TiStarOutline } from 'react-icons/ti';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Badge, Button, IconButton, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

import { problems } from '@/mockProblems/problems';

const ProblemToolbar = () => {
  const { pid } = useParams();

  const problem = problems.find((p) => p.id === pid);
  return (
    <Stack direction="row" my={3} alignItems={'center'}>
      <Badge colorScheme="green" borderRadius={10} px={1.5} py={1} fontSize={'x-small'}>
        {problem?.difficulty}
      </Badge>
      <CheckCircleIcon boxSize={5} color={useColorModeValue('green.600', 'green.200')} />

      <Button leftIcon={<AiFillLike />} variant="ghost" size={'sm'} fontSize={'md'} px={1}>
        <Text fontSize={'sm'} fontWeight={'medium'}>
          10
        </Text>
      </Button>
      <Button leftIcon={<AiFillDislike />} variant="ghost" size={'sm'} fontSize={'md'} px={1}>
        <Text fontSize={'sm'} fontWeight={'medium'}>
          2
        </Text>
      </Button>

      <IconButton
        aria-label="Fav Problem"
        icon={<AiFillStar />}
        variant="ghost"
        colorScheme="yellow"
        size={'sm'}
        fontSize={'lg'}
      />

      <IconButton
        aria-label="Fav Problem"
        icon={<TiStarOutline />}
        variant="ghost"
        colorScheme="yellow"
        size={'sm'}
        fontSize={'lg'}
      />
    </Stack>
  );
};

export default ProblemToolbar;
