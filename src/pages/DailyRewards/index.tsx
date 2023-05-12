import React from 'react';
import { Subgrid } from './components/Subgrid';
import { Sidebar } from '../../components/Sidebar';
import useUser from '../../hooks/useUser';

const DailyRewards = () => {
  const {user} = useUser()
  console.log(user, '3################')
  if(!user) return
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <figure className='block overflow-hidden pt-[36%] absolute top-0 left-0 w-full z-1'>
        <div className='-z-1 bg-[url("https://assets.codepen.io/13471/sparkles.gif")] bg-repeat bg-center absolute shadow-[inset_-0px_-700px_900px_#111010] top-0 left-0 right-0 w-full h-full object-cover block'></div>
      </figure>

      <div className='w-full relative mt-40 '>
        <div className='flex items-center justify-center mb-11 gap-4'>
          <h3
            className=' text-gray-200 text-6xl  font-bold'
            style={{ fontFamily: 'Genshin-Regular' }}
          >
            Daily Rewards
          </h3>

          <img
            className=' max-w-[100px]'
            src='https://res.cloudinary.com/dlekwh1wn/image/upload/v1683075187/pokemoncoins.png'
            alt=''
          />
        </div>
        <Subgrid user={user}/>
      </div>
      {/* <figure>
          <img
            src='https://github.com/PokeAPI/sprites/blob/master/sprites/items/net-ball.png?raw=true'
            alt=''
          />
        </figure> */}
    </div>
  );
};

export default DailyRewards;
