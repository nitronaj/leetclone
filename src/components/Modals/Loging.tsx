import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Link,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Stack,
} from '@chakra-ui/react';

export default function Login() {
  return (
    <Stack spacing={4}>
      <ModalHeader>Sign in to your account</ModalHeader>
      <ModalBody pb={6}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>

            <Input type="email" placeholder="Email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>

          <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
            <Checkbox>Remember me</Checkbox>
            <Link href="/forgetpassword" color={'blue.400'}>
              Forgot password?
            </Link>
          </Stack>
        </Stack>
      </ModalBody>

      <ModalFooter>
        <Button
          bg={'blue.400'}
          color={'white'}
          _hover={{
            bg: 'blue.500',
          }}
        >
          Sign in
        </Button>
      </ModalFooter>
    </Stack>
  );
}
