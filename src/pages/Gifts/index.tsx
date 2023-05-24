import MainLayout from '@/components/MainLayout';
import useUser from '@/hooks/useUser';
import Gift from './components/Gift';
import GiftClaimed from './components/Gift/GiftClaimed';
import { useGetGiftWeekQuery } from '@/redux/api/weekGiftEndpoint';
import LoadingScreen from '@/components/LoadingScreen';

const Gifts = () => {
  const { user, isLoading: loadingUser, isFetching } = useUser();
  const { data, isLoading } = useGetGiftWeekQuery();
  if (isLoading || loadingUser || !user) return <LoadingScreen />;
  return (
    <MainLayout>
      <div className={`${isFetching && 'animate-pulse'} w-full relative mt-40`}>
        <div className='flex items-center justify-center mb-11 gap-4'>
          <h3
            className='text-title text-3xl lg:text-6xl  font-bold'
            style={{ fontFamily: 'Genshin-Regular' }}
          >
            Daily Rewards
          </h3>
        </div>
        <div className='flex md:w-[90%] lg:w-[50%] 2xl:w-[40%] flex-col gap-6 mx-auto'>
          {data &&
            data.days.map(gift => {
              if (user.giftIndex > gift.day)
                return <GiftClaimed key={gift.day} gift={gift} />;
              return <Gift key={gift.day} user={user} gift={gift} />;
            })}
        </div>
      </div>
    </MainLayout>
  );
};

export default Gifts;
