import { Button } from '@mantine/core';
import PriceImput from '../SellGroup/PriceImput';
import { IUser } from '@/types/user';
import { IPokemon } from '@/types/pokemon';
import { useUseItemMutation } from '@/redux/api/userEndpoint';
import { toast } from 'sonner';

const LovePotion = ({
  potionsCount,
  value,
  setValue,
  user,
  pokemon,
}: {
  value: number;
  potionsCount: number;
  user: IUser;
  pokemon: IPokemon;
  setValue: (value: number) => void;
}) => {
  const [trigger] = useUseItemMutation();
  const userPotions = user.items.find(item => item.item.name === 'Love Potion');
  if (!userPotions) return <></>;
  const handleUsePotion = async () => {
    trigger({ user, item: userPotions.item, count: value, pokemon });
    toast.success(`Used ${value} Love Potion`)
    setValue(0);
  };
  return (
    <div className='flex flex-col gap-2'>
      <h3 className='text-xl text-gray-300 mt-6'>Love potion</h3>
      <div className='w-fit flex flex-col gap-2'>
        <div
          className={`rounded-xl bg-pink-300 border-4 border-white cursor-pointer`}
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
            <span className='font-bold text-pink-900'>
              {potionsCount - value}
            </span>
          </div>
        </div>
        <PriceImput
          min={0}
          max={potionsCount}
          setValue={setValue}
          value={value}
        />
      </div>
      <Button
        onClick={handleUsePotion}
        disabled={value < 1 || userPotions.count < value}
        variant='default'
        color='pink'
      >
        Use
      </Button>
    </div>
  );
};

export default LovePotion;
