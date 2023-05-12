import { useState } from 'react';
import { useLovePotions } from '../../services/useLovePotion';
import { mutate } from 'swr';
import { baseURL } from '../../api/api';

const useLovePotion = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSucces, setIsSucces] = useState(false);
  const [isError, setIsError] = useState<unknown>(false);

  const trigger = async (
    pokemon_id: string,
    user_id: string,
    userPotionsId: string,
    value: number
  ) => {
    try {
      setIsLoading(true);
      await useLovePotions(pokemon_id, user_id, userPotionsId, value);
      setIsSucces(true);
    } catch (error) {
      setIsError(error);
    } finally {
      await mutate(`${baseURL}user/login`);
      await mutate(`${baseURL}pokemon/${pokemon_id}`);
      setIsLoading(false);
    }
  };

  return { isSucces, isLoading, isError, trigger };
};

export default useLovePotion;
