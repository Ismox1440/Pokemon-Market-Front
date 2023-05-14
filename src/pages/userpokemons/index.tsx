import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import useUserPokemons from '../../hooks/useUserPokemons';
import { useAuth0 } from '@auth0/auth0-react';
import PokemonList from '../../components/containers/PokemonList';
import PokemonCardList from '../Pokedex/containers/PokemonCardList';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import useHandleSelect from '../../hooks/useHandleSelect';
import usePokemons from '../../hooks/usePokemons';
import useUser from '../../hooks/useUser';
import PokemonQueryFilter from '../Pokedex/containers/PokemonQueryFilter';
import {
  Avatar,
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  Tooltip,
  rem,
  useMantineTheme,
} from '@mantine/core';
import PokemonRaritiesProgress from './components/PokemonRaritiesProgress';
import PokemonCarousel from './components/PokemonCarousel';
import PokemonCardStats from '@/components/CardPokemon/Stats';
const PRIMARY_COL_HEIGHT = rem(300);

const UserPokemons = () => {
  const theme = useMantineTheme();
  const { user } = useUser();
  const { data } = useUserPokemons();
  if (!user?._id) return;
  return (
    <div className='h-auto flex bg-gray-900'>
      <Sidebar />
      <div className=''>
        <div className='px-40 mt-11'>
          <div className='header flex'>
            <div className='flex'>
              <Avatar
                className='w-[200px] h-[200px] rounded-lg'
                src={user.image}
              />
              <div className='flex w-[80%] items-start ml-6 justify-start gap-1 flex-col'>
                <h2
                  className='text-gray-200 text-bold text-2xl font-bold'
                  style={{ fontFamily: 'Poppins' }}
                >
                  {user?.username}
                </h2>
                <div className='flex gap-6'>
                  <Tooltip label='Power Level'>
                    <div className='flex items-center justify-center gap-1'>
                      <img
                        className='w-[32px]'
                        src='https://res.cloudinary.com/dlekwh1wn/image/upload/v1683150069/rank-12.png'
                        alt=''
                      />
                      <h3
                        className='text-gray-200 font-semibold text-lg'
                        style={{ fontFamily: 'Genshin-regular' }}
                      >
                        2.2M
                      </h3>
                    </div>
                  </Tooltip>
                  <Tooltip label='Coins'>
                    <div className='flex items-center justify-center gap-1'>
                      <img
                        className='w-[32px]'
                        src='https://i.seadn.io/gae/f5jYkHL3Rp5IwFdrCgnubHGrLo45Z8JCIU8AlKMI6Bw59HxrcW93FYmex0Lh1if0jQsRCutywG2tBSXLoTGbveVrt_oLdR6Nq2UJ?auto=format&w=1000'
                        alt=''
                      />
                      <h3
                        className='text-gray-200 font-semibold text-lg'
                        style={{ fontFamily: 'Genshin-regular' }}
                      >
                        {user?.coins}
                      </h3>
                    </div>
                  </Tooltip>

                  <Tooltip label='Pokeballs'>
                    <div className='flex items-center justify-center gap-1'>
                      <img
                        className='w-[32px]'
                        src='https://media.forgecdn.net/avatars/568/368/637929623537457420.png'
                        alt=''
                      />
                      {/* <h3
                className='text-gray-200 font-semibold text-lg'
                style={{ fontFamily: 'Genshin-regular' }}
              >
                {getPokeballsLength(user?.pokeballs ?? [])}
              </h3> */}
                    </div>
                  </Tooltip>
                </div>
                <div>
                  <h3 className='text-gray-300 text-lg max-w-[50%] mt-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores est quae corporis vitae, labore itaque! Modi eius
                    quasi vitae dolor necessitatibus rerum atque animi saepe,
                    illo veritatis, eum quae sequi?
                  </h3>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2 w-fit items-center '>
              <h3 className='text-gray-200'>Ranking position</h3>
              <span className='text-gray-400 text-center'>#400</span>
            </div>
          </div>
       
          <Container className='mt-20 max-w-[100%]' my='md'>
            <SimpleGrid cols={2} spacing='md'>
              <div className='relative bg-gray-900 border-2 border-gray-700 hover:border-gray-500 transition-all cursor-pointer rounded-lg'>
                <h3 className='text-xl text-gray-200 absolute top-5 right-5'>
                  Lv 19
                </h3>
                <figure className='w-[50%] mx-auto'>
                  <img
                    className='w-full relative z-10'
                    src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/146.png'
                    alt=''
                  />
                </figure>
                <h3 className='text-2xl text-gray-200 items-center flex justify-center'>
                  PokemonName
                </h3>
                <div className='absolute z-0 inset-0 bg-[url("https://assets.codepen.io/13471/sparkles.gif")] rounded-2xl shadow-lg opacity-[0.1]'></div>
                <div className='flex items-center justify-center'>
                  <PokemonCardStats attack={200} defense={200} hp={200} />
                </div>
              </div>
              <Grid gutter='md'>
                <Grid.Col>
                  <Link to={`/pokedex?owner=${user._id}`}>
                    <PokemonRaritiesProgress
                      pokemons={data ?? []}
                      total={data?.length ?? 0}
                    />
                  </Link>
                </Grid.Col>
                <Grid.Col>
                  <PokemonCarousel pokemons={data ?? []} />
                </Grid.Col>
              </Grid>
            </SimpleGrid>
          </Container>
        </div>
        <div className='mx-40 mt-20'>

        <h2
          className='text-5xl mt-11  text-center font-bold text-gray-300'
          style={{ fontFamily: 'Genshin-Regular' }}
        >
          User Pokemons
        </h2>
        <PokemonQueryFilter customQuery={`owner=${user._id}`} />
      </div>
        </div>
    </div>
  );
};

export default UserPokemons;
