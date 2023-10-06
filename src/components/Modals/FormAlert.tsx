import { Alert, AlertDescription, AlertIcon, AlertStatus } from '@chakra-ui/react';

export const registrationErrors = {
  'auth/email-already-in-use':
    'An account with this email address already exists. Please log in or use a different email address.',
  'auth/weak-password':
    'Your password should be at least 8 characters long and include a combination of letters, numbers, and special characters.',
  'auth/invalid-email': 'The email address you provided is not valid.',
};

export type RegistrationErrorType = keyof typeof registrationErrors;

interface FormAlertProps {
  status: AlertStatus;
  errorType: RegistrationErrorType;
}

export default function FormAlert({ status, errorType }: FormAlertProps) {
  return (
    <Alert status={status} variant="left-accent" fontSize={'smaller'}>
      <AlertIcon />
      <AlertDescription>{registrationErrors[errorType]}</AlertDescription>
    </Alert>
  );
}
