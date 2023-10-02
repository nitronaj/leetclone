import { Modal, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { authModalState } from '@/atoms/authModelAtom';

import Login from './Login';
import ResetPassword from './ResetPassword';
import SignUp from './Signup';

export default function AuthModal() {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const [{ type }, setAuthModalState] = useRecoilState(authModalState);

  const handleCloseModal = () => {
    onClose();
    setAuthModalState((prev) => ({ ...prev, isOpen: false, type: 'login' }));
  };

  let AuthModalTypeComponent = null;
  switch (type) {
    case 'forgotPassword':
      AuthModalTypeComponent = ResetPassword;
      break;
    case 'register':
      AuthModalTypeComponent = SignUp;
      break;
    default:
      AuthModalTypeComponent = Login;
      break;
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent boxShadow={'lg'}>
          <ModalCloseButton />
          <AuthModalTypeComponent />
        </ModalContent>
      </Modal>
    </>
  );
}
