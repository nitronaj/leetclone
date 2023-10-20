import { useEffect, useState } from 'react';
import { RepeatClockIcon, RepeatIcon } from '@chakra-ui/icons';
import { Box, ButtonGroup, IconButton, useBoolean } from '@chakra-ui/react';

import { formatTime } from '@/utils/formatTime';

const Timer = () => {
  const [showTimer, setShowTimer] = useBoolean(false);
  const [startTimer, setStartTimer] = useBoolean(false);
  const [time, setTime] = useState(0);

  const resetTimer = () => {
    setShowTimer.off();
    setStartTimer.off();
    setTime(0);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (startTimer) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [startTimer]);

  return (
    <ButtonGroup size="sm" isAttached variant="ghost" alignItems={'center'} spacing={1}>
      <IconButton
        aria-label="Start Timer"
        icon={<RepeatClockIcon />}
        colorScheme={time > 0 || showTimer ? 'twitter' : 'gray'}
        size={'sm'}
        onClick={() => {
          setShowTimer.toggle();
          setStartTimer.on();
        }}
      />
      {showTimer && (
        <Box w={'62px'} textAlign={'left'} fontSize={'sm'}>
          {formatTime(time)}
        </Box>
      )}
      {showTimer && (
        <IconButton aria-label="Stop Timer" variant={'ghost'} icon={<RepeatIcon />} size={'sm'} onClick={resetTimer} />
      )}
    </ButtonGroup>
  );
};

export default Timer;
