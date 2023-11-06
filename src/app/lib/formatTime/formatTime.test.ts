import { formatTime } from './formatTime'; // Replace 'your-module' with the actual module path.

describe('formatTime', () => {
  it('formats seconds into HH:MM:SS format (less than one hour)', () => {
    const seconds = 65; // 1 minute and 5 seconds
    expect(formatTime(seconds)).toBe('00:01:05');
  });

  it('formats seconds into HH:MM:SS format (one hour)', () => {
    const seconds = 3605; // 1 hour, 5 seconds
    expect(formatTime(seconds)).toBe('01:00:05');
  });

  it('formats seconds into HH:MM:SS format (multiple hours)', () => {
    const seconds = 3725; // 1 hour, 2 minutes, 5 seconds
    expect(formatTime(seconds)).toBe('01:02:05');
  });

  it('formats seconds into HH:MM:SS format (zero seconds)', () => {
    const seconds = 0; // 0 seconds
    expect(formatTime(seconds)).toBe('00:00:00');
  });

  it('formats seconds into HH:MM:SS format (large value)', () => {
    const seconds = 36665; // 10 hours, 11 minutes, 5 seconds
    expect(formatTime(seconds)).toBe('10:11:05');
  });
});
