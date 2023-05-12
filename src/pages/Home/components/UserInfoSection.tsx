import { Avatar, Skeleton } from '@mantine/core';
import PokemonCard from './PokemonCard';
import useUser from '../../../hooks/useUser';
import { userPokeball } from '../../../types/user';
import UserInfoLoader from './UserInfoLoader';
import { IPokemon } from '../../../types/pokemon';

const UserInfoSection = () => {
  const { user, isLoading } = useUser();

  console.log(user, 'user')
  if (!user || isLoading) return <UserInfoLoader />;
  const getPokeballsLength = (pokeballsArr: userPokeball[]) => {
    let total = 0;
    pokeballsArr.forEach(item => {
      total += item.count;
    });
    return total;
  };
  console.log(user)
  return (
    <section className='relative bg-gray-900 bg-opacity-80 backdrop-blur rounded-xl border-2 border-gray-700'>
      <div className='m-11 flex w-fit'>
        <Avatar size='xl' src={user.image} className='rounded-full' />
        <div className='flex items-start ml-6 justify-center gap-1 flex-col'>
          <h2
            className='text-gray-200 text-bold text-2xl font-bold'
            style={{ fontFamily: 'Poppins' }}
          >
            Welcome {user?.username}
          </h2>
          <div className='flex gap-6'>
            <div className='flex items-center justify-center gap-1'>
              <img
                className='w-[32px]'
                src='https://res.cloudinary.com/dlekwh1wn/image/upload/v1683150069/rank-12.png'
                alt=''
              />
              <h3
                className='text-gray-200 font-semibold text-lg'
                style={{ fontFamily: 'Genshin-regular' }}
              >
                2.2M
              </h3>
            </div>
            <div className='flex items-center justify-center gap-1'>
              <img
                className='w-[32px]'
                src='https://i.seadn.io/gae/f5jYkHL3Rp5IwFdrCgnubHGrLo45Z8JCIU8AlKMI6Bw59HxrcW93FYmex0Lh1if0jQsRCutywG2tBSXLoTGbveVrt_oLdR6Nq2UJ?auto=format&w=1000'
                alt=''
              />
              <h3
                className='text-gray-200 font-semibold text-lg'
                style={{ fontFamily: 'Genshin-regular' }}
              >
                {user?.coins}
              </h3>
            </div>
            <div className='flex items-center justify-center gap-1'>
              <img
                className='w-[32px]'
                src='https://media.forgecdn.net/avatars/568/368/637929623537457420.png'
                alt=''
              />
              <h3
                className='text-gray-200 font-semibold text-lg'
                style={{ fontFamily: 'Genshin-regular' }}
              >
                {getPokeballsLength(user?.pokeballs ?? [])}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-10'>
        <div className='p-[1rem] my-5 rounded-lg'>
          <h3
            style={{ fontFamily: 'Poppins' }}
            className='text-xl text-center my-6 text-gray-200 font-bold'
          >
            Last obtained Pokemons
          </h3>
          <div className='flex flex-wrap items-center justify-evenly'>
            {user.pokemons.slice(-2).map((pokemon: IPokemon) => (
              <PokemonCard pokemon={pokemon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfoSection;
