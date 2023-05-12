import React, { useState } from 'react';
import { IPokemon } from '../../../types/pokemon';
import { Button, Progress } from '@mantine/core';
import UseLovePotion from './UseLovePotion';
import { IUser } from '../../../types/user';
import { useLovePotions } from '../../../services/useLovePotion';
import { toast } from 'sonner';
import useLovePotion from '../../../hooks/pokemon/useLovePotion';

const PokemonLevel = ({
  pokemon,
  user,
}: {
  pokemon: IPokemon;
  user: IUser;
}) => {
  const { isLoading, trigger } = useLovePotion();
  const [value, setValue] = useState(0);
  const userPotions = user.items.find(item => item.item.name === 'Love Potion');
  const expToNextLevel =
    pokemon?.growthRate?.levels[pokemon.level]?.experience ?? 0;
  const nextLevel =
    value > 0
      ? pokemon?.growthRate.levels
          .filter(e => e.experience <= pokemon.exp + value * 50)
          .slice(-1)[0].level - pokemon.level
      : 0;

  const handleUsePotion = async () => {
    await trigger(pokemon._id, user._id, userPotions.item._id, value)
   setValue(0)
  };

  return (
    <div className={`${isLoading && 'grayscale'} bg-gray-800 border border-gray-700 rounded p-8 mt-6`}>
      <div className='flex flex-col items-start mb-2 justify-center w-fit'>
        <h3 className='text-gray-400 font-bold uppercase text-[10px]'>Level</h3>
        <h4 className='text-gray-400 font-bold text-[30px]'>
          {pokemon.level}{' '}
          {nextLevel > 0 && (
            <span className='text-pink-500'>+ {nextLevel}</span>
          )}
        </h4>
      </div>
      <div className='mt-6'>
        <h4 className='text-gray-400 mb-2 flex gap-2 font-bold uppercase text-[10px]'>
          Exp {pokemon.exp} / {expToNextLevel}{' '}
          {value > 0 && <span className='text-pink-500'>+ {value * 50}</span>}
        </h4>

        <Progress
          sections={[
            { value: (pokemon.exp / expToNextLevel) * 100, color: 'white' },
            { value: ((value * 50) / expToNextLevel) * 100, color: 'pink' },
          ]}
        />
      </div>
      <div className='flex flex-col  gap-2'>
        <h3 className='text-xl text-gray-300 mt-6'>Love potion</h3>
        <UseLovePotion
        isLoading={isLoading}
          value={value}
          setValue={setValue}
          potionsCount={userPotions?.count ?? 0}
        />
        <Button
          onClick={handleUsePotion}
          disabled={isLoading || value < 1}
          variant='default'
          color='pink'
        >
          Use
        </Button>
      </div>
    </div>
  );
};

export default PokemonLevel;
