import { Button } from '@mantine/core';
import usePokemons from '../../hooks/usePokemons';
import {
  SelectOrder,
  SelectSort,
  SelectRarity,
  SelectType,
} from './components';
import useHandleSelect from '../../hooks/useHandleSelect';
import LoadingCardList from './containers/LoadingCardList';
import PokemonCardList from './containers/PokemonCardList';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import SearchInput from './components/SearchInput';
import PokemonQueryFilter from './containers/PokemonQueryFilter';
import { Sidebar } from '../../components/Sidebar';
import { useEffect } from 'react';

const Pokedex = () => {
  const location = useLocation();
  const { trigger: handleSelect, navigate } = useHandleSelect();
  const { isLoading, pokemons, info, error } = usePokemons(location.search);
  const { type, order, sort, rarity, page, name } = queryString.parse(
    location.search
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.search])
  return (
    <div className='h-auto  items-center justify-center'>
      <Sidebar />
      <div className='flex flex-col bg-gray-900 gap-6'>

      <h2 className='text-6xl font-bold text-gray-300 text-center mt-11'>
        Pokedex
      </h2>
      <p className='text-gray-400 text-center max-w-[50%] mx-auto'>
        On this page, you can search for all the Pokémon that exist in the
        database, as well as apply different filters and sorting options.
      </p>

      {error && (
        <div className='text-center my-40 text-8xl text-gray-500 font-bold'>
          Error
        </div>
      )}
      <div className='px-40'>
      <PokemonQueryFilter  customQuery='' />
      </div>
      </div>
    </div>
  );
};

export default Pokedex;
