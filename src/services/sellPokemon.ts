import { mutate } from 'swr';
import { baseURL } from '../api/api';

type typeSale = 'p2p' | 'direct';

export const sellPokemon = async (
  pokemon_id: string,
  typeSale: typeSale,
  user_id: string,
  price?: number
) => {
  try {
    const response = await fetch(`${baseURL}user/sellpokemon`, {
      method: 'POST',
      body: JSON.stringify({ user_id, pokemon_id, typeSale, price }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (data.status !== 200) throw new Error(data.message);
    return data;
  } catch (error: any) {
    throw error.message;
  } finally {
    mutate(`${baseURL}user/login`);
    mutate(`${baseURL}pokemon/${pokemon_id}`);
  }
};
