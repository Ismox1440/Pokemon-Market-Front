import React from 'react';
import { Sidebar } from '../../components/Sidebar';
import PokemonCarousel from '../userpokemons/components/PokemonCarousel';
import useUserPokemons from '../../hooks/useUserPokemons';
import PokemonQueryFilter from '../Pokedex/containers/PokemonQueryFilter';
import { useLocation } from 'react-router-dom';
import useHandleSelect from '../../hooks/useHandleSelect';

const url =
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0906b988-7e73-42cc-9161-23f7d070a0e0/dfbalfl-a695036e-9ca4-4894-b213-f309c47c0bf3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA5MDZiOTg4LTdlNzMtNDJjYy05MTYxLTIzZjdkMDcwYTBlMFwvZGZiYWxmbC1hNjk1MDM2ZS05Y2E0LTQ4OTQtYjIxMy1mMzA5YzQ3YzBiZjMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.t2yNydwX1tn0UEtp0gHdHBFJdZjg59R-MpEZNdUmuYs';
const Market = () => {
  const { data } = useUserPokemons();
  const location = useLocation();
  const { trigger: handleSelect, navigate } = useHandleSelect();

  return (
    <div className='h-auto bg-gray-900'>
      <Sidebar />
      <figure className='block overflow-hidden pt-[49%] absolute top-0 left-0 w-full z-1'>
        <div className='-z-1 bg-[url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0906b988-7e73-42cc-9161-23f7d070a0e0/dfbalfl-a695036e-9ca4-4894-b213-f309c47c0bf3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA5MDZiOTg4LTdlNzMtNDJjYy05MTYxLTIzZjdkMDcwYTBlMFwvZGZiYWxmbC1hNjk1MDM2ZS05Y2E0LTQ4OTQtYjIxMy1mMzA5YzQ3YzBiZjMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.t2yNydwX1tn0UEtp0gHdHBFJdZjg59R-MpEZNdUmuYs")] bg-cover bg-center absolute shadow-[inset_-0px_-800px_900px_#111010] top-0 left-0 right-0 w-full h-full object-cover block'></div>
      </figure>
      <div className='relative mx-40'>
        <h2 className='text-8xl mt-60 text-gray-200'>Market</h2>
        <h2 className='text-xl   text-gray-400'>
          Here you can buy items, Poké Balls, and Pokémon!
        </h2>
        <div>
          <h3 className='text-gray-300 mt-20  text-2xl'>Item shop</h3>
          <h4 className='text-red-800 mb-6 font-sans'>
            We plan to add more items in the future, but for now we only have
            Pokeballs available
          </h4>
          <div className=' bg-gradient-to-t from-[#1f1f1f] to-transparent hover:to-gray-800 rounded-xl w-[120px] h-[120px] flex flex-col items-center justify-center'>
            <figure className='w-[70px]'>
              <img
                className='w-full'
                style={{ imageRendering: 'pixelated' }}
                src='https://github.com/PokeAPI/sprites/blob/master/sprites/items/poke-ball.png?raw=true'
                alt=''
              />
            </figure>

            <span className='text-gray-300'>Pokeball</span>
          </div>
        </div>
        <div className=''>
          <h3 className='text-gray-300 mt-20 mb-6 text-2xl'>Lasted Pokemons</h3>
          <PokemonCarousel pokemons={data ?? []} />
        </div>
        <div className='w-full '>
          <h3 className='text-gray-300 mt-40 mb-6 text-center text-4xl'>
            All pokemon for sale
          </h3>
          <PokemonQueryFilter customQuery='onSale=true' />
        </div>
       
      </div>
    </div>
  );
};

export default Market;
