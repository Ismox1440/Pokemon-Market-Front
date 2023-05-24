import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import { IPokemon } from '@/types';
import PokemonCard from '@/components/CardPokemon/CardPokemon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import PokemonCardLoading from '@/components/CardPokemon/Loading';

function PokemonCarousel({
  pokemons,
  loading,
}: {
  pokemons: IPokemon[];
  loading: boolean;
}) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = pokemons.map(item => (
    <Carousel.Slide key={item._id}>
      <PokemonCard pokemon={item} />
    </Carousel.Slide>
  ));
  const loadingArr = new Array(6).fill(0);
  const loadingSlides = loadingArr.map((_, index) => (
    <Carousel.Slide key={index}>
      <PokemonCardLoading />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize='0%'
      slideGap='xs'
      align='start'
      nextControlIcon={
        <FontAwesomeIcon style={{ color: '#fff' }} icon={faCaretRight} />
      }
      previousControlIcon={
        <FontAwesomeIcon style={{ color: '#fff' }} icon={faCaretLeft} />
      }
      slidesToScroll={mobile ? 2 : 3}
      variant='fill'
    >
      {loading ? loadingSlides : slides}
    </Carousel>
  );
}

export default PokemonCarousel;
