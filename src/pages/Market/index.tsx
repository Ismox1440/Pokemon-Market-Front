import { Sidebar } from '@/components/Sidebar';
import PokemonQueryFilter from '../Pokedex/containers/PokemonQueryFilter';
import MainLayout from '@/components/MainLayout';
import LastPokemonSection from './components/LastPokemonSection';
import ShopSection from './components/ShopSection';

const Market = () => {
  return (
    <MainLayout>
      <Sidebar />
      <div className='relative mx-2 lg:mx-20 xl:mx-40'>
        <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl mt-60 text-[#D3BD8F]'>
          Market
        </h2>
        <h2 className='text-xl text-gray-400'>
          Here you can buy items, Poké Balls, and Pokémon!
        </h2>
       <ShopSection />
       <LastPokemonSection />
        <div className='w-full'>
          <h3 className='mt-40 mb-6 text-center text-4xl text-[#D3BD8F]'>
            All pokemon for sale
          </h3>
          <PokemonQueryFilter customQuery='onSale=true' />
        </div>
      </div>
    </MainLayout>
  );
};

export default Market;
