import { Skeleton } from '@mantine/core';
import React from 'react';
import PokemonCardLoading from './PokemonCardLoading';

const UserInfoLoader = () => {
  return ( <section className='relative bg-gray-900 bg-opacity-80 backdrop-blur rounded-xl border-2 border-gray-700'>
  <div className='m-11 flex w-fit'>
    <Skeleton circle height={100}/>
    <div className='flex items-start ml-6 justify-center gap-1 flex-col'>
      <Skeleton height={20} width={500} radius='md' />
      <div className='flex gap-6'>
        <div className='flex items-center justify-center gap-1'>
         
          <Skeleton circle height={32}/>
          <Skeleton height={20} width={100} radius='md' />
        </div>
        <div className='flex items-center justify-center gap-1'>
        <Skeleton circle height={32}/>
          <Skeleton height={20} width={100} radius='md' />
        </div>
        <div className='flex items-center justify-center gap-1'>
        <Skeleton circle height={32}/>
          <Skeleton height={20} width={100} radius='md' />
        </div>
      </div>
    </div>
  </div>
  <div className='mx-10'>
    <div className=' flex flex-col items-center justify-center p-[1rem]  my-5 rounded-lg'>
      <Skeleton className='my-6' height={20} width={300} radius='md' />
      <div className='flex flex-wrap items-center justify-evenly'>
        <PokemonCardLoading />
        <PokemonCardLoading />
      </div>
    </div>
  </div>
</section>
      );
    };
    
    export default UserInfoLoader;
    
    // <div className='h-[600px] bg-gray-900 relative rounded-xl  '>
    //   <div className='m-11 flex gap-4 w-full'>
    //     <Skeleton circle height={84} />
    //     <div className='flex flex-col justify-center gap-4'>
    //       <Skeleton height={10} width={500} radius={'md'} />
    //       <Skeleton height={10} width={300} radius={'md'} />
    //     </div>
    //   </div>
    //   <div className='flex flex-col gap-11 mt-40'>

    //     <div className='flex items-center justify-center'>
    //         <Skeleton height={20} width={300} radius={'md'} />
    //     </div>
    //     <div className='flex flex-wrap items-center justify-center'>
    //         <PokemonCardLoading />
    //         <PokemonCardLoading />
    //     </div>
    //   </div>
    // </div>