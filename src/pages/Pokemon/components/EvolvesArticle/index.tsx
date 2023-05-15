import PokemonCard from '@/components/CardPokemon';
import { IPokemon } from '@/types/pokemon';

const EvolvesArticle = ({ pokemon }: { pokemon: IPokemon }) => {
  return (
    <div className='flex flex-wrap gap-6'>
      {pokemon.evolvesFrom && (
        <div className='mt-4'>
          <h2 className='text-gray-500 mb-2 text-center font-extrabold uppercase text-2xl'>
            Evolves From
          </h2>

          <PokemonCard pokemon={pokemon.evolvesFrom} />
        </div>
      )}
      {pokemon.evolvesTo && pokemon.evolvesTo.length > 0 && (
        <div className='mt-4'>
          <h2 className='text-gray-500 mb-2 text-center font-extrabold uppercase text-2xl'>
            Evolves To
          </h2>
          <div className=' flex gap-2 flex-wrap mx-auto'>
            {pokemon.evolvesTo?.map(evolvesTo => (
              <PokemonCard pokemon={evolvesTo} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EvolvesArticle;
