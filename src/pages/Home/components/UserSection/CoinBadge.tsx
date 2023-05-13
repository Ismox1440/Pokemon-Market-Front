import { shortenQuantity } from "@/utils/userUtils";

const CoinBadge = ({coins}: {coins: number}) => {
  return (
    <div className='flex items-center justify-center gap-1'>
      <img
        className='w-[32px]'
        src='https://i.seadn.io/gae/f5jYkHL3Rp5IwFdrCgnubHGrLo45Z8JCIU8AlKMI6Bw59HxrcW93FYmex0Lh1if0jQsRCutywG2tBSXLoTGbveVrt_oLdR6Nq2UJ?auto=format&w=1000'
        alt='coin'
      />
      <h3
        className='text-gray-200 font-semibold text-lg'
        style={{ fontFamily: 'Genshin-regular' }}
      >
        {shortenQuantity(coins)}
      </h3>
    </div>
  );
};

export default CoinBadge;
