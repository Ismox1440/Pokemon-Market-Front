import { Indicator } from '@mantine/core';
import { IconLockOpen } from '@tabler/icons-react';
import Item from './Item';
import Coin from './Coin';
import { Gift, GiftDay } from '@/types';

const GiftClaimed = ({ gift }: { gift: GiftDay }) => {
  return (
    <Indicator
      processing
      className={`brightness-50 border-2 w-full border-[#d6d7ca] flex flex-col sm:flex-row items-center sm:justify-between bg-[#F4F1EA] rounded mx-auto`}
      label='!'
      size={16}
      color='red'
      disabled
    >
      <div className='absolute w-full h-full flex items-center justify-center'>
        <IconLockOpen className='text-title' />
      </div>

      <div className='flex flex-col items-center justify-center sm:items-start sm:justify-start w-fit mx-4 gap-1'>
        <span className='text-[#5f5f5e]'>Day {gift.day}</span>
        <div className='text-[#85603c] flex items-center justify-center gap-1'>
          <span>Claimed</span>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-center h-full'>
        <div className='flex gap-2'>
          {gift.coins > 0 && <Coin />}
          {gift.gifts.map((g: Gift) => (
            <Item itemImage={g.giftItem.image} />
          ))}
        </div>
        <div className='flex items-center p-4 ml-4 justify-center lg:bg-[#eae2d9]'>
          <button
            disabled
            className='text-gray-200 text-sm bg-[#b95b49] px-6 py-2 border-2 border-[#b35747] rounded-lg'
          >
            Claimed
          </button>
        </div>
      </div>
    </Indicator>
  );
};

export default GiftClaimed;
