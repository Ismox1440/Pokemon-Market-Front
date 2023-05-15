import { Group } from '@mantine/core';
import DirectSale from './DirectSale';
import P2PMarketButton from './P2PSale';
import { IPokemon } from '@/types/pokemon';
import useUser from '@/hooks/useUser';

const SellGroup = ({
  pokemon,
  userId,
}: {
  pokemon: IPokemon;
  userId: string;
}) => {
  const { user } = useUser();
  if (!user) return <></>;
  return (
    <Group mt={80} className='flex items-center justify-center'>
      <DirectSale user={user} pokemon={pokemon} />
      <P2PMarketButton user={user} pokemon={pokemon} />
    </Group>
  );
};

export default SellGroup;
