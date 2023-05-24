import PokemonCardStats from '@/components/CardPokemon/Stats';
import { Container, Grid, SimpleGrid } from '@mantine/core';
import PokemonRaritiesProgress from '../PokemonRaritiesProgress';
import PokemonCarousel from '../PokemonCarousel';
import { IPokemon } from '@/types';
import { Link } from 'react-router-dom';

const PokemonsInfoSection = ({
  data,
  info,
}: {
  data: IPokemon[];
  info: { [key: string]: number };
}) => {
  return (
    <Container className='mt-20 max-w-[100%]' my='md'>
      <SimpleGrid
        breakpoints={[{ maxWidth: 'lg', cols: 1 }]}
        cols={2}
        spacing='md'
      >
        <Link
          to={`/pokemon/${data[0]._id}`}
          className='relative bg-secondary xl:flex flex-col items-center justify-center border-2 border-secondary hover:border-gray-500 transition-all cursor-pointer rounded-2xl'
        >
          <h3 className='md:text-xl text-gray-200 absolute top-5 right-5'>
            Lv {data[0].level}
          </h3>
          <figure className='md:w-[50%] mx-auto'>
            <img
              className='w-full relative z-10'
              src={data[0].images?.default}
              alt='pokemon'
            />
          </figure>
          <h3 className='lg:text-2xl text-lg text-gray-200 items-center flex justify-center'>
            {data[0].name}
          </h3>
          {data[0].isLegendary ? (
            <div className='absolute z-0 inset-0 bg-[url("https://assets.codepen.io/13471/sparkles.gif")] rounded-2xl shadow-lg opacity-[0.1]'></div>
          ) : data[0].isMythical ? (
            <div className='absolute bg-cover z-0 inset-0 bg-[url("https://66.media.tumblr.com/c3d171f2c27802035772177cb2d8765a/tumblr_ola6bsBBNC1rt67t1o2_r2_400.gif")] rounded-2xl shadow-lg opacity-[0.1]'></div>
          ) : null}
          <div className='flex items-center my-2 justify-center'>
            <PokemonCardStats
              attack={data[0].stats.attack}
              defense={data[0].stats.defense}
              hp={data[0].stats.hp}
            />
          </div>
        </Link>
        <Grid gutter='md'>
          <Grid.Col>
            <PokemonRaritiesProgress
              legendaryCount={info.legendary}
              mythicalCount={info.mythical}
              commonCount={info.common}
              total={info.legendary + info.mythical + info.common}
            />
          </Grid.Col>
          <Grid.Col>
            <PokemonCarousel loading={false} pokemons={data?.slice(1) ?? []} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
};

export default PokemonsInfoSection;
