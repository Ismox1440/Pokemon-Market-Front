import { Sidebar } from '../components/Sidebar';
import { Container, Grid, SimpleGrid } from '@mantine/core';

import PokedexArticle from './Home/components/PokedexArticle';
import DailyRewardArticle from './Home/components/DailyRewardArticle';
import MarketPlace from './Home/components/MarketPlaceArticle';
import UserInfoSection from './Home/components/UserInfoSection';

const Home = () => {
  return (
    <div className='flex h-screen bg-gray-900'>
      <Sidebar />
      <div className='w-full h-auto'>
        <figure className='block overflow-hidden pt-[36%] absolute top-0 left-0 h-6 w-full z-1'>
          <div className='-z-1 bg-[url("https://i.pinimg.com/originals/3e/e7/45/3ee7459cfdbce3cce499d2fd0583f5a9.jpg")] bg-cover bg-center absolute shadow-[inset_-0px_-500px_800px_#111010] top-0 left-0 right-0 w-full h-full object-cover block'></div>
        </figure>
        <Container className='w-full h-auto max-w-[100rem] mt-[10rem]' my='md'>
          <SimpleGrid cols={2} spacing='xl'>
            <UserInfoSection />
            <Grid className='' gutter='xl'>
              <Grid.Col className=''>
                <MarketPlace />
              </Grid.Col>
              <Grid.Col className='' span={6}>
                <PokedexArticle />
              </Grid.Col>
              <Grid.Col span={6}>
                <DailyRewardArticle />
              </Grid.Col>
            </Grid>
          </SimpleGrid>
        </Container>
      </div>
    </div>
  );
};

export default Home;

{
  /* <div className='h-screen w-full bg-cover flex flex-col bg-[url("https://preview.redd.it/74crvhb3vyn61.png?auto=webp&s=295b443305c8c16c86f96b5fcd65971a794950be")] shadow-[inset_-0px_-900px_5000px_#000] bg-gray-900 gap-6 '>
  <div className='p-11 relative z-10 w-fit rounded-2xl mt-11 bg-gradient-to-b from-[#FDD89A] to-[#8A645F]'>
    <img
      src='https://res.cloudinary.com/dlekwh1wn/image/upload/v1683075187/pokemoncoins.png'
      alt=''
      width={200}
      className='relative z-10'
    />
    <h3 className='text-gray-200 relative z-10 uppercase text-lg text-center mt-2 font-extrabold'>
      Current Balance
    </h3>
    <div className=' mx-auto w-fit rounded z-10 relative text-gray-200 uppercase text-xl text-center font-extrabold flex items-center justify-center gap-2'>
      <FontAwesomeIcon icon={faCoins} />
      <h4 className='font-mono text-2xl'>400</h4>
    </div>
    <div className='absolute z-0 inset-0 bg-[url("https://assets.codepen.io/13471/sparkles.gif")] rounded-2xl shadow-lg opacity-[0.1]'></div>
  </div>
  
  <figure className='block overflow-hidden pt-[36%]  relative -z-1'>
    <div className='-z-1 bg-[url("https://preview.redd.it/74crvhb3vyn61.png?auto=webp&s=295b443305c8c16c86f96b5fcd65971a794950be")] bg-cover bg-center absolute shadow-[inset_-0px_-500px_800px_#000] top-0 left-0 right-0 w-full h-full object-cover block' >

    </div>
  </figure>
  <div className='h-[25rem] rounded-xl w-[80%] mx-auto bg-cover bg-center shadow-[inset_-0px_-250px_250px_#000] border border-gray-300  bg-[url(https://setlivewallpaper.com/wp-content/uploads/2023/02/Pokemon-Emerald-Remake-Title-Screen-thumb.jpg)] mt-11'></div>
</div> */
}
