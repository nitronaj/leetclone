import { useState } from 'react';

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Stack spacing={4}>
      <ModalHeader>Create your account</ModalHeader>
      <ModalBody pb={6}>
        <Stack spacing={4}>
          <FormControl id="displayName">
            <FormLabel>Display Name</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input type={showPassword ? 'text' : 'password'} />
              <InputRightElement h={'full'}>
                <Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Stack>
      </ModalBody>
      <ModalFooter pt={0}>
        <Stack w="100%">
          <Box w="100%">
            <Button
              w="100%"
              loadingText="Submitting"
              size="lg"
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
            >
              Sign up
            </Button>
          </Box>
          <Stack pt={8}>
            <Text align={'center'}>
              Already a user? <Link color={'blue.400'}>Login</Link>
            </Text>
          </Stack>
        </Stack>
      </ModalFooter>
    </Stack>
  );
}
