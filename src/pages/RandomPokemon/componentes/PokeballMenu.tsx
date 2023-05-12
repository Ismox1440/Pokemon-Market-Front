import {
  Button,
  Divider,
  Group,
  HoverCard,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  createStyles,
  rem,
} from '@mantine/core';
import { IUser } from '../../../types/user';

const useStyles = createStyles(theme => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

interface IProps {
  user: IUser;
  trigger: Function;
  isLoading: boolean;
}

const PokeballMenu = ({ user, trigger, isLoading }: IProps) => {
  const { classes, theme } = useStyles();
  const pokeballs = user.pokeballs.map(item => {
    return {
      title: item.pokeball.name,
      description: item.pokeball.description,
      icon: item.pokeball.image,
      count: item.count,
      _id: item.pokeball._id,
    };
  });
  const items = pokeballs.map(item => (
    <UnstyledButton
      onClick={() => {
        trigger(user._id, item._id);
      }}
      className={classes.subLink}
      key={item.title}
    >
      <Group noWrap align='flex-start'>
        <ThemeIcon size={34} variant='default' radius='md'>
          <img src={item.icon} alt='' />
          {/* <item.icon size={rem(22)} color={theme.fn.primaryColor()} /> */}
        </ThemeIcon>
        <div>
          <Text size='sm' fw={500}>
            {item.title} x{item.count}
          </Text>
          <Text size='xs' color='dimmed'>
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));
  return (
 
      <HoverCard
        width={600}
        position='bottom'
        radius='md'
        shadow='md'
        withinPortal
        disabled={isLoading}
      >
        <HoverCard.Target>
          <Button variant='default' loading={isLoading}>
            Catch Pokemon
          </Button>
        </HoverCard.Target>

        <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
          <div>
            <h3 style={{fontFamily: "Poppins"}} className='text-gray-200 text-lg font-bold'>Select a Pokeball</h3>
            <Text className='text-gray-300' fw={300}>
            When selecting a pokeball, it will be used
            </Text>
          </div>

          <Divider
            my='sm'
            mx='-md'
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <SimpleGrid cols={2} spacing={0}>
            {items}
          </SimpleGrid>
        </HoverCard.Dropdown>
      </HoverCard>
  
  );
};

export default PokeballMenu;
