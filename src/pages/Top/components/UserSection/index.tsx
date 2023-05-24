import User from './User';
import { IconCoins } from '@tabler/icons-react';
import { IconDeviceAnalytics } from '@tabler/icons-react';
import { useGetTopUserQuery } from '@/redux/api/userEndpoint';
import { LoadingScreen } from '@/components';

const UserSection = () => {
  const { data, isFetching } = useGetTopUserQuery();
  if (isFetching || !data) return <LoadingScreen />;

  return (
    <div>
      <div className='mt-11 flex flex-col md:flex-row gap-6'>
        <div className='border border-secondary rounded p-6'>
          <h3 className='text-title flex items-center justify-center text-center gap-1 mb-6'>
            <IconCoins />
            Top Coins
          </h3>
          {data.topCoins.map((user, index) => (
            <User index={index + 1} user={user} />
          ))}
        </div>
        <div className='border border-secondary rounded p-6'>
          <h3 className='text-title flex items-center justify-center text-center gap-1 mb-6'>
            <IconDeviceAnalytics />
            Top Stats
          </h3>
          {data.topStats.map((user, index) => (
            <User index={index + 1} stats={user.totalStats} user={user.user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserSection;
