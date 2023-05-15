import { Link } from 'react-router-dom';

const pokemonCoinImage =
  'https://res.cloudinary.com/dlekwh1wn/image/upload/v1683075187/pokemoncoins.png';

const DailyRewardArticle = () => {
  return (
    <Link to='/dailyrewards'>
      <article
        style={{ fontFamily: 'Genshin-Regular' }}
        className='w-full relative z-10 border-2 hover:border-gray-200 cursor-pointer border-secondary flex items-center justify-center flex-col rounded-2xl h-full bg-gradient-to-b from-[#FDD89A] to-[#8A645F]'
      >
        <img
          src={pokemonCoinImage}
          alt='pokemon'
          
          className='z-10 h-[70px] md:h-[120px] '
        />
        <h3 className='text-gray-200 hidden md:block tracking-wider relative z-10 uppercase text-2xl text-center mt-2 font-extrabold'>
          Daily Rewards
        </h3>
        <div className='absolute z-0 inset-0 bg-[url("https://assets.codepen.io/13471/sparkles.gif")] rounded-2xl shadow-lg opacity-[0.1]'></div>
      </article>
    </Link>
  );
};

export default DailyRewardArticle;



