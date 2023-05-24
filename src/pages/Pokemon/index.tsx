import { useParams } from 'react-router-dom';
import useUser from '@/hooks/useUser';
import { useGetPokemonQuery } from '@/redux/api/pokemonEndpoint';
import { LoadingScreen, MainLayout } from '@/components/';
import {
  StatsArticle,
  SaleArticle,
  PokemonSection,
  EvolvesArticle,
  LevelArticle,
} from './components';
import { ScrollArea } from '@mantine/core';

const Pokemon = () => {
  const { _id } = useParams();
  const { data: pokemon, isLoading } = useGetPokemonQuery(_id ?? '');
  const { user, isLoading: loadingUser } = useUser();
  if (isLoading || loadingUser || !pokemon || !user) return <LoadingScreen />;
  console.log(pokemon)
  return (
    <MainLayout>
      <div className='xl:px-20 my-11 gap-40 xl:gap-0 mx-auto flex flex-col xl:flex-row xl:justify-evenly'>
        <PokemonSection pokemon={pokemon} user={user} />
        <ScrollArea className='xl:w-2/4 relative z-50 px-2 h-[90vh]'>
          <SaleArticle pokemon={pokemon} user={user} />
          <LevelArticle user={user} pokemon={pokemon} />
          <StatsArticle pokemon={pokemon} />
          <EvolvesArticle pokemon={pokemon} />
        </ScrollArea>
      </div>
      {pokemon.isLegendary && (
        <div className='absolute -z-1 bg-repeat inset-0 bg-[url("https://assets.codepen.io/13471/sparkles.gif")] rounded-lg shadow-lg opacity-5'></div>
      )}{' '}
      {pokemon.isMythical && (
        <div className='absolute bg-cover inset-0 bg-[url("https://66.media.tumblr.com/c3d171f2c27802035772177cb2d8765a/tumblr_ola6bsBBNC1rt67t1o2_r2_400.gif")] rounded-lg shadow-lg opacity-[0.009]'></div>
      )}
    </MainLayout>
  );
};

export default Pokemon;
