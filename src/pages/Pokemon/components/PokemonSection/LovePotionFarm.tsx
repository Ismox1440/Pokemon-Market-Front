import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UnstyledButton } from '@mantine/core';
import { Pokemon } from '@/types/pokemon';
import { calculateLovePotionsToClaim } from '@/utils/calculateLovePotions';
import CountDownBtn from './CountDownBtn';
import useUser from '@/hooks/useUser';
import { useClaimLovePotionMutation } from '@/redux/api/pokemonEndpoint';
import { toast } from 'sonner';

const LovePotions = ({ pokemon }: { pokemon: Pokemon }) => {
  const { user } = useUser();
  const { count, isAllowed, hoursDiff, lastClaim } =
    calculateLovePotionsToClaim(pokemon);

  const [claim] = useClaimLovePotionMutation();

  const handleClaim = () => {
    claim({ user, pokemon, count });
    toast.success(`Claimed ${count} Love Potions`)
  };

  return (
    <div className={`${!isAllowed && 'grayscale'} mt-6`}>
      <div
        className={`w-[100px] mx-auto rounded-xl bg-pink-300  border-4 border-white cursor-pointer`}
      >
        <div className=''>
          <figure className='m-2 w-[50px] mx-auto'>
            <img
              src='https://res.cloudinary.com/dlekwh1wn/image/upload/v1683573100/love-potion.png'
              alt=''
              className='w-full'
            />
          </figure>
        </div>
        <div className='flex items-center justify-center mt-4 bg-white'>
          <span className='font-bold text-pink-900'>{count}</span>
        </div>
      </div>
      {!isAllowed && (
        <CountDownBtn hoursDiff={hoursDiff} lastClaim={lastClaim} />
      )}
      <div className='flex items-center justify-center mt-4'>
        <UnstyledButton
          disabled={!isAllowed}
          onClick={handleClaim}
          style={{ fontFamily: 'Genshin-Regular' }}
          className='font-bold cursor-pointer bg-[#EAE6D7] flex gap-2 items-center justify-center hover:scale-105 transition-all text-[#4E5668] p-2 px-20 rounded-full'
        >
          <FontAwesomeIcon color='green' icon={faPlusCircle} />
          Claim
        </UnstyledButton>
      </div>
    </div>
  );
};

export default LovePotions;
