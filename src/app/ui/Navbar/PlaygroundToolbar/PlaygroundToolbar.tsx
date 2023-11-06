import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { IoPlay } from 'react-icons/io5';
import { Button, ButtonGroup } from '@chakra-ui/react';

const PlaygroundToolbar = () => {
  return (
    <ButtonGroup isAttached gap={0.5}>
      <Button leftIcon={<IoPlay />} size={'sm'}>
        Run
      </Button>
      <Button leftIcon={<AiOutlineCloudUpload />} size={'sm'}>
        Submit
      </Button>
    </ButtonGroup>
  );
};

export default PlaygroundToolbar;
