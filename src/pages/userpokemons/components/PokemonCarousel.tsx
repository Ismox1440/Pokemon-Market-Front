import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
} from '@mantine/core';
import { IPokemon } from '../../../types/pokemon';
import PokemonCard from '../../Home/components/PokemonCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const useStyles = createStyles(theme => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow='md'
      p='xl'
      radius='md'
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size='xs'>
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant='white' color='dark'>
        Read article
      </Button>
    </Paper>
  );
}

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    category: 'beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];

function PokemonCarousel({pokemons}: {pokemons: IPokemon[]}) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = pokemons.map(item => (
    <Carousel.Slide key={item._id}>
      <PokemonCard pokemon={item}/>
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize='0%'
      slideGap='xs'
      align='start'
      nextControlIcon={<FontAwesomeIcon style={{color: '#fff'}} icon={faCaretRight}/>}
      previousControlIcon={<FontAwesomeIcon style={{color: '#fff'}} icon={faCaretLeft}/>}

      slidesToScroll={mobile ? 2 : 3}
     variant='fill'
    >
      {slides}
    </Carousel>
  );
}

export default PokemonCarousel;
