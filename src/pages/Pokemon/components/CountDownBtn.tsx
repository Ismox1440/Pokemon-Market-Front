import { useEffect, useState } from 'react';

const CountDownBtn = ({
  lastClaim,
}: {
  hoursDiff: number;
  lastClaim: Date;
}) => {
  const [timeRemaining, setTimeRemaining] = useState<number | string>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDiff = now.getTime() - lastClaim.getTime();
      const hoursDiff = timeDiff / 1000 / 60; // Convertir milisegundos a horas
      const nextClaim = Math.floor(60 - hoursDiff);
      setTimeRemaining(nextClaim);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [lastClaim]);
  return (
    <div className='text-gray-200 text-center mt-4'>{`Next claim in ${timeRemaining} Minutes`}</div>
  );
};

export default CountDownBtn;
