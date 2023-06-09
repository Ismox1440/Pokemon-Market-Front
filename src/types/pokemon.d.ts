import { User } from "./user";

export interface Pokemon {
  baseStats: IStats
  lastLovePotion: Date
  evolvesTo?: Pokemon[]
  createdDate?: Date;
  name: string;
  createdDate: Date;
  height: number;
  weight: number;
  images?: imagesType;
  types: pokemonType[];
  baseExperience?: number;
  species: string;
  abilities: pokemonAbility[];
  stats: IStats;
  isTraining: isTraining;
  moves: pokemonMove[];
  onSale: boolean;
  id: number;
  pokeApiId: number;
  price?: number;
  varieties?: Pokemon[];
  evolvesFrom?: Pokemon;
  captureRate: number;
  level: number;
  exp: number;
  isLegendary: boolean;
  isMythical: boolean;
  shape?: nameandurl;
  color?: nameandurl;
  eggGroup?: string[];
  minLevelToEvolve?: number;
  growthRate: IGrowthRate;
  generation: string;
  isShiny?: boolean;
  isEgg?: boolean;
  _id: string
  owner?: User
}

interface Stats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

type nameandurl = { name: string; url: string };

interface GrowthRate {
  formula: string;
  name: string;
  id: string;
  levels: level[];
}
type level = {
  level: number;
  experience: number;
};

type pokemonMove = nameandurl;
type imagesType = { default?: string; shiny?: string };
type pokemonType = nameandurl;
type pokemonAbility = nameandurl;
type isTraining = {
  training: boolean;
  trainingStartDate?: Date;
};
