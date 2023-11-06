import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormErrorMessage,
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
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import { authModalState, AuthModalType } from '@/atoms/authModelAtom';
import { auth } from '@/firebase/firebase';

import FormAlert, { ErrorCode } from './FormAlert';
type FormData = {
  displayName: string;
  email: string;
  password: string;
};

export default function SignUp() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const setAuthModalState = useSetRecoilState(authModalState);
  const [createUserWithEmailAndPassword, , , registerError] = useCreateUserWithEmailAndPassword(auth);
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
      const newUser = await createUserWithEmailAndPassword(email, password);
      if (!newUser) {
        return;
      }
      router.push('/');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <ModalHeader>Create your account</ModalHeader>
        {registerError && <FormAlert status="error" errorCode={registerError?.code as ErrorCode} />}
        <ModalBody pb={6}>
          <Stack spacing={4}>
            <FormControl id="displayName">
              <FormLabel>Display Name</FormLabel>
              <Input type="text" {...register('displayName')} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" {...register('email')} />
            </FormControl>
            <FormControl id="password" isRequired isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    minLength: {
                      value: 8,
                      message: 'Minimum length should be 8',
                    },
                  })}
                  autoComplete="on"
                />
                <InputRightElement h={'full'}>
                  <Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter pt={0}>
          <Stack w="100%">
            <Button loadingText="Submitting" colorScheme={'twitter'} type="submit" isLoading={isSubmitting}>
              Sign up
            </Button>

            <Stack pt={8}>
              <Text align={'left'}>
                Already a user?{' '}
                <Link color={'blue.400'} onClick={handleClick('login')}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </ModalFooter>
      </Stack>
    </form>
  );
}
