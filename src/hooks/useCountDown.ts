import { useEffect, useState } from 'react';

const useCountDown = ({
  targetDate,
  diffHours = 1,
}: {
  diffHours: number;
  targetDate: Date;
}) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDiff = now.getTime() - targetDate.getTime();
      const hoursDiff = timeDiff / 1000 / 60 / 60;
      const nextClaim = Math.ceil(diffHours - hoursDiff);
      setTimeRemaining(nextClaim);
    }, 1000);

    if (timeRemaining <= 0) {
      setTimeRemaining(0);
    }

    return () => clearInterval(intervalId);
  }, [targetDate]);
  return { timeRemaining };
};

export default useCountDown;
