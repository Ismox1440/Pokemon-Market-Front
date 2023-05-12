import { useState } from 'react';
import { usepokeball } from '../services/pokeballs';

const usePokeball = () => {
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<any>(undefined);
  const trigger = async (userId: string, pokeballId: string) => {
    setIsloading(true);
    try {
      const data = await usepokeball(userId, pokeballId);
      setData(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsloading(false);
    }
  };
  return { data, trigger, isLoading, isError };
};

export default usePokeball;
