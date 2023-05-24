import { MainLayout } from '@/components';
import UserSection from './components/UserSection';

const Top = () => {
  return (
    <MainLayout>
      <div className='mt-40 flex items-center flex-col gap-8 justify-center'>
        <div>
          <h1 className='lg:text-5xl text-3xl text-center font-bold text-title'>
            Top Users
          </h1>
          <h2
            style={{ fontFamily: 'Poppins' }}
            className='text-gray-300 text-center mt-6'
          >
            Here you will find the top 10 users with the most coins or
            statistics.
          </h2>
        </div>
        <UserSection />
      </div>
    </MainLayout>
  );
};

export default Top;
