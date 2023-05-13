import { userPokeball } from '@/types/user';

export const getPokeballsLength = (pokeballsArr: userPokeball[]) => {
  let total = 0;
  pokeballsArr.forEach(item => {
    total += item.count;
  });
  return total;
};

export const shortenQuantity = (quantity: number) => {
  if (quantity > 1000000) {
    return `${(quantity / 1000000).toFixed(1)}M`;
  }
  if (quantity > 1000) {
    return `${(quantity / 1000).toFixed(1)}K`;
  }
  return quantity;
};
