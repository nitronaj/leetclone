'use client';

import { Container, Heading, Text } from '@chakra-ui/react';
import { useParams } from 'next/navigation';

type ProblemPageProps = {};

export default function ProblemPageProps() {
  const { pid } = useParams();
  return (
    <Container maxW={'5xl'} textAlign={'center'}>
      <Heading fontWeight={600} lineHeight={'110%'} py={{ base: 8, md: 12 }}>
        {pid}
      </Heading>
    </Container>
  );
}
