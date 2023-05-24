import PokemonCarousel from '@/pages/Profile/components/PokemonCarousel';
import { useGetLastedPokemonForSaleQuery } from '@/redux/api/pokemonEndpoint';

const LastPokemonSection = () => {
  const { isLoading, data } = useGetLastedPokemonForSaleQuery();
  return (
    <div className=''>
      <h3 className='text-gray-300 mt-20 mb-6 text-2xl'>Lasted Pokemons</h3>
      <PokemonCarousel loading={isLoading} pokemons={data ?? []} />
    </div>
  );
};

export default LastPokemonSection;
