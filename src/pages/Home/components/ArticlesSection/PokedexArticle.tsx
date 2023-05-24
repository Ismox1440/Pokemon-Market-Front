import { Link } from 'react-router-dom';

const pokedexImage =
  'https://res.cloudinary.com/dlekwh1wn/image/upload/v1683135421/pokedex_s3wx4w.png';
const PokedexArticle = () => {
  return (
    <Link to='/pokedex'>
      <article
        style={{ fontFamily: 'Genshin-Regular' }}
        className='w-full relative z-10 border-2 py-4 xl:py-0 hover:border-gray-500 transition-all cursor-pointer border-secondary flex items-center justify-center flex-col rounded-2xl h-full bg-gradient-to-b from-red-500 to-red-900'
      >
        <img
          src={pokedexImage}
          alt='pokedex'
          className='z-10 h-[70px] md:h-[120px] '
        />
        <h3 className='text-gray-200 hidden md:block tracking-wider relative z-10 uppercase text-2xl text-center mt-2 font-extrabold'>
          Pokedex
        </h3>
      </article>
    </Link>
  );
};

export default PokedexArticle;
