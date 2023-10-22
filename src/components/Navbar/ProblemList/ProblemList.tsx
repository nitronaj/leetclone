import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Spacer,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useParams, useRouter } from 'next/navigation';

import { MockProblem, mockProblems } from '@/mockProblems/problems';

import { difficultyColors } from '../../Problems/Problems';

interface ProblemListProps {}

const ProblemList: React.FC<ProblemListProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { pid } = useParams();
  const borderColor = useColorModeValue('gray.200', 'gray.900');
  const hoverColor = useColorModeValue('gray.200', 'gray.500');

  const selectedProblemColor = useColorModeValue('messenger.400', 'messenger.200');

  const handleClick = (pid: string) => () => {
    onClose();
    router.push(`/problems/${pid}`);
  };

  const ProblemList = mockProblems.map((problem: MockProblem, index) => {
    const difficultyColor = difficultyColors[problem.difficulty];

    return (
      <Box
        key={problem.id}
        alignItems={'center'}
        fontSize={'sm'}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={borderColor}
        cursor={'pointer'}
        _hover={{
          backgroundColor: hoverColor,
        }}
      >
        <Flex px={4} h={'52px'} alignItems={'center'} onClick={handleClick(problem.id)}>
          <CheckIcon color={'green.500'} boxSize={3} mr={2} />

          <Text fontWeight={500} color={pid === problem.id ? selectedProblemColor : ''}>
            {index + 1}. {problem.title}
          </Text>

          <Spacer />
          <Text color={difficultyColor} alignItems={'self-end'}>
            {problem.difficulty}
          </Text>
        </Flex>
      </Box>
    );
  });

  return (
    <>
      <Box>
        <HStack spacing={1}>
          <Button size={'sm'} variant={'ghost'} onClick={onOpen}>
            <Icon as={AiOutlineMenuUnfold} boxSize={5} />
            <Text ml={2}>Problem List</Text>
          </Button>
          <Tooltip label="Prev Question" fontSize={'xs'}>
            <IconButton aria-label="Prev Problem" icon={<FaChevronLeft />} size={'sm'} variant={'ghost'} />
          </Tooltip>
          <Tooltip label="Next Question" fontSize={'xs'}>
            <IconButton aria-label="Next Problem" icon={<FaChevronRight />} size={'sm'} variant={'ghost'} />
          </Tooltip>
        </HStack>
      </Box>

      <Drawer placement="left" isOpen={isOpen} onClose={onClose} size={'md'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link as={NextLink} href="/problems" fontSize={'lg'} isExternal display="flex" alignItems="center">
              Problem List
              <Icon as={FiChevronRight} boxSize={5} />
            </Link>
          </DrawerHeader>
          <Divider />

          <DrawerBody>
            <Box>
              <Text fontSize={'sm'} fontWeight={600}>
                Recommend:
              </Text>
              <Stack
                mt={4}
                border={1}
                borderRadius={10}
                borderStyle={'solid'}
                borderColor={borderColor}
                gap={0}
                overflow={'hidden'}
              >
                {ProblemList}
              </Stack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProblemList;
