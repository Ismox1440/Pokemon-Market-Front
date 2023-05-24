import { useBuyPokemonMutation } from '@/redux/api/userEndpoint';
import { IUser, IPokemon } from '@/types';
import { faCartShopping, faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Button } from '@mantine/core';

const SaleArticle = ({ pokemon, user }: { pokemon: IPokemon; user: IUser }) => {
  const { owner, price, onSale, name } = pokemon;
  const [buyPokemon, { isLoading }] = useBuyPokemonMutation();
  const handleBuy = async () => {
    buyPokemon({ pokemon, user });
  };
  return (
    <div className='bg-secondary  border-gray-700 rounded p-8 mt-11'>
      {pokemon?.owner && (
        <>
          <h3 className='text-gray-400 font-bold uppercase text-[10px]'>
            Owner
          </h3>
          <div className='flex  mt-2 gap-2'>
            <Avatar size='lg' radius='xl' src={owner?.image ?? ''} />

            <div className='flex mb-11 flex-col justify-start gap-1'>
              <span
                style={{ fontFamily: 'Poppins' }}
                className='text-gray-400 font-bold text-lg'
              >
                Ismael Saragusti
              </span>
            </div>
          </div>
        </>
      )}
      <div className=''>
        <h3 className='text-gray-400 font-bold uppercase text-[10px]'>Price</h3>
        <div className='flex mt-4 items-center text-gray-400 font-bold text-[30px] gap-2'>
          <FontAwesomeIcon icon={faCoins} />
          <h4 className=''>{price}</h4>
        </div>
      </div>
      <div className='mt-6'>
        <Button
          variant='outline'
          color='lime'
          leftIcon={<FontAwesomeIcon icon={faCartShopping} />}
          onClick={handleBuy}
          loading={isLoading}
          disabled={
            !onSale || !price || price > user.coins || owner?._id === user._id
          }
        >
          Buy
        </Button>
      </div>
    </div>
  );
};

export default SaleArticle;
