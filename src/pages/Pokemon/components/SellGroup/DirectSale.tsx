import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, UnstyledButton } from '@mantine/core';
import { IPokemon } from '@/types/pokemon';
import { sellPokemon } from '@/services/sellPokemon';
import { toast } from 'sonner';
import useUser from '@/hooks/useUser';
import { useSellDirectPokemonMutation } from '@/redux/api/userEndpoint';
import { IUser } from '@/types/user';

const getDirectPrice = (pokemon: IPokemon) => {
  const { stats, isLegendary, isMythical } = pokemon;
  let price = 0;
  for (let stat in stats) {
    price += stats[stat as keyof typeof stats];
  }
  if (isLegendary) price *= 25;
  else if (isMythical) price *= 50;
  else price *= 10;
  return Math.floor(price);
};

function DirectSale({ pokemon, user }: { pokemon: IPokemon, user: IUser }) {
  const [opened, { open, close }] = useDisclosure(false); 
  const [sell] = useSellDirectPokemonMutation();
  const handleSell = () => {
    close();
    toast.success('Pokemon sold!');
    sell({ pokemon, user, price: getDirectPrice(pokemon) * 2 });
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title='Direct sale' centered>
        <div className='flex my-6 flex-col items-center justify-center'>
          <img
            className='max-w-[50px]'
            src='https://i.seadn.io/gae/f5jYkHL3Rp5IwFdrCgnubHGrLo45Z8JCIU8AlKMI6Bw59HxrcW93FYmex0Lh1if0jQsRCutywG2tBSXLoTGbveVrt_oLdR6Nq2UJ?auto=format&w=1000'
            alt='coin'
          />
          <h3
            className='text-lg text-gray-200 font-bold'
            style={{ fontFamily: 'Poppins' }}
          >
            {getDirectPrice(pokemon)}
          </h3>
        </div>
        <h2 style={{ fontFamily: 'Poppins' }} className='text-md text-gray-300'>
          The system will buy your Pokemon and you will receive the following
          coins immediately. Are you sure you want to sell your Pokemon?
        </h2>
        <Group position='center' mt={20}>
          <Button onClick={close} variant='light' color='red'>
            Cancel
          </Button>
          <Button onClick={handleSell} variant='light' color='green'>
            Accept
          </Button>
        </Group>
      </Modal>

      <Group position='center'>
        <UnstyledButton
          className='hover:bg-[url("https://wiki.hoyolab.com/_nuxt/img/menu-active.0e4a5dd.png")] bg-no-repeat bg-contain bg-center  px-4 py-2 text-gray-200 text-lg'
          onClick={open}
        >
          Direct sale
        </UnstyledButton>
      </Group>
    </>
  );
}

export default DirectSale;
