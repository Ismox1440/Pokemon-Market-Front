import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button, UnstyledButton } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHands } from '@fortawesome/free-solid-svg-icons';
import PriceImput from './PriceImput';
import { sellPokemon } from '../../../../services/sellPokemon';
import { toast } from 'sonner';
import { useState } from 'react';
import { useSellP2PPokemonMutation } from '@/redux/api/userEndpoint';
import { IPokemon } from '@/types/pokemon';
import { IUser } from '@/types/user';

function P2PMarketButton({ pokemon, user }: { pokemon: IPokemon, user: IUser, }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [sell] = useSellP2PPokemonMutation()
  const [value, setValue] = useState<number | 0>(1);

  const handleSell = () => {
    close();
    sell({pokemon, user, price: value})
    toast.success(`Pokemon ${pokemon.name} put up for sale`)
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title='P2P Sale' centered>
        <div className='flex gap-6 my-6 flex-col items-center justify-center'>
          <img
            className='max-w-[50px]'
            src='https://i.seadn.io/gae/f5jYkHL3Rp5IwFdrCgnubHGrLo45Z8JCIU8AlKMI6Bw59HxrcW93FYmex0Lh1if0jQsRCutywG2tBSXLoTGbveVrt_oLdR6Nq2UJ?auto=format&w=1000'
            alt='coin'
          />
          <PriceImput max={50000000} value={value} setValue={setValue} />
        </div>
        <h2 style={{fontFamily: "Poppins"}} className='text-md text-gray-300'>
          Publish your Pokémon with a price and wait for someone to buy it to
          receive your Coins. While it's up for sale, you can't interact with
          it. Good luck!{' '}
        </h2>
        <Group position='center' mt={20}>
          <Button variant='light' onClick={close} color='red'>
            Cancel
          </Button>
          <Button
            variant='light'
            color='green'
            onClick={() => {
              close();
              handleSell();
            }}
          >
            Accept
          </Button>
        </Group>
      </Modal>

      <Group position='center'>
        <UnstyledButton
          className='hover:bg-[url("https://wiki.hoyolab.com/_nuxt/img/menu-active.0e4a5dd.png")] bg-no-repeat bg-contain bg-center  px-4 py-2 text-gray-200 text-lg'
          onClick={open}
        >
          P2P Sale
        </UnstyledButton>
      </Group>
    </>
  );
}

export default P2PMarketButton;
