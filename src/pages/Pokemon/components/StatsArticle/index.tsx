import {
  faBolt,
  faGaugeSimpleHigh,
  faHeart,
  faKhanda,
  faShield,
  faShieldVirus,
} from '@fortawesome/free-solid-svg-icons';
import Stat from './Stat';
import { IPokemon } from '@/types/pokemon';
import Separator from '@/components/Separator';

const getCreationDate = (date: Date) => {
  date = new Date(date);
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
};

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

const StatsArticle = ({ pokemon }: { pokemon: IPokemon }) => {
  const { stats, baseExperience, captureRate, createdDate } = pokemon;
  return (
    <div className='bg-secondary rounded p-8 mt-6'>
      <div className='flex items-center gap-6 justify-start flex-wrap'>
        <div className='flex flex-col'>
          <h3 className='text-gray-400 font-bold uppercase text-[10px]'>
            Class
          </h3>
          <div className='flex items-center mt-2 gap-4 '>
            {pokemon.types.map(type => (
              <TypeBadge type={type.name} />
            ))}
          </div>
        </div>
        <div className='flex my-6 flex-col'>
          <h3 className='text-gray-400 font-bold uppercase text-[10px]'>
            Rarity
          </h3>
          <p className='text-gray-400 mt-2 font-bold text-[16px]'>
            {pokemon.isLegendary
              ? 'Legendary'
              : pokemon.isMythical
              ? 'Mythical'
              : 'Common'}
          </p>
        </div>
      </div>
      <Separator />

      <div className='my-6'>
        <h3 className='text-gray-400 font-bold uppercase text-[10px]'>Stats</h3>
        <div className='flex flex-wrap flex-col sm:flex-row gap-6 items-center justify-evenly mt-4'>
          <Stat name='Health' value={stats.hp} icon={faHeart} />
          <Stat name='Attack' value={stats.attack} icon={faBolt} />
          <Stat name='Defense' value={stats.defense} icon={faShield} />
          <Stat name='Speed' value={stats.speed} icon={faGaugeSimpleHigh} />
          <Stat
            name='Special Attack'
            value={stats.specialAttack}
            icon={faKhanda}
          />
          <Stat
            name='Special Defense'
            value={stats.specialDefense}
            icon={faShieldVirus}
          />
        </div>
      </div>
      <Separator />
      <div className='mt-6 flex items-center flex-col lg:flex-row gap-6 lg:gap-0 justify-evenly'>
        <div className='flex items-center justify-center flex-col'>
          <h3 className='text-gray-400 font-bold uppercase text-[10px]'>
            Base experience
          </h3>
          <p className='text-gray-400  font-bold uppercase text-[20px]'>
            {baseExperience}
          </p>
        </div>
        <div className='flex items-center justify-center flex-col '>
          <h3 className='text-gray-400 font-bold uppercase text-[10px]'>
            Capture Rate
          </h3>
          <p className='text-gray-400  font-bold uppercase text-[20px]'>
            {captureRate}
          </p>
        </div>
        <div className='flex items-center justify-center flex-col'>
          <h3 className='text-gray-400 font-bold uppercase text-[10px]'>
            Creation Date
          </h3>
          <p className='text-gray-400  font-bold uppercase text-[20px]'>
            {createdDate ? getCreationDate(createdDate) : ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsArticle;
