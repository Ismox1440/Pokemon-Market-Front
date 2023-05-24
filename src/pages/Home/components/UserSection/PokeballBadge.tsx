import { shortenQuantity } from "@/utils/userUtils";

const PokeballBadge = ({ pokeballs }: { pokeballs: number }) => {
  return (
    <div className='flex items-center justify-center gap-1'>
      <img
        className='w-[26px] invert opacity-80'
        src='https://raw.githubusercontent.com/gist/Galadirith/baaf38c7286b568973cc50a50ff57f4d/raw/34d60cae491bc505c212398b94f12705665c12fc/pokeball.svg'
        alt='pokeball'
      />
      <h3
        className='text-gray-200 font-semibold text-lg'
        style={{ fontFamily: 'Poppins' }}
      >
        {shortenQuantity(pokeballs)}
      </h3>
    </div>
  );
};

export default PokeballBadge;
