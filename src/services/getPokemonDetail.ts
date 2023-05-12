const getPokemonDetail = async (pokemonUrl: string) => {
  const response = await fetch(pokemonUrl);
  const data = await response.json();
  return data;
};

export default getPokemonDetail;
