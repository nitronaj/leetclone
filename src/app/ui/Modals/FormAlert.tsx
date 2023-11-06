import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertStatus,
} from '@chakra-ui/react';

export const firebaseAuthErrors = {
  'auth/email-already-in-use':
    'An account with this email address already exists. Please log in or use a different email address.',
  'auth/weak-password':
    'Your password should be at least 8 characters long and include a combination of letters, numbers, and special characters.',
  'auth/invalid-email': 'The email address you provided is not valid.',
  'auth/user-not-found':
    "We couldn't find an account associated with the provided email address. Please sign up or check your email spelling.",
  'auth/wrong-password':
    'The password you entered is incorrect. Please verify your password and try again.',
  'auth/too-many-requests':
    'Too many unsuccessful login attempts. Please try again later or reset your password.',
  'auth/network-request-failed':
    "We're experiencing network issues. Please check your internet connection and try again.",
  general:
    'An error occurred while processing your request. Please try again later.',
};

export type ErrorCode = keyof typeof firebaseAuthErrors;

interface FormAlertProps {
  status: AlertStatus;
  errorCode: ErrorCode;
}

export default function FormAlert({ status, errorCode }: FormAlertProps) {
  const errorMessage =
    firebaseAuthErrors[errorCode] || firebaseAuthErrors.general;

  return (
    <Alert status={status} variant="left-accent" fontSize={'smaller'}>
      <AlertIcon />
      <AlertDescription>{errorMessage}</AlertDescription>
    </Alert>
  );
}
