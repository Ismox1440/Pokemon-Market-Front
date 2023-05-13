import { textColors } from '@/config/pokemonColors';
import { nameandurl } from '@/types/pokemon';

const CardBadge = ({pokemonTypes, id }: {pokemonTypes: nameandurl[], id: string | number}) => {
  return (
    <>
      <span className='w-[20px] h-[20px] flex items-center justify-center  mr-[4px] align-middle'>
        <img
          width='15'
          src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${pokemonTypes[0].name}.svg`}
          alt='pokemon type'
          className='w-[15px] h-[15px]'
        />
      </span>
      {pokemonTypes[1] && <span className='w-[20px] h-[20px] flex items-center justify-center  mr-[4px] align-middle'>
        <img
          width='15'
          src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${pokemonTypes[1].name}.svg`}
          alt='pokemon type'
          className='w-[15px] h-[15px]'
        />
      </span>}
      <span
        className={`${textColors[pokemonTypes[0].name]} font-semibold inline-block text-xs leading-4 m-0 p-0`}
      >
        #{id}
      </span>
    </>
  );
};

export default CardBadge;
