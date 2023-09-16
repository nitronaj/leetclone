import {
  Button,
  FormControl,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

// type ForgotPasswordFormInputs = {
//   email: string;
// };

export default function ResetPassword() {
  return (
    <Stack spacing={4}>
      <ModalHeader>Create your account</ModalHeader>
      <ModalBody pb={0}>
        <Stack spacing={4}>
          <Text fontSize={{ base: 'sm', sm: 'md' }} color={useColorModeValue('gray.800', 'gray.400')}>
            Forgotten your password? Enter your e-mail address below, You&apos;ll get an email with a reset link
          </Text>
          <FormControl id="email">
            <Input placeholder="your-email@example.com" _placeholder={{ color: 'gray.500' }} type="email" />
          </FormControl>
        </Stack>
      </ModalBody>
      <ModalFooter pt={0}>
        <Button
          w={'100%'}
          bg={'blue.400'}
          color={'white'}
          _hover={{
            bg: 'blue.500',
          }}
        >
          Request Reset
        </Button>
      </ModalFooter>
    </Stack>
  );
}
