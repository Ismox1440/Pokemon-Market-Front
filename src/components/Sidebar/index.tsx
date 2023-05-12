import { useState } from 'react';
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  rem,
} from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
  IconBuildingStore,
  IconEgg,
  IconCalculator,
  IconGift,
} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = createStyles(theme => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
}));

interface NavbarLinkProps {
  icon: React.FC<any>;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position='right' transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon size='1.2rem' stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home', to:"/" },
  { icon: IconBuildingStore, label: 'Market', to:"/market" },
  { icon: IconUser, label: 'Profile', to: '/userpokemons' },
  { icon: IconEgg, label: 'Catch Pokemon', to:'/random' },
  { icon: IconCalculator, label: 'Pokedex', to: '/pokedex' },
  { icon: IconGift, label: 'Daily Rewards', to: '/dailyrewards' },
];

export function Sidebar() {
  const navigate = useNavigate()

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={link.to === window.location.pathname}
      onClick={() => {
       
        navigate(link.to)
      }}
    />
  ));

  return (
    <Navbar
      className=' fixed top-0 left-0'
      height={'full'}
      width={{ base: 80 }}
      p='md'
    >
      <Navbar.Section grow mt={50}>
        <Stack justify='center' spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify='center' spacing={0}>
          <NavbarLink icon={IconLogout} label='Logout' />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
