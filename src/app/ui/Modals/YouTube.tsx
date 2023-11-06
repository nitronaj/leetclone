import { Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';

import { mockProblems } from '@/mockProblems/problems';

export type YouTubeModalProps = {
  id: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function YouTubeModal({ id, isOpen, onClose }: YouTubeModalProps) {
  const { videoId = '', title = '' } = mockProblems.find((p) => p.id === id) ?? {};

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody py={0} px={0}>
          <Box
            as="iframe"
            src={`https://www.youtube.com/embed/${videoId}`}
            width="100%"
            allowFullScreen={true}
            sx={{
              aspectRatio: '16/9',
            }}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
