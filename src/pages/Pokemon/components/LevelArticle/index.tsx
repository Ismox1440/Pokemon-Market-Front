import { useState } from 'react';
import { Pokemon } from '@/types/pokemon';
import { Progress } from '@mantine/core';
import { User } from '@/types/user';

import LovePotion from './LovePotion';

const LevelArticle = ({
  pokemon,
  user,
}: {
  pokemon: Pokemon;
  user: User;
}) => {
  const [value, setValue] = useState(0);
  const userPotions = user.items.find(item => item.item.name === 'Love Potion');
  const expToNextLevel =
    pokemon?.growthRate.levels[pokemon.level]?.experience ?? 0;
  const nextLevel =
    value > 0
      ? pokemon?.growthRate.levels
          .filter((e: {experience: number}) => e.experience <= pokemon.exp + value * 50)
          .slice(-1)[0].level - pokemon.level
      : 0;

  return (
    <div className={`bg-secondary  border-gray-700 rounded p-8 mt-6`}>
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
      {user._id === pokemon.owner?._id && (
        <LovePotion
          user={user}
          pokemon={pokemon}
          value={value}
          setValue={setValue}
          potionsCount={userPotions?.count ?? 0}
        />
      )}
    </div>
  );
};

export default LevelArticle;
