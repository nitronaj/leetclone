import { useEffect, useState } from 'react';
import { RepeatClockIcon, RepeatIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, useBoolean } from '@chakra-ui/react';

import { formatTime } from '@/utils/formatTime';

const Timer = () => {
  const [showTimer, setShowTimer] = useBoolean(false);
  const [time, setTime] = useState(0);

  const resetTimer = () => {
    setShowTimer.off();
    setTime(0);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (showTimer) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [showTimer]);

  return (
    <Flex alignItems={'center'}>
      <IconButton
        aria-label="Start Timer"
        variant={'ghost'}
        icon={<RepeatClockIcon />}
        colorScheme={time > 0 || showTimer ? 'twitter' : 'gray'}
        size={'sm'}
        onClick={setShowTimer.toggle}
      />
      {showTimer && (
        <Box w={'62px'} textAlign={'left'} fontSize={'sm'}>
          {formatTime(time)}
        </Box>
      )}
      {showTimer && (
        <IconButton aria-label="Stop Timer" variant={'ghost'} icon={<RepeatIcon />} size={'sm'} onClick={resetTimer} />
      )}
    </Flex>
  );
};

export default Timer;
