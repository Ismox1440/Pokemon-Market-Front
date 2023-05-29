import { Item } from "./item"
import { Pokeball } from "./pokeball"
import { Pokemon } from "./pokemon"

export interface User {
    description: string
    username: string
    email: string
    image: string
    coins: number,
    pokemons: Pokemon[]
    items: UserItem[]
    lastGiftDate: Date
    giftIndex: number
    pokeballs: UserPokeball[]
    _id: string
}

interface UserPokeball {
    count: number,
    pokeball: Pokeball
}


interface UserItem {
    count: number,
    _id?: string
    item: Item
}