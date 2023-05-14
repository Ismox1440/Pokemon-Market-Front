import useSWR from 'swr';
import PokemonCardLoading from '../../Home/components/PokemonCardLoading';
import PokemonCard from '../../Home/components/PokemonCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const fetcher = (url: string) => fetch(url).then(res => res.json());
const PokemonEvolutionChain = ({ speciesUrl }: { speciesUrl: string }) => {
  const { data, isLoading, error } = useSWR(speciesUrl, fetcher);
  const { data: evolution_chain } = useSWR(data?.evolution_chain.url, fetcher);

  function getEvolutionChain(evolves_to, level = 2) {
    const result = [];
    evolves_to.forEach(evo => {
      const speciesUrl = evo.species.url;
      result.push({ level, speciesUrl });

      if (evo.evolves_to.length > 0) {
        const subResult = getEvolutionChain(evo.evolves_to, level + 1);
        result.push(...subResult);
      }
    });
    return result;
  }

  if (!evolution_chain) return;
  const evolutionChain = getEvolutionChain(evolution_chain.chain.evolves_to);
  const levelTwoEvolution = evolutionChain.filter(e => e.level === 2);
  const levelThreeEvolution = evolutionChain.filter(e => e.level === 3);
  return (
    <div className='mt-11'>
      <div className='flex items-center gap-1 mb-4 text-xl text-gray-400'>
        <FontAwesomeIcon icon={faLink} />
        <h2 className=' font-bold'>Evolution chain</h2>
      </div>
      <div className='flex'>
        <span className=' self-start text-gray-800 text-7xl font-extrabold font-mono'>
          #1
        </span>
        <div className='flex flex-wrap'>
          <EvolutionCard speciesUrl={evolution_chain.chain.species.url} />
        </div>
      </div>
      {levelTwoEvolution.length > 0 && (
        <div className='flex'>
          <span className=' self-start text-gray-800 text-7xl font-extrabold font-mono'>
            #2
          </span>
          <div className='flex flex-wrap'>
            {levelTwoEvolution.map(e => (
              <EvolutionCard speciesUrl={e.speciesUrl} />
            ))}
          </div>
        </div>
      )}
      {levelThreeEvolution.length > 0 && (
        <div className='flex'>
          <span className=' self-start text-gray-800 text-7xl font-extrabold font-mono'>
            #3
          </span>
          <div className='flex flex-wrap'>
            {levelThreeEvolution.map(e => (
              <EvolutionCard speciesUrl={e.speciesUrl} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonEvolutionChain;

const EvolutionCard = ({ speciesUrl }) => {
  const { data, isLoading: loadingSpecies } = useSWR(speciesUrl, fetcher);
  const { data: pokemon, isLoading } = useSWR(
    data?.varieties[0].pokemon.url,
    fetcher
  );
  if (isLoading || loadingSpecies) return <PokemonCardLoading />;
  if (pokemon) return <PokemonCard pokemon={pokemon} />;
};
