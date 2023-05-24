import MainLayout from '../MainLayout';

const LoadingScreen = () => {
  return (
    <MainLayout>
      <div className='flex items-center justify-center h-screen'>
        <img
          src='https://cdn.icon-icons.com/icons2/2603/PNG/512/poke_ball_icon_155925.png'
          alt=''
          className='w-[60px] mx-auto animate-pulse'
        />
      </div>
    </MainLayout>
  );
};

export default LoadingScreen;
