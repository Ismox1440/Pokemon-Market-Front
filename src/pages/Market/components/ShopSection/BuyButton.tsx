import useUser from '@/hooks/useUser';
import PriceImput from '@/pages/Pokemon/components/SellGroup/PriceImput';
import { useBuyItemMutation } from '@/redux/api/userEndpoint';
import { IItem } from '@/types/item';
import { shortenQuantity } from '@/utils/userUtils';
import { Button } from '@mantine/core';
import { useState } from 'react';

const BuyButton = ({
  itemType,
  item,
}: {
  itemType: 'pokeball' | 'item';
  item: IItem;
}) => {
  const {price} = item
  const [value, setValue] = useState(1);
  const [buy] = useBuyItemMutation();
  const { user } = useUser();
  const handleBuy = async () => {
    if (!user) return;
    buy({
      itemType,
      count: value,
      user,
      item,
    });
  };
  if (!user) return <div>Loading...</div>;
  return (
    <div className='flex items-center justify-center mt-2 gap-6'>
      <span>{shortenQuantity(price * value)}</span>
      <div className='max-w-[50%]'>
        <PriceImput
          min={1}
          max={user.coins / price}
          setValue={setValue}
          value={value}
        />
      </div>
      <Button
        onClick={handleBuy}
        disabled={value * price > user.coins}
        color='green'
        variant='default'
      >
        Buy
      </Button>
    </div>
  );
};

export default BuyButton;
