interface IPokemonResult {
  name: string;
  url: string;
}

const fetcher = (url: string) => fetch(url).then(res => res.json());
const getManyPokemons = (pokemonResults: IPokemonResult[]) => {
  const pokemonPromises = pokemonResults.map(pokemon => fetcher(pokemon.url));
  return Promise.all(pokemonPromises);
};

export default getManyPokemons;
