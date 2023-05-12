import { useState } from 'react';
import PriceImput from './PriceImput';
import { Button } from '@mantine/core';

const UseLovePotion = ({
  potionsCount,
  value,
  setValue, isLoading
}: {value: number;
  potionsCount: number;
}) => {
  return (
    <div className='w-fit flex flex-col gap-2'>
      <div
        className={`rounded-xl bg-pink-300 border-4 border-white cursor-pointer`}
      >
        <div className=''>
          <figure className='m-2 w-[50px] mx-auto'>
            <img
              src='https://res.cloudinary.com/dlekwh1wn/image/upload/v1683573100/love-potion.png'
              alt=''
              className='w-full'
            />
          </figure>
        </div>
        <div className='flex items-center justify-center mt-4 bg-white'>
          <span className='font-bold text-pink-900'>
            {potionsCount - value}
          </span>
        </div>
      </div>
      <PriceImput
      isLoading={isLoading}
        min={0}
        max={potionsCount}
        setValue={setValue}
        value={value}
      />
    </div>
  );
};

export default UseLovePotion;
