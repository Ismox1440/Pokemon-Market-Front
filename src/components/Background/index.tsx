import { backgroundPages } from '@/config/backgrounds';
import { useLocation } from 'react-router-dom';

const Background = () => {
  const path = useLocation();
  const bg = backgroundPages[path.pathname as keyof typeof backgroundPages];
  return (
    <div
      className={`bgWithShadow ${bg} bg-cover  h-[66.6vh] left-0 opacity-[0.2] pointer-events-none fixed w-screen top-0 -z-1`}
    ></div>
  );
};

export default Background;
