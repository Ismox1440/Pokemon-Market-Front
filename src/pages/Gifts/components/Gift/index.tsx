import { Indicator } from '@mantine/core';
import { IconAlarm } from '@tabler/icons-react';
import Coin from './Coin';
import Item from './Item';
import { GiftDay,User } from '@/types/';
import useCountDown from '@/hooks/useCountDown';
import { useClaimGiftMutation } from '@/redux/api/userEndpoint';

const Gift = ({ gift, user }: { user: User; gift: GiftDay }) => {
  const lastGiftDate = new Date(user.lastGiftDate);
  const { timeRemaining } = useCountDown({
    targetDate: lastGiftDate,
    diffHours: 24,
  });
  const now = new Date();
  const timeDiff = (now.getTime() - lastGiftDate.getTime()) / 1000 / 60 / 60;
  const [trigger, { isLoading }] = useClaimGiftMutation();

  return (
    <Indicator
      processing
      className={`border-2 w-full border-[#d6d7ca] flex flex-col sm:flex-row items-center sm:justify-between bg-[#F4F1EA] rounded mx-auto`}
      label='!'
      size={16}
      color='red'
      disabled={user.giftIndex - gift.day !== 0}
    >
      <div className='flex flex-col items-center justify-center sm:items-start sm:justify-start w-fit mx-4 gap-1'>
        <span className='text-[#5f5f5e]'>Day {gift.day}</span>
        <div className='text-[#85603c] flex items-center justify-center gap-1'>
          <IconAlarm />
          {user.giftIndex - gift.day === 0 ? (
            <span className=''>
              {timeDiff < 24 ? `Available in ${timeRemaining}h` : 'Available'}
            </span>
          ) : (
            <span>Unavailable</span>
          )}
        </div>
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-center h-full'>
        <div className='flex gap-2'>
          {gift.coins > 0 && <Coin />}
          {gift.gifts.map(g => (
            <Item itemImage={g.giftItem.image} />
          ))}
        </div>
        <div className='flex items-center p-4 ml-4 justify-center sm:bg-[#eae2d9]'>
          <button
            onClick={() => trigger(user)}
            disabled={
              user.giftIndex - gift.day !== 0 || timeDiff < 24 || isLoading
            }
            className={`${
              user.giftIndex - gift.day !== 0 || timeDiff < 24
                ? 'cursor-not-allowed grayscale'
                : 'cursor-pointer'
            } ${
              isLoading && ' brightness-50'
            } text-gray-200 text-sm bg-[#b95b49] px-6 py-2 border-2 border-[#b35747] rounded-lg`}
          >
            {isLoading ? 'Claiming' : 'Claim'}
          </button>
        </div>
      </div>
    </Indicator>
  );
};

export default Gift;
