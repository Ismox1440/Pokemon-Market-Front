import { IItem } from "./item"
import { IPokeball } from "./pokeball"
import { IPokemon } from "./pokemon"

export interface IUser {
    description: string
    username: string
    email: string
    image: string
    coins: number,
    pokemons: IPokemon[]
    items: IUserItem[]
    lastGiftDate: Date
    giftIndex: number
    pokeballs: IUserPokeball[]
    _id: string
}

interface IUserPokeball {
    count: number,
    pokeball: IPokeball
}


interface IUserItem {
    count: number,
    _id?: string
    item: IItem
}