import React from 'react';
import { Code } from '@chakra-ui/react';

interface PreProps {
  children: React.ReactNode;
}

export const Pre: React.FC<PreProps> = ({ children }) => {
  return (
    <Code
      as={'pre'}
      fontSize={'xs'}
      py="0.5em"
      paddingLeft={4}
      my={4}
      borderRadius="sm"
      borderWidth="1px"
      whiteSpace="pre-wrap"
    >
      {children}
    </Code>
  );
};
