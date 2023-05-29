import { Pokemon } from '@/types';
import { Pagination } from '@mantine/core';
import { CardPokemon } from '@/components';

const PokedexPagination = ({
  pages,
  currentPage,
  handleSelect,
}: {
  pages: number;
  currentPage: number;
  handleSelect: Function;
}) => {
  const handleChange = (e: number) => {
    handleSelect(e, 'page');
  };
  return (
    <Pagination
      className='mt-6'
      onChange={handleChange}
      value={currentPage}
      total={pages}
    />
  );
};

const PokemonCardList = ({
  pokemons,
  handleSelect,
  pages,
  currentPage,
}: {
  handleSelect: Function;
  pages: number;
  currentPage: number;
  pokemons: Pokemon[];
}) => {
  return (
    <div className='rounded-xl'>
      <div className='flex flex-wrap mx-auto items-center justify-center'>
        {pokemons.length > 0 ? (
          pokemons.map(pokemon => (
            <CardPokemon
              key={pokemon._id}
              classNames='m-[10px]'
              pokemon={pokemon}
            />
          ))
        ) : (
          <div
            style={{ fontFamily: 'Poppins' }}
            className='text-center my-40 text-3xl text-gray-500 font-bold'
          >
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
