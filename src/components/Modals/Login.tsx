import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
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
  const [signInWithEmailAndPassword, , loading, signInError] =
    useSignInWithEmailAndPassword(auth);
  const { register, handleSubmit } = useForm<FormData>();

  const handleClick = (type: AuthModalType) => () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: true, type }));
  };

  const onSubmit: SubmitHandler<FormData> = async ({ email, password }) => {
    try {
      const newUser = await signInWithEmailAndPassword(email, password);
      if (!newUser) {
        return;
      }
      router.push('/');
    } catch (error: any) {
      console.log(error);
      alert(error.message);
    }
  };

  if (signInError) console.log(signInError);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <ModalHeader>Sign in to your account</ModalHeader>
        {signInError && (
          <FormAlert
            status="error"
            errorCode={signInError?.code as ErrorCode}
          />
        )}
        <ModalBody pb={6}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>

              <Input type="email" placeholder="Email" {...register('email')} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register('password')} />
            </FormControl>

            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.400'} onClick={handleClick('forgotPassword')}>
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
            type="submit"
            isLoading={loading}
          >
            Sign in
          </Button>
        </ModalFooter>
      </Stack>
    </form>
  );
}
