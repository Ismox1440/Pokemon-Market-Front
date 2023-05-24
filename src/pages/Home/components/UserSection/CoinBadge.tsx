import { shortenQuantity } from '@/utils/userUtils';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CoinBadge = ({ coins }: { coins: number }) => {
  return (
    <div className='flex items-center text-gray-200 font-semibold text-lg justify-center gap-1'>
      <FontAwesomeIcon icon={faCoins} />
      <h3
        className=''
        style={{ fontFamily: 'Poppins' }}
      >
        {shortenQuantity(coins)}
      </h3>
    </div>
  );
};

export default CoinBadge;
