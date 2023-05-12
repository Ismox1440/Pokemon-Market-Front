import useSWR from 'swr';
import usePokemon from '../../../hooks/usePokemonDetail';
import PokemonCardLoading from '../../Home/components/PokemonCardLoading';
import PokemonCard from '../../Home/components/PokemonCard';


const fetcher = (url: string) => fetch(url).then(res => res.json());
const PokemonVarieties = ({ speciesUrl, pokeid }: { speciesUrl: string }) => {
  const { data, isLoading, error } = useSWR(speciesUrl, fetcher);
  if (data?.varieties.length < 2 || !data) return;
  return (
    <div className='mt-11 flex flex-col items-center justify-center scale-90'>
      <h2 className='text-3xl font-semibold text-gray-400 font-mono mb-4'>Varieties</h2>
      <div className='flex flex-wrap'>
        {data &&
          data.varieties.map(p => (
            <VarietieCard url={p.pokemon.url} pokeid={pokeid} />
          ))}
      </div>
    </div>
  );
};

export default PokemonVarieties;

const VarietieCard = ({ url, pokeid }: { url: string }) => {
  let pokemonId = url.split('/').slice(0, -1).pop();
  if (pokemonId === pokeid) return;
  const { data, isLoading } = usePokemon({ pokemonId });
  if (isLoading) return <PokemonCardLoading />;
  if (data) return <PokemonCard pokemon={data} />;
};
