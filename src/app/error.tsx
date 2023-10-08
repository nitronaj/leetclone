'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react';

export default function Error({ error }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <ErrorUI />;
}

function ErrorUI() {
  return (
    <Center>
      <Box textAlign="center" py={10} px={6}>
        <Box display="inline-block">
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bgColor={'red.500'}
            rounded={'50px'}
            w={'55px'}
            h={'55px'}
            textAlign="center"
          >
            <CloseIcon boxSize={'20px'} color={'white'} />
          </Flex>
        </Box>
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Oops, something went wrong!
        </Heading>
        <Text color={'gray.500'}>We apologize for the inconvenience, but an error occurred.</Text>

        <Text>Please try refreshing the page or contact support if the issue persists.</Text>
        {/* You can also display error details if needed */}
        {/* {this.state.error && (
				  <details style={{whiteSpace: 'pre-wrap'}}>
					  {this.state.error.toString()}
					  <br />
					  {this.state.error.componentStack}
				  </details>
			  )} */}
      </Box>
    </Center>
  );
}
