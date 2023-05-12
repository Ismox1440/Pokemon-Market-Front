import { toast } from "sonner";
import { baseURL } from "../api/api";
import { mutate } from "swr";

export const useLovePotions = async (pokemon_id: string, user_id: string, item_id: string, count: number) => {
    try {
      const response = await fetch(
        `${baseURL}user/useitem`,
        {
          method: 'POST',
          body: JSON.stringify({ user_id, pokemon_id, count, item_id }),
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
    }
  };