import { mutate } from 'swr';
import { baseURL } from '../api/api';
import { toast } from 'sonner';

export const usepokeball = async (userId: string, pokeballId: string) => {
  const response = await fetch(`${baseURL}user/usepokeball`, {
    method: 'POST',
    body: JSON.stringify({
      user_id: userId,
      pokeball_id: pokeballId,
    }),
    headers: {
        'Content-Type': 'application/json',
        
      },
  });
  if(!response.ok) throw new Error('Error in fetching');
  toast.success('Pokeball used')
  await mutate(`${baseURL}user/login`)
  return await response.json();
};
