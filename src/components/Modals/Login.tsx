import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import { authModalState, AuthModalType } from '@/atoms/authModelAtom';
import { auth } from '@/firebase/firebase';

import FormAlert, { ErrorCode } from './FormAlert';

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signInWithEmailAndPassword, , , signInError] = useSignInWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const handleClick = (type: AuthModalType) => () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: true, type }));
  };

  const onSubmit: SubmitHandler<FormData> = async ({ email, password }) => {
    try {
      const newUser = await signInWithEmailAndPassword(email, password);
      if (!newUser) {
        console.log('something went wrong');
        return;
      }

      setAuthModalState((prev) => ({ ...prev, isOpen: false }));

      router.push('/');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <ModalHeader>Sign in to your account</ModalHeader>
        {signInError && <FormAlert status="error" errorCode={signInError?.code as ErrorCode} />}
        <ModalBody pb={0}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>

              <Input type="email" placeholder="Email" {...register('email')} />
            </FormControl>
            <FormControl id="password" isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                {...register('password', {
                  minLength: {
                    value: 8,
                    message: 'Minimum length should be 8',
                  },
                })}
                autoComplete="on"
              />
              <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
            </FormControl>

            <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
            </Stack>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Stack w="100%">
            <Button colorScheme={'twitter'} type="submit" isLoading={isSubmitting}>
              Sign in
            </Button>
            <Link pt={2} color={'twitter.500'} onClick={handleClick('forgotPassword')} textAlign={'right'}>
              Forgot password?
            </Link>

            <Stack pt={8}>
              <Text align={'left'}>
                Not Registered?{' '}
                <Link color={'twitter.500'} onClick={handleClick('register')}>
                  Create Account
                </Link>
              </Text>
            </Stack>
          </Stack>
        </ModalFooter>
      </Stack>
    </form>
  );
}
