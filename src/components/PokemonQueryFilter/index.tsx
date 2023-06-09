import { useLocation } from 'react-router-dom';
import useHandleSelect from '@/hooks/useHandleSelect';
import usePokemons from '@/hooks/usePokemons';
import queryString from 'query-string';
import { Button } from '@mantine/core';
import LoadingCardList from './LoadingCardList';
import PokemonCardList from './PokemonCardList';
import SelectType from './SelectType';
import SelectRarity from './SelectRarity';
import SearchInput from './SearchInput';
import SelectSort from './SelectSort';
import SelectOrder from './SelectOrder';

const PokemonQueryFilter = ({ customQuery }: { customQuery?: string }) => {
  const location = useLocation();
  const { trigger: handleSelect, navigate } = useHandleSelect();
  customQuery = location.search.includes('?')
    ? `&${customQuery}`
    : `?${customQuery}`;
  const { isLoading, pokemons, info, error } = usePokemons(
    location.search + customQuery
  );
  const { type, order, sort, rarity, page, name } = queryString.parse(
    location.search
  );
  return (
    <div className='mb-6'>
      <div className='px-11 w-[90%] mx-auto  mt-11'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
          <div className='flex flex-col xl:flex-row gap-4'>
            <SelectType
              handleSelect={handleSelect}
              currentType={typeof type === 'string' ? type : null}
            />
            <SelectRarity
              handleSelect={handleSelect}
              currentRarity={typeof rarity === 'string' ? rarity : undefined}
            />
          </div>
          <SearchInput
            name={typeof name === 'string' ? name : ''}
            handleSelect={handleSelect}/>
          <div className='flex flex-col xl:flex-row gap-4'>
            <SelectSort
              currentSort={typeof sort === 'string' ? sort : null}
              handleSelect={handleSelect}
            />
            <SelectOrder
              currentOrder={typeof order === 'string' ? order : null}
              handleSelect={handleSelect}
            />
          </div>
        </div>
        <div className='flex flex-col mt-4 justify-center items-center'>
          {location.search.length > 0 && (
            <Button
              onClick={() => {
                navigate(location.pathname);
              }}
              variant='default'
            >
              Reset Filters
            </Button>
          )}
        </div>
      </div>
      {error && (
        <div className='text-center my-40 text-8xl text-gray-500 font-bold'>
          Error
        </div>
      )}
      {isLoading === true && <LoadingCardList />}
      {isLoading === false && pokemons && (
        <PokemonCardList
          handleSelect={handleSelect}
          pages={info?.pages}
          currentPage={Number(page) ? Number(page) : 1}
          pokemons={pokemons}
        />
      )}
    </div>
  );
};

export default PokemonQueryFilter;
