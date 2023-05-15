import { useParams } from 'react-router-dom';
import useUser from '../../hooks/useUser';
import { useGetPokemonQuery } from '@/redux/api/pokemonEndpoint';
import MainLayout from '@/components/MainLayout';
import StatsArticle from './components/StatsArticle';
import SaleArticle from './components/SaleArticle';
import PokemonSection from './components/PokemonSection';
import EvolvesArticle from './components/EvolvesArticle';
import LevelArticle from './components/LevelArticle';

const LoadingScreen = () => {
  return (
    <div className='bg-gray-900 flex items-center justify-center h-screen'>
      <img
        src='https://cdn.icon-icons.com/icons2/2603/PNG/512/poke_ball_icon_155925.png'
        alt=''
        className='w-[60px] mx-auto animate-pulse'
      />
    </div>
  );
};

const Pokemon = () => {
  const { _id } = useParams();
  const { data: pokemon, isLoading, error } = useGetPokemonQuery(_id ?? '');
  const { user } = useUser();

  if (isLoading) return <LoadingScreen />;
  if (pokemon !== undefined && !error && user)
    return (
      <MainLayout>
        <div className='xl:px-20 gap-40 xl:gap-0 mx-auto flex flex-col xl:flex-row xl:justify-evenly'>
          <PokemonSection pokemon={pokemon} user={user} />
          <div className='xl:w-2/4 relative z-50 px-2 h-screen overflow-y-scroll scrollbar'>
            <SaleArticle pokemon={pokemon} user={user} />
            <LevelArticle user={user} pokemon={pokemon} />
            <StatsArticle pokemon={pokemon} />
            <EvolvesArticle pokemon={pokemon} />
          </div>
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
