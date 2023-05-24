import { IUser, IUserItem, IUserPokeball, IItem, IPokeball } from '@/types';

export const getPokeballsLength = (pokeballsArr: IUserPokeball[]) => {
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

export const addItem = (
  item: IItem | IPokeball,
  user: IUser,
  count: number
): { items: IUserItem[] } | { pokeballs: IUserPokeball[] } => {
  let userItem: IUserItem | IUserPokeball | undefined;
  if (item.name.toLowerCase().includes('ball')) {
    userItem = user.pokeballs.find(
      userItem => userItem.pokeball._id === item._id
    );
    if (!userItem) {
      return { pokeballs: [...user.pokeballs, { pokeball: item, count }] } as {
        pokeballs: IUserPokeball[];
      };
    }
    const newArr = user.pokeballs.filter(p => p !== userItem);
    return {
      pokeballs: [
        ...newArr,
        { count: userItem.count + count, pokeball: item } as IUserPokeball,
      ],
    };
  }
  userItem = user.items.find(userItem => userItem.item._id === item._id);
  if (!userItem) {
    return { items: [...user.items, { _id: item._id, count, item }] } as {
      items: IUserItem[];
    };
  }
  const newArr: IUserItem[] = user.items.filter(p => p !== userItem);
  return {
    items: [...newArr, { count: userItem.count + count, item }],
  } as { items: IUserItem[] };
};

export const convertHours = (hours: number) => {
  if (hours > 24) {
    return `${Math.floor(hours / 24)}d ${hours % 24}h`;
  }
  return `${hours}h`;
};
