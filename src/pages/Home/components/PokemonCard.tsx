import { bgColors } from '../../../config/pokemonColors';
import { IPokemon } from '../../../types/pokemon';
import PokemonCardStats from './CardStats';
import CardBadge from './CardBadge';
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon, classNames }: {classNames?: string,  pokemon: IPokemon }) => {
  const { types, images, name, stats } = pokemon;
  console.log('%c Pokemon ', 'background: #222; color: #bada55', {pokemon});

  return (
    <Link to={`/pokemon/${pokemon?._id}`} className={classNames} >
        <div className='w-[252px] h-[308px] bg-[#1c1f25] flex flex-col rounded-lg border-gray-700 transition-all duration-100 hover:border-[#31363f] border-2 overflow-hidden'>
          <div
            className={`bg-gradient-to-b from-transparent ${
              bgColors[types[0].name]
            } card w-full h-[240px] relative flex items-center flex-col`}
          >
            {pokemon.isLegendary && (
              <div className='absolute inset-0 bg-[url("https://assets.codepen.io/13471/sparkles.gif")] rounded-lg shadow-lg opacity-10'></div>
            )}
            {pokemon.isMythical && (
              <div className='absolute inset-0 bg-[url("https://66.media.tumblr.com/c3d171f2c27802035772177cb2d8765a/tumblr_ola6bsBBNC1rt67t1o2_r2_400.gif")] rounded-lg shadow-lg opacity-[0.03]'></div>
            )}

            <div className='absolute bg-gray-800 scale-90  rounded top-[10px]  items-center rounde    d inline-flex justify-center py-[4px] px-[8px] whitespace-nowrap'>
              <CardBadge pokemonTypes={types} id={pokemon._id} />
            </div>
            <div className='mt-[40px] '>
              {images?.default ? (
                <img
                  width='150'
                  src={images.default}
                  alt='9870621'
                  loading='lazy'
                  className='relative z-10 align-middle max-w-full h-auto '
                />
              ) : (
                <h3 className='text-white text-opacity-60 text-center text-8xl font-extrabold font-mono'>?</h3>
              )}
            </div>
            {(pokemon.onSale && pokemon.price) && <h3 className='text-gray-200 mt-2'>{pokemon.price}</h3>}
          </div>
          <div className='w-full py-[15px] px-[10px] relative h-[76px] flex'>
            <div className='w-[90%]'>
              <div className='text-ellipsis whitespace-nowrap overflow-hidden text-white text-lg '>
                {name && name.charAt(0).toUpperCase() + name.slice(1)}
              </div>
              <PokemonCardStats
                attack={stats.attack}
                defense={stats.defense}
                hp={stats.hp}
              />
            </div>
            <div className='flex items-center justify-center'>
              <div className='text-gray-400'>
                <svg
                  className='GenesInfoPopover_Icon__Nsn_Q'
                  viewBox='0 0 24 24'
                  width='20'
                  height='20'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M9.922 2.571a4.067 4.067 0 0 1 4.156 0l4.844 2.868C20.208 6.201 21 7.61 21 9.132v5.736c0 1.523-.792 2.931-2.078 3.693l-4.844 2.868a4.067 4.067 0 0 1-4.156 0L5.078 18.56C3.792 17.799 3 16.39 3 14.868V9.132c0-1.523.792-2.931 2.078-3.693l4.844-2.868ZM13 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-2 2.25a.75.75 0 0 0 0 1.5h.25V17a.75.75 0 0 0 1.5 0v-7a.75.75 0 0 0-.75-.75h-1Z'
                    fill='currentColor'
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

    </Link>
  );
};

export default PokemonCard;
