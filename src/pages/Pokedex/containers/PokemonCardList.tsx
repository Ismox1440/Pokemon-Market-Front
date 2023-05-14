import PokemonCard from '@/components/CardPokemon';
import { IPokemon } from '../../../types/pokemon';
import { PokedexPagination } from '../components';

const PokemonCardList = ({
  pokemons,
  handleSelect,
  pages,
  currentPage,
}: {
  handleSelect: Function;
  pages: number;
  currentPage: number;
  pokemons: IPokemon[];
}) => {
  return (
    <div className='rounded-xl'>
      <div className='flex flex-wrap mx-auto items-center justify-center'>
        {pokemons.length > 0 ? (
          pokemons.map(pokemon => <PokemonCard key={pokemon._id} classNames='m-[10px]' pokemon={pokemon} />)
        ) : (
          <div className='text-center text-3xl text-gray-500 font-bold'>
            No Pokemon Found
          </div>
        )}
      </div>
      <div className='flex items-center justify-center'>
        <PokedexPagination
          currentPage={currentPage}
          handleSelect={handleSelect}
          pages={pages}
        />
      </div>
    </div>
  );
};

export default PokemonCardList;
