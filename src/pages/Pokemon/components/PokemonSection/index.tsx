import CardBadge from '@/components/CardPokemon/Badge';
import { Pokemon } from '@/types/pokemon';
import { Group } from '@mantine/core';
import DirectSale from '../SellGroup/DirectSale';
import P2PMarketButton from '../SellGroup/P2PSale';
import { User } from '@/types/user';
import LovePotions from './LovePotionFarm';
import SellGroup from '../SellGroup';

const PokemonSection = ({
  pokemon,
  user,
}: {
  pokemon: Pokemon;
  user: User;
}) => {
  const { types, images, _id, name, owner } = pokemon;
  return (
    <div className='xl:w-2/4 relative z-50 mt-11'>
      <div className='flex items-center justify-center'>
        <CardBadge pokemonTypes={types} id={_id ?? ''} />
      </div>
      <h2 className='text-title text-4xl text-center font-semibold'>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
      <div className='md:h-[400px] md:w-[400px] mx-auto'>
        <img className='w-full' src={images?.default ?? ''} alt='pokemon' />
      </div>
      {owner?._id === user?._id && (
        <>
          <SellGroup pokemon={pokemon} userId={user._id} />
          <LovePotions pokemon={pokemon} />
        </>
      )}
    </div>
  );
};

export default PokemonSection;
