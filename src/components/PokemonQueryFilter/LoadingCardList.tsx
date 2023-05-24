import PokemonCardLoading from '@/components/CardPokemon/Loading';

const LoadingCardList = () => {
  const newArr = new Array(10).fill(0);
  return (
    <div className='flex flex-wrap mx-auto items-center justify-center'>
      {newArr.map((_, index) => (
        <div key={index} className='m-[10px]'>
          <PokemonCardLoading />
        </div>
      ))}
    </div>
  );
};

export default LoadingCardList;
