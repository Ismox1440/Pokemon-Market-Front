import PokemonCardLoading from '@/components/CardPokemon/Loading';

const LoadingCardList = () => {
  const newArr = new Array(10).fill(0);
  return (
    <div className='flex flex-wrap  mx-auto items-center justify-center'>
      {newArr.map(() => (
        <PokemonCardLoading />
      ))}
    </div>
  );
};

export default LoadingCardList;
