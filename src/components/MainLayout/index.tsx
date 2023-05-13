import Background from '../Background';
import { Sidebar } from '../Sidebar';

const MainLayout = ({
  children,
  backgroundImage,
}: {
  children: React.ReactNode;
  backgroundImage?: string;
}) => {
  return (
    <div className='bg-gray-900 h-full'>
      {backgroundImage && <Background image={backgroundImage} />}
      <Sidebar />
      <div className='ml-[80px]'>{children}</div>
    </div>
  );
};

export default MainLayout;
