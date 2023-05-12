import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UnstyledButton } from '@mantine/core';
import React, { useState } from 'react';
import Gift from './Gift';
import { baseURL } from '../../../../api/api';
import { mutate } from 'swr';
import { toast } from 'sonner';

const FirstDay = ({ gifts, user }) => {
  const [loading, setLoading] = useState(false);
  const handleClaim = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${baseURL}user/claimdailygift`, {
        method: 'POST',
        body: JSON.stringify({ user_id: user._id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      toast.success('Claimed');
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className={`${
        user.giftIndex !== 0 && 'grayscale'
      } h-[500px] group  transition-all cursor-pointer border-gray-700 relative flex flex-col items-center justify-center rounded-md`}
    >
      <h3 className='text-gray-200 text-3xl mb-11'>Day 1</h3>
      <div className='flex relative gap-4'>
        {gifts.map(gift => {
          return <Gift gift={gift} />;
        })}
      </div>
      {user.giftIndex === 0 && (
        <UnstyledButton
          disabled={loading}
          onClick={handleClaim}
          style={{ fontFamily: 'Genshin-Regular' }}
          className={`${
            loading && 'cursor-not-allowed grayscale'
          } font-bold cursor-pointer mt-6 bg-[#EAE6D7] flex gap-2 items-center justify-center hover:scale-105 transition-all text-[#4E5668] p-2 px-20 rounded-full`}
        >
          <FontAwesomeIcon color='green' icon={faPlusCircle} />
          Claim
        </UnstyledButton>
      )}
    </div>
  );
};

export default FirstDay;
