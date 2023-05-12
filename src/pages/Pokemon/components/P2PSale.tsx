import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHands, faShop, faSitemap } from '@fortawesome/free-solid-svg-icons';
import PriceImput from './PriceImput';
import { sellPokemon } from '../../../services/sellPokemon';
import { toast } from 'sonner';
import { useState } from 'react';

function P2PMarketButton({ pokemonId, userId }: { [key: string]: string }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<number | 0>(1);

  const handleSell = () => {
    close();
    toast.promise(() => sellPokemon(pokemonId, 'p2p', userId, value), {
      loading: 'Loading...',
      success: data => data,
      error: err => err,
    });
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
        <h2 className='text-md text-gray-300'>
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
        <Button
          size='md'
          leftIcon={<FontAwesomeIcon icon={faHands} />}
          onClick={open}
        >
          P2P Sale
        </Button>
      </Group>
    </>
  );
}

export default P2PMarketButton;
