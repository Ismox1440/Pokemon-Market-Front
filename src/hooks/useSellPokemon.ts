import React, { useEffect, useState } from 'react';
import { sellPokemon } from '../services/sellPokemon';
import useUser from './useUser';
import { toast } from 'sonner';

const useSellPokemon = () => {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | undefined>();
  const [data, setData] = useState(undefined);

  const sell = async (pokemon_id: string, typeSale: 'p2p' | 'direct') => {
    if (!user) {
      setIsError('User not found');
      return;
    }
    setIsLoading(true);
    try {
      const res = await sellPokemon(pokemon_id, typeSale, user._id);
      if (res.status !== 200) throw new Error(res.message);
      setData(res);
    } catch (error: any) {
        toast.error(error.message)
      setIsError(error.message ?? 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return { sell, isLoading, isError, data };
};

export default useSellPokemon;
