import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
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
  useToast,
} from '@chakra-ui/react';
import { AuthError } from 'firebase/auth';

import { auth } from '@/firebase/firebase';

import FormAlert, { ErrorCode } from './FormAlert';

type FormData = {
  email: string;
};

export default function ResetPassword() {
  const toast = useToast();
  const [sendPasswordResetEmail, , resetError] = useSendPasswordResetEmail(auth);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async ({ email }) => {
    try {
      const success = await sendPasswordResetEmail(email);
      if (success) {
        toast({
          title: 'Password Reset Email Sent',
          status: 'success',
          isClosable: true,
          position: 'bottom-left',
        });
      }
    } catch (error: any) {
      toast({
        title: error.message,
        status: 'error',
        isClosable: true,
        position: 'bottom-left',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <ModalHeader>Create your account</ModalHeader>
        {resetError && <FormAlert status="error" errorCode={(resetError as AuthError).code as ErrorCode} />}
        <ModalBody pb={0}>
          <Stack spacing={4}>
            <Text fontSize={{ base: 'sm', sm: 'md' }} color={useColorModeValue('gray.800', 'gray.400')}>
              Forgotten your password? Enter your e-mail address below, You&apos;ll get an email with a reset link
            </Text>
            <FormControl id="email">
              <Input
                placeholder="your-email@example.com"
                _placeholder={{ color: 'gray.500' }}
                type="email"
                {...register('email')}
              />
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
            type="submit"
            isLoading={isSubmitting}
          >
            Request Reset
          </Button>
        </ModalFooter>
      </Stack>
    </form>
  );
}
