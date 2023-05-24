import Background from '../Background';
import { HeaderMenu } from '../Header';
import { Sidebar } from '../Sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      <HeaderMenu/>
      <Background />
      <Sidebar />
      <div className='ml-[80px]'>{children}</div>
    </div>
  );
};

export default MainLayout;
