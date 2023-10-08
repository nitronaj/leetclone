import React from 'react';
import {
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from '@chakra-ui/react';

export const LoadingSkeleton = ({
  isLoaded,
  children,
}: {
  isLoaded?: boolean;
  children?: React.ReactNode;
}) => (
  <Skeleton isLoaded={isLoaded} fadeDuration={4}>
    {children ? (
      children
    ) : (
      <Box py={{ base: 16, md: 20 }}>
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="4" />
      </Box>
    )}
  </Skeleton>
);
