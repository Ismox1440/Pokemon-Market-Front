import { mutate } from 'swr';
import { baseURL } from '../api/api';

export const claimLovePotion = async (pokemon_id: string, user_id: string) => {
  try {
    const response = await fetch(
      `${baseURL}pokemon/${pokemon_id}/claim-lovepotion`,
      {
        method: 'POST',
        body: JSON.stringify({ user_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
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
