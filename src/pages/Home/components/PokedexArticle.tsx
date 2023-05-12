import { Link } from "react-router-dom";

const pokedexImage =
  'https://res.cloudinary.com/dlekwh1wn/image/upload/v1683135421/pokedex_s3wx4w.png';
const PokedexArticle = () => {
  return (
    <Link to={'/pokedex'}>
    <article className='w-full cursor-pointer hover:border-gray-200 transition-all bg-gradient-to-b from-red-500 to-red-900 bg-cover bg-center bg-red-500 relative z-10 flex items-center justify-center flex-col rounded-2xl h-full  backdrop-blur-2xl border-2 border-gray-700'>
      <figure className='h-[158px] flex items-center justify-center'>
        <img src={pokedexImage} alt='pokedex' className='z-10 h-[120px] ' />
      </figure>
      <h3
        style={{ fontFamily: 'Genshin-Regular' }}
        className='text-gray-100 uppercase tracking-wide relative z-10 text-3xl text-center mt-2 font-extrabold'
      >
        Pokedex
      </h3>
    </article>
    </Link>
  );
};

export default PokedexArticle;
