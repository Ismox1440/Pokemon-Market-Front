import useUser from '@/hooks/useUser';
import { shortenQuantity } from '@/utils/userUtils';
import { faCoins, faFlask } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  createStyles,
  Header,
  Group,
  Burger,
  Container,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const useStyles = createStyles(theme => ({
  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background!,
        0.1
      ),
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();
  const { user } = useUser();
  const userPotions = user?.items.find(i => i.item.name === 'Love Potion');
  const userPokeballs = () => {
    let total = 0
    user?.pokeballs.forEach(i => {
      total += i.count
    })
    return total
  }
  return (
    <Header height={56} className='bg-secondary fixed border-none z-1000'>
      <Container className='max-w-7xl'>
        <div className={classes.inner}>
          <Group spacing={5} className={classes.links}>
            <div
              style={{ fontFamily: 'Poppins' }}
              className='flex font-semibold items-center bg-primary p-2 rounded-md text-sm justify-center gap-1 text-gray-200'
            >
              <FontAwesomeIcon icon={faCoins} />
              {shortenQuantity(user?.coins ?? 0)}
            </div>
            <div
              style={{ fontFamily: 'Poppins' }}
              className='flex font-semibold items-center bg-primary p-2 rounded-md text-sm justify-center gap-1 text-gray-200'
            >
              <FontAwesomeIcon icon={faFlask} />
              {shortenQuantity(userPotions?.count ?? 0)}
            </div>
            <div
              style={{ fontFamily: 'Poppins' }}
              className='flex font-semibold items-center bg-primary p-2 rounded-md text-sm justify-center gap-1 text-gray-200'
            >
              <img
                className='w-[20px] invert opacity-80'
                src='https://raw.githubusercontent.com/gist/Galadirith/baaf38c7286b568973cc50a50ff57f4d/raw/34d60cae491bc505c212398b94f12705665c12fc/pokeball.svg'
                alt='pokeball'
              />
              {shortenQuantity(userPokeballs())}
            </div>
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size='sm'
            color='#fff'
          />
        </div>
      </Container>
    </Header>
  );
}
