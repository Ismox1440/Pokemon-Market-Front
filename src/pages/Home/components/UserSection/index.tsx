import PokemonCard from '@/components/CardPokemon';
import { IPokemon } from '@/types/pokemon';
import UserInfoLoader from './Loading';
import Header from './Header';
import { ScrollArea } from '@mantine/core';
import useUser from '@/hooks/useUser';

const UserInfoSection = () => {
  const {user, isLoading} = useUser()
  if (!user || isLoading) return <UserInfoLoader />;
  return (
    <section>
      <ScrollArea.Autosize mah={700}>
        <Header user={user} />
        <div className='p-[1rem] my-5 rounded-lg'>
          <h3
            style={{ fontFamily: 'Poppins' }}
            className='text-xl text-center my-6 text-gray-200'
          >
            Last obtained Pokemons
          </h3>
          <div className='flex flex-wrap gap-2 items-center justify-center'>
            {user.pokemons.slice(-2).map((pokemon: IPokemon) => (
              <PokemonCard key={pokemon._id} pokemon={pokemon} />
            ))}
          </div>
        </div>
      </ScrollArea.Autosize>
    </section>
  );
};

export default UserInfoSection;
