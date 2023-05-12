import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UnstyledButton } from '@mantine/core';
import React from 'react';
import Gift from './Gift';

const LastDay = ({ gifts, user }) => {
  return (
    <div
      className={` ${user.giftIndex !== 7  && 'grayscale'} h-[500px] group  transition-all cursor-pointer border-gray-700 relative flex flex-col items-center justify-center rounded-md`}
    >
      <h3 className='text-gray-200 text-3xl mb-11'>Day 7</h3>
      <div className='flex relative gap-4'>
        {gifts.map(gift => {
          return (
            <Gift gift={gift}/>
          );
        })}
      </div>
     {user.giftIndex === 7 && <UnstyledButton
        style={{ fontFamily: 'Genshin-Regular' }}
        className='font-bold cursor-pointer mt-6 bg-[#EAE6D7] flex gap-2 items-center justify-center hover:scale-105 transition-all text-[#4E5668] p-2 px-20 rounded-full'
      >
        <FontAwesomeIcon color='green' icon={faPlusCircle} />
        Claim
      </UnstyledButton>}
    </div>
  );
};

export default LastDay;
