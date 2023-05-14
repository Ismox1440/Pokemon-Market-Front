import { useRef, useState } from 'react';
import {
  createStyles,
  NumberInput,
  NumberInputHandlers,
  ActionIcon,
  rem,
} from '@mantine/core';
import { IconPlus, IconMinus } from '@tabler/icons-react';
import useLovePotion from '../../../hooks/pokemon/useLovePotion';

const useStyles = createStyles(theme => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${rem(6)} ${theme.spacing.xs}`,
    borderRadius: theme.radius.sm,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3]
    }`,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,

    '&:focus-within': {
      borderColor: theme.colors[theme.primaryColor][6],
    },
  },

  control: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3]
    }`,

    '&:disabled': {
      borderColor:
        theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3],
      opacity: 0.8,
      backgroundColor: 'transparent',
    },
  },

  input: {
    textAlign: 'center',
    paddingRight: `${theme.spacing.sm} !important`,
    paddingLeft: `${theme.spacing.sm} !important`,
    height: rem(28),
    flex: 1,
  },
}));

interface QuantityInputProps {
  min?: number;
  max?: number;
  value: number | '';
  setValue: (value: number) => void;
}

function PriceImput({
  min = 0,
  max = 10,
  value,
  isLoading,
  setValue,
}: QuantityInputProps) {
  const { classes } = useStyles();
  const handlers = useRef<NumberInputHandlers>(null);
  return (
    <div className={classes.wrapper}>
      <ActionIcon<'button'>
        size={28}
        variant='transparent'
        onClick={() => handlers.current?.decrement()}
        disabled={value === min || isLoading}
        className={classes.control}
        onMouseDown={event => event.preventDefault()}
      >
        <IconMinus size='1rem' stroke={1.5} />
      </ActionIcon>

      <NumberInput
        variant='unstyled'
        min={min}
        max={max}
        handlersRef={handlers}
        disabled={isLoading}
        value={value}
        onChange={setValue}
        classNames={{ input: classes.input }}
      />

      <ActionIcon<'button'>
        size={28}
        variant='transparent'
        onClick={() => handlers.current?.increment()}
        disabled={value === max || isLoading}
        className={classes.control}
        onMouseDown={event => event.preventDefault()}
      >
        <IconPlus size='1rem' stroke={1.5} />
      </ActionIcon>
    </div>
  );
}

export default PriceImput;
