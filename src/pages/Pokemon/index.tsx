import { useParams } from 'react-router-dom';
import usePokemon from '../../hooks/usePokemonDetail';
import PokemonCard from '../Home/components/PokemonCard';
import CardBadge from '../Home/components/CardBadge';
import {
  IconDefinition,
  faBolt,
  faCartShopping,
  faCoins,
  faGaugeSimpleHigh,
  faHandshake,
  faHeart,
  faKhanda,
  faPlusCircle,
  faShield,
  faShieldVirus,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Button, Group, Progress, UnstyledButton } from '@mantine/core';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import DirectSale from './components/DirectSale';
import P2PMarketButton from './components/P2PSale';
import useUser from '../../hooks/useUser';
import { Sidebar } from '../../components/Sidebar';
import { toast } from 'sonner';
import { buyPokemon } from '../../services/buyPokemon';
import { useState } from 'react';
import LovePotions from './components/LovePotions';
import UseLovePotion from './components/UseLovePotion';
import PokemonLevel from './components/PokemonLevel';

interface IPokemonStats {
  speed: number;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
}

const TypeBadge = ({ type }: { type: string }) => (
  <div className='flex items-center justify-center'>
    <span className='w-[20px] h-[20px] flex items-center justify-center  mr-[2px] align-middle'>
      <img
        width='15'
        src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${type}.svg`}
        alt=''
        className='w-[15px] h-[15px] opacity-50'
      />
    </span>
    <span
      className={` text-gray-400 font-semibold inline-block text-sm leading-4 m-0 p-0`}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  </div>
);

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

const Stat = ({
  name,
  value,
  icon,
}: {
  name: string;
  value: number;
  icon: IconDefinition;
}) => {
  return (
    <div className='flex flex-col text-gray-400 items-center justify-center gap-1 w-fit'>
      <FontAwesomeIcon icon={icon} />
      <span>{name}</span>
      <span>{value}</span>
    </div>
  );
};

const Pokemon = () => {
  const { _id } = useParams();
  const { data: pokemon, isLoading, error } = usePokemon({ _id });
  const [loadingBuy, setLoadingBuy] = useState(false);
  const { user } = useUser();
  console.log(user)
  if (isLoading) return <LoadingScreen />;
  const getCreationDate = (date: Date) => {
    date = new Date(date);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };
  const handleBuy = async () => {
    toast.promise(() => buyPokemon(pokemon?._id ?? '', user?._id), {
      loading: 'Buying...',
      success: data => data,
      error: err => err,
    });
  };

  const handleDisable = () => {
    if (!pokemon?.onSale) return true;
    return false;
  };


  if (pokemon !== undefined && !error && user)
    return (
      <div className='relative z-10 h-screen bg-gray-900'>
        <Sidebar />
        <div className='px-20 bg-gray-900 mx-auto flex  justify-evenly'>
          <div className='w-2/4 relative z-50  mt-11'>
            <div className='flex items-center justify-center'>
              <CardBadge pokemonTypes={pokemon.types} id={_id ?? ''} />
            </div>
            <h2 className='text-white text-4xl text-center  font-semibold'>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h2>
            <div className='h-[400px] w-[400px] mx-auto'>
              <img
                className='w-full'
                src={pokemon.images?.default ?? ''}
                alt=''
              />
            </div>
            {pokemon?.owner?._id === user?._id && (
              <>
                <Group mt={80} className='flex items-center justify-center'>
                  <DirectSale pokemon={pokemon} />
                  <P2PMarketButton pokemonId={pokemon._id} userId={user._id} />
                </Group>
                <LovePotions pokemon={pokemon} />
              
              </>
            )}
          </div>
          <div className='w-2/4 relative z-50 px-2 h-screen overflow-y-scroll scrollbar'>
            <div className='bg-gray-800 border border-gray-700 rounded p-8 mt-11'>
              <h3 className='text-gray-400 font-bold uppercase text-[10px]'>
                Owner
              </h3>
              <div className='flex  mt-2 gap-2'>
                <Avatar
                  size='lg'
                  radius='xl'
                  src={pokemon?.owner?.image ?? ''}
                />

                <div className='flex  flex-col justify-center gap-1'>
                  <span className='text-gray-400  text-md'>
                    Ismael Saragusti
                  </span>
                  <div className=' flex gap-1'>
                    <img
                      className='w-[20px] h-[20px]'
                      src='https://res.cloudinary.com/dlekwh1wn/image/upload/v1683150069/rank-12.png'
                      alt=''
                    />
                    <h3
                      className='text-gray-400  text-sm'
                      style={{ fontFamily: 'Genshin-regular' }}
                    >
                      2.2M
                    </h3>
                  </div>
                </div>
              </div>
              <div className='mt-11'>
                <h3 className='text-gray-400 font-bold uppercase text-[10px]'>
                  Price
                </h3>
                <div className='flex mt-4 items-center  gap-2'>
                  <img
                    className='max-w-[50px]'
                    src='https://i.seadn.io/gae/f5jYkHL3Rp5IwFdrCgnubHGrLo45Z8JCIU8AlKMI6Bw59HxrcW93FYmex0Lh1if0jQsRCutywG2tBSXLoTGbveVrt_oLdR6Nq2UJ?auto=format&w=1000'
                    alt='coin'
                  />
                  <h4 className='text-gray-400 font-bold text-[30px]'>
                    {pokemon.price}
                  </h4>
                </div>
              </div>
              <div className='mt-6'>
                <Button
                  variant='outline'
                  color='lime'
                  leftIcon={<FontAwesomeIcon icon={faCartShopping} />}
                  onClick={handleBuy}
                  disabled={
                    !pokemon?.onSale ||
                    !pokemon.price ||
                    pokemon.price > user.coins ||
                    pokemon.owner?._id === user._id
                  }
                >
                  Buy
                </Button>
              </div>
            </div>

           <PokemonLevel user={user} pokemon={pokemon}/>
            <div className='bg-gray-800 border border-gray-700 rounded p-8 mt-6'>
              <h3 className='text-gray-400 font-bold uppercase text-[10px]'>
                Class
              </h3>
              <div className='flex items-center mt-2 gap-4 '>
                {pokemon.types.map(type => (
                  <TypeBadge type={type.name} />
                ))}
              </div>
              <div className='flex mt-6 flex-col'>
                <h3 className='text-gray-400 font-bold uppercase text-[10px]'>
                  Rarity
                </h3>
                <p className='text-gray-400  font-bold text-[20px]'>
                  {pokemon.isLegendary
                    ? 'Legendary'
                    : pokemon.isMythical
                    ? 'Mythical'
                    : 'Common'}
                </p>
              </div>
              <div className='border-t border-gray-700 my-6'></div>
              <div className='mt-6 '>
                <h3 className='text-gray-400 font-bold uppercase text-[10px]'>
                  Stats
                </h3>
                <div className='flex flex-wrap items-center justify-evenly mt-4'>
                  <Stat name='Health' value={pokemon.stats.hp} icon={faHeart} />
                  <Stat
                    name='Attack'
                    value={pokemon.stats.attack}
                    icon={faBolt}
                  />
                  <Stat
                    name='Defense'
                    value={pokemon.stats.defense}
                    icon={faShield}
                  />
                  <Stat
                    name='Speed'
                    value={pokemon.stats.speed}
                    icon={faGaugeSimpleHigh}
                  />
                  <Stat
                    name='Special Attack'
                    value={pokemon.stats.specialAttack}
                    icon={faKhanda}
                  />
                  <Stat
                    name='Special Defense'
                    value={pokemon.stats.specialDefense}
                    icon={faShieldVirus}
                  />
                </div>
              </div>
              <div className='border-t border-gray-700 my-6'></div>
              <div className='mt-6 flex items-center justify-evenly'>
                <div className='flex items-center justify-center flex-col'>
                  <h3 className='text-gray-400 font-bold uppercase text-[10px]'>
                    Base experience
                  </h3>
                  <p className='text-gray-400  font-bold uppercase text-[20px]'>
                    {pokemon.baseExperience}
                  </p>
                </div>
                <div className='flex items-center justify-center flex-col'>
                  <h3 className='text-gray-400 font-bold uppercase text-[10px]'>
                    Capture Rate
                  </h3>
                  <p className='text-gray-400  font-bold uppercase text-[20px]'>
                    {pokemon.captureRate}
                  </p>
                </div>
                <div className='flex items-center justify-center flex-col'>
                  <h3 className='text-gray-400 font-bold uppercase text-[10px]'>
                    Creation Date
                  </h3>
                  <p className='text-gray-400  font-bold uppercase text-[20px]'>
                    {pokemon.createdDate
                      ? getCreationDate(pokemon.createdDate)
                      : ''}
                  </p>
                </div>
              </div>
            </div>

            <div className='flex flex-wrap gap-6'>
              {pokemon.evolvesFrom && (
                <div className='mt-4'>
                  <h2 className='text-gray-500 mb-2 text-center font-extrabold uppercase text-2xl'>
                    Evolves From
                  </h2>

                  <PokemonCard classNames='' pokemon={pokemon.evolvesFrom} />
                </div>
              )}
              {pokemon.evolvesTo && pokemon.evolvesTo.length > 0 && (
                <div className='mt-4'>
                  <h2 className='text-gray-500 mb-2 text-center font-extrabold uppercase text-2xl'>
                    Evolves To
                  </h2>
                  <div className=' flex gap-2 flex-wrap mx-auto'>
                    {pokemon.evolvesTo?.map(evolvesTo => (
                      <PokemonCard classNames='' pokemon={evolvesTo} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* <PokemonEvolutionChain speciesUrl={data.species.url} pokeid={id} /> */}
          </div>
        </div>
        {pokemon.isLegendary && (
          <div className='absolute -z-1 bg-repeat inset-0 bg-[url("https://assets.codepen.io/13471/sparkles.gif")] rounded-lg shadow-lg opacity-5'></div>
        )}{' '}
        {pokemon.isMythical && (
          <div className='absolute bg-cover inset-0 bg-[url("https://66.media.tumblr.com/c3d171f2c27802035772177cb2d8765a/tumblr_ola6bsBBNC1rt67t1o2_r2_400.gif")] rounded-lg shadow-lg opacity-[0.009]'></div>
        )}
      </div>
    );
};

export default Pokemon;
