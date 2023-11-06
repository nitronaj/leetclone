import React from 'react';
import { AiOutlineFullscreen, AiOutlineSetting } from 'react-icons/ai';
import { Button, HStack, IconButton, Tooltip, useColorModeValue } from '@chakra-ui/react';

const PreferenceNav = () => {
  const bgColor = useColorModeValue('gray.10', 'transparrent');
  return (
    <HStack
      justifyContent={'space-between'}
      paddingBlock={0}
      h={'32px'}
      mb={'1px'}
      bg={bgColor}
      borderRadius={'lg'}
      px={1}
    >
      <Button size={'xs'}>Javascript</Button>
      <HStack spacing={1}>
        <Tooltip label="Settings" fontSize={'xs'}>
          <IconButton aria-label="Settings" icon={<AiOutlineSetting />} size={'xs'} fontSize={'lg'} />
        </Tooltip>
        <Tooltip label="Full Screen" fontSize={'xs'}>
          <IconButton aria-label="Full Screen" icon={<AiOutlineFullscreen />} size={'xs'} fontSize={'lg'} />
        </Tooltip>
      </HStack>
    </HStack>
  );
};

export default PreferenceNav;
