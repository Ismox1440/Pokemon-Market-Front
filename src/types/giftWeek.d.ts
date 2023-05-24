import { IItem } from './item';
import { IPokeball } from './pokeball';

export interface IGiftWeek {
  days: IGiftDay[];
}

export interface IGiftDay {
  day: number;
  coins: number;
  gifts: IGift[];
}

export interface IGift {
  count: number;
  giftItem: IPokeball | IItem;
  giftItemRef: string;
  _id: string;
}
