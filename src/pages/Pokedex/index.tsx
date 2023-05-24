import { PokemonQueryFilter } from '@/components';
import MainLayout from '@/components/MainLayout';
const Pokedex = () => {
  return (
    <MainLayout>
      <div className='flex relative mt-11 flex-col gap-6'>
        <h2 className=' text-4xl md:text-6xl font-bold text-title text-center mt-11'>
          Pokedex
        </h2>
        <p className='text-gray-400 text-center max-w-[90%] md:max-w-[50%] mx-auto'>
          On this page, you can search for all the Pokémon that exist in the
          database, as well as apply different filters and sorting options.
        </p>
        <div className='px-2 md:px-40'>
          <PokemonQueryFilter customQuery='defaultPokemon=true' />
        </div>
      </div>
    </MainLayout>
  );
};

export default Pokedex;
