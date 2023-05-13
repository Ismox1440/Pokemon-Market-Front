import { Avatar, ScrollArea, Skeleton } from '@mantine/core';
import PokemonCardLoading from '@/components/CardPokemon/Loading';

const UserInfoLoader = () => {
  return (
    <section className='sm:bg-gray-900 bg-opacity-80 sm:backdrop-blur rounded-xl sm:border-2 border-gray-700'>
      <ScrollArea.Autosize mah={700}>
        <div className='m-11 items-center justify-center gap-2 flex flex-wrap w-fit'>
          <Avatar size='xl' className='rounded-full' />
          <div className='flex items-start ml-6 justify-center gap-1 flex-col'>
            <Skeleton height={20} radius='md' />
            <div className='flex flex-wrap gap-6'>
              <div className='flex items-center justify-center gap-1'>
                <Skeleton circle height={32} />
                <Skeleton height={20} width={100} radius='md' />
              </div>
              <div className='flex items-center justify-center gap-1'>
                <Skeleton circle height={32} />
                <Skeleton height={20} width={100} radius='md' />
              </div>
            </div>
          </div>
        </div>
        <div className='p-[1rem] my-5 rounded-lg'>
          <Skeleton
            height={20}
            width={300}
            className='my-6 mx-auto'
            radius='md'
          />
          <div className='flex flex-wrap gap-2 items-center justify-center'>
            <PokemonCardLoading />
            <PokemonCardLoading />
          </div>
        </div>
      </ScrollArea.Autosize>
    </section>
  );
};

export default UserInfoLoader;
