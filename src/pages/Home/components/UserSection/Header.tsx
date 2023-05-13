import { IUser } from '@/types/user';
import { getPokeballsLength } from '@/utils/userUtils';
import { Avatar } from '@mantine/core';
import CoinBadge from './CoinBadge';
import PokeballBadge from './PokeballBadge';

const Header = ({ user }: { user: IUser }) => {
  return (
    <div className='m-11 items-center justify-center gap-2 flex flex-wrap w-fit'>
      <Avatar size='xl' src={user.image} className='rounded-full' />
      <div className='flex items-start ml-6 justify-center gap-1 flex-col'>
        <h2
          className='text-gray-200 text-center mb-2 text-bold text-2xl font-bold'
          style={{ fontFamily: 'Poppins' }}
        >
          Welcome {user.username}
        </h2>
        <div className='flex flex-wrap gap-6'>
          <CoinBadge coins={user.coins} />
          <PokeballBadge pokeballs={getPokeballsLength(user.pokeballs ?? [])} />
        </div>
      </div>
    </div>
  );
};

export default Header;
