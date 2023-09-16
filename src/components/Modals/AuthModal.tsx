import { Modal, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
};

export default function AuthModal({ children }: Props) {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent boxShadow={'lg'}>
          <ModalCloseButton />
          {children}
        </ModalContent>
      </Modal>
    </>
  );
}
