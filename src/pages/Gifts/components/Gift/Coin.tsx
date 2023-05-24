import React from 'react';

const Coin = () => {
  return (
    <div className='relative flex flex-col items-center justify-center rounded'>
      <figure className='w-[50px] h-[50px]  bg-gradient-to-t relative from-yellow-900 to-yellow-700  flex items-center justify-center rounded-b-md rounded'>
        <div className='absolute bg-contain bg-center bg-no-repeat z-0 inset-0 bg-[url("https://res.cloudinary.com/dlekwh1wn/image/upload/v1683845058/flower_1_zuxc3w.png")] rounded-2xl shadow-lg opacity-[1]'></div>
        <img
          src='https://i.seadn.io/gae/f5jYkHL3Rp5IwFdrCgnubHGrLo45Z8JCIU8AlKMI6Bw59HxrcW93FYmex0Lh1if0jQsRCutywG2tBSXLoTGbveVrt_oLdR6Nq2UJ?auto=format&w=1000'
          alt='gift'
          className='w-full p-2'
        />
      </figure>
    </div>
  );
};

export default Coin;
