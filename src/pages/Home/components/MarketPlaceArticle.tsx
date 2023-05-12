import React from 'react';
import { Link } from 'react-router-dom';

const MarketPlace = () => {
  return (
    <Link to='/market'>
    <article
      className={`flex mx-2 flex-col justify-end rounded-2xl border-2 hover:border-gray-200 transition-all cursor-pointer border-gray-700 shadow-[inset_-0px_-200px_190px_#111010] bg-cover  relative h-[292px] w-full bg-gray-200 bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0906b988-7e73-42cc-9161-23f7d070a0e0/dfbalfl-a695036e-9ca4-4894-b213-f309c47c0bf3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA5MDZiOTg4LTdlNzMtNDJjYy05MTYxLTIzZjdkMDcwYTBlMFwvZGZiYWxmbC1hNjk1MDM2ZS05Y2E0LTQ4OTQtYjIxMy1mMzA5YzQ3YzBiZjMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.t2yNydwX1tn0UEtp0gHdHBFJdZjg59R-MpEZNdUmuYs')]`}
    >
      <div className='mx-6 mb-6'>
        <h3 className='text-5xl text-gray-200 font-bold'>P2P Market</h3>
        <h4 className='text-gray-300 text-md'>
          Explore a P2P Pokemon market where you can buy and sell rare and
          powerful Pokemon to enhance your team. Click here to browse the
          marketplace and level up your Pokemon game
        </h4>
      </div>
    </article>
    </Link>
  );
};

export default MarketPlace;
