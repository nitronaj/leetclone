export function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsRemaining = seconds % 60;

  const formattedSeconds = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
    secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining
  }`;

  return formattedSeconds;
}
