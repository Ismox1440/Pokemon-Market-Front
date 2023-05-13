import { Sidebar } from '../../components/Sidebar';
import PokemonCardLoading from '@/components/CardPokemon/Loading';
import useUser from '../../hooks/useUser';
import usePokeball from '../../hooks/usePokeball';
import PokemonCard from '@/components/CardPokemon';
import PokeballMenu from './componentes/PokeballMenu';

const RandomPokemon = () => {
  const { user } = useUser();
  const { data, isLoading, isError, trigger } = usePokeball();
  if (!user) return;
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <figure className='block overflow-hidden pt-[49%] absolute top-0 left-0 w-full z-1'>
        <div className='-z-1 bg-[url("https://cdn.discordapp.com/attachments/1008567356341092453/1104881283236114442/Ismox_background_with_egg_of_monster_like_pokemon_style_genshin_e6972b72-863d-4708-95ec-df93f655bf11.png")] bg-cover bg-center absolute shadow-[inset_-0px_-800px_900px_#111010] top-0 left-0 right-0 w-full h-full object-cover block'></div>
      </figure>
      <div className='w-full flex flex-col items-center justify-center'>
        {(!data || isLoading || isError) && <PokemonCardLoading className="relative"/>}
        {data && !isLoading && (
          <div className='m-[10px] relative'>
            <PokemonCard pokemon={data.pokemon} />
          </div>
        )}

        <PokeballMenu isLoading={isLoading} trigger={trigger} user={user} />
      </div>
    </div>
  );
};

export default RandomPokemon;
