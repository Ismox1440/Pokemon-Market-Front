import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import useSellPokemon from '../../../hooks/useSellPokemon';
import { IPokemon } from '../../../types/pokemon';
import { sellPokemon } from '../../../services/sellPokemon';
import { toast } from 'sonner';
import useUser from '../../../hooks/useUser';

const getDirectPrice = (pokemon: IPokemon) => {
  const { stats, isLegendary, isMythical } = pokemon;
  let price = 0;
  for (let stat in stats) {
    price += stats[stat];
  }
  if (isLegendary) price *= 25;
  else if (isMythical) price *= 50;
  else price *= 10;
  return Math.floor(price);
};

function DirectSale({ pokemon }: { pokemon: IPokemon }) {
  const [opened, { open, close }] = useDisclosure(false);
  const { user } = useUser();
  const handleSell = () => {
    close();
    toast.promise(() => sellPokemon(pokemon._id, 'direct', user._id), {
      loading: 'Loading...',
      success: data => data,
      error: err => err,
    });
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
        <h2 className='text-md text-gray-300'>
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
        <Button
       
          size='md'
          leftIcon={<FontAwesomeIcon icon={faSitemap} />}
          onClick={open}
        >
          Direct sale
        </Button>
      </Group>
    </>
  );
}

export default DirectSale;
