import { Grid } from '@mantine/core';
import MarketPlace from './MarketPlaceArticle';
import PokedexArticle from './PokedexArticle';
import DailyRewardArticle from './DailyRewardArticle';

const ArticlesSection = () => {
  return (
    <Grid>
      <Grid.Col>
        <MarketPlace />
      </Grid.Col>
      <Grid.Col span={6}>
        <PokedexArticle />
      </Grid.Col>
      <Grid.Col span={6}>
        <DailyRewardArticle />
      </Grid.Col>
    </Grid>
  );
};

export default ArticlesSection;
