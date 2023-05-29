import { Item } from './item';
import { Pokeball } from './pokeball';

export interface GiftWeek {
  days: GiftDay[];
}

export interface GiftDay {
  day: number;
  coins: number;
  gifts: Gift[];
}

export interface Gift {
  count: number;
  giftItem: Pokeball | Item;
  giftItemRef: string;
  _id: string;
}
