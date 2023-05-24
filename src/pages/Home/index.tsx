import { Container, Grid, SimpleGrid } from '@mantine/core';
import MainLayout from '@/components/MainLayout';
import { ArticlesSection, UserSection } from './components';

const Home = () => {
  return (
    <MainLayout>
      <div className='mt-40 w-full'>
        <Container my='md' className='lg:max-w-full 2xl:max-w-[90%]'>
          <SimpleGrid
            cols={2}
            spacing='md'
            className='gap-11 lg:gap-[1rem] xl:gap-[4rem] xl:min-h-[610px]'
            breakpoints={[{ maxWidth: 'lg', cols: 1 }]}
          >
            <UserSection />
            <Grid className=''>
              <ArticlesSection />
            </Grid>
          </SimpleGrid>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Home;
