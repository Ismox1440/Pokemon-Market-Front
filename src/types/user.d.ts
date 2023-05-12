import { IPokeball } from "./pokeball"
import { IPokemon } from "./pokemon"

export interface IUser {
    username: string
    email: string
    image: string
    coins: number,
    pokemons: IPokemon[]
    items: IItems[]
    lastGiftDate?: Date
    giftIndex?: number
    pokeballs: userPokeball[]
    _id: string
}


type userPokeball = {
    count: number,
    pokeball: IPokeball
}


interface IItems {
    name: string
    count: number
    image: string
    description: string
}