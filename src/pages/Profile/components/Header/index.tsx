import { IUser } from '@/types/user';
import { getPokeballsLength, shortenQuantity } from '@/utils/userUtils';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Tooltip } from '@mantine/core';

const Header = ({ user, isFetching }: { user: IUser; isFetching: boolean }) => {
  const { username, image, coins } = user;
  return (
    <div
      className={`${
        isFetching && 'animate-pulse grayscale'
      } flex flex-col xl:flex-row items-center justify-center xl:items-start xl:justify-start gap-2`}
    >
      <Avatar
        className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-lg'
        src={image}
      />
      <div className='flex w-[80%] items-center justify-center xl:items-start xl:ml-6 gap-1 flex-col'>
        <h2
          className='text-gray-200 tex-center text-bold lg:text-2xl font-bold'
          style={{ fontFamily: 'Poppins' }}
        >
          {username}
        </h2>
        <div className='flex gap-6'>
          <Tooltip label='Coins'>
            <div className='flex text-gray-200 font-semibold text-lg items-center justify-center gap-2'>
              <FontAwesomeIcon icon={faCoins} />
              <h3 style={{ fontFamily: 'Poppins' }}>
                {shortenQuantity(coins)}
              </h3>
            </div>
          </Tooltip>

          <Tooltip label='Pokeballs'>
            <div className='flex items-center justify-center gap-1'>
              <img
                className='w-[26px] invert opacity-80'
                src='https://raw.githubusercontent.com/gist/Galadirith/baaf38c7286b568973cc50a50ff57f4d/raw/34d60cae491bc505c212398b94f12705665c12fc/pokeball.svg'
                alt='pokeball'
              />
              <h3
                style={{ fontFamily: 'Poppins' }}
                className='text-gray-200 font-semibold text-lg '
              >
                {shortenQuantity(getPokeballsLength(user.pokeballs))}
              </h3>
            </div>
          </Tooltip>
        </div>

        <h3
          style={{ fontFamily: 'Poppins' }}
          className='text-gray-300 tex-center lg:text-lg lg:max-w-[50%] xl:max-w-[100%] 2xl:max-w-[70%] mt-4'
        >
          {user.description ?? ''}
        </h3>
      </div>
    </div>
  );
};

export default Header;
