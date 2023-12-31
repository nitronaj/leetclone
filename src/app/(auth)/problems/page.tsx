import { Container, Heading, Text } from '@chakra-ui/react';

import Problems from '@/app/ui/Problems/Problems';

export default function Home() {
  return (
    <Container maxW={'5xl'} textAlign={'center'}>
      <Heading fontWeight={600} lineHeight={'110%'} py={{ base: 8, md: 12 }}>
        Quantity Over Quality
        <Text as={'blockquote'} fontSize={{ base: 'md', sm: '2xl', md: '3xl' }} color={'teal.400'}>
          Solving Problems. Unlocking Opportunities.
        </Text>
      </Heading>
      <Problems />
    </Container>
  );
}
