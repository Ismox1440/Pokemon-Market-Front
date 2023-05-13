import { shortenQuantity } from "@/utils/userUtils";

const PokeballBadge = ({ pokeballs }: { pokeballs: number }) => {
  return (
    <div className='flex items-center justify-center gap-1'>
      <img
        className='w-[32px]'
        src='https://media.forgecdn.net/avatars/568/368/637929623537457420.png'
        alt=''
      />
      <h3
        className='text-gray-200 font-semibold text-lg'
        style={{ fontFamily: 'Genshin-regular' }}
      >
        {shortenQuantity(pokeballs)}
      </h3>
    </div>
  );
};

export default PokeballBadge;
