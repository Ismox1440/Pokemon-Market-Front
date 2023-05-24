import {
  createStyles,
  Progress,
  Box,
  Text,
  Group,
  Paper,
  SimpleGrid,
  rem,
} from '@mantine/core';
import { IconDeviceAnalytics } from '@tabler/icons-react';

const useStyles = createStyles(theme => ({
  progressLabel: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    fontSize: theme.fontSizes.sm,
  },

  stat: {
    borderBottom: `${rem(3)} solid`,
    paddingBottom: rem(5),
  },

  statCount: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.3,
  },

  diff: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    display: 'flex',
    alignItems: 'center',
  },

  icon: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },
}));

interface StatsSegmentsProps {
  total: number;
  mythicalCount: number;
  commonCount: number;
  legendaryCount: number;
}

function PokemonRaritiesProgress({
  total,
  legendaryCount,
  mythicalCount,
  commonCount,
}: StatsSegmentsProps) {
  const { classes } = useStyles();

  const data = [
    {
      label: 'Legendary',
      count: legendaryCount,
      part: (legendaryCount / total) * 100,
      color: '#c7a124',
    },
    {
      label: 'Mythical',
      count: mythicalCount,
      part: (mythicalCount / total) * 100,
      color: '#6224c7',
    },
    {
      label: 'Common',
      count: commonCount,
      part: (commonCount / total) * 100,
      color: '#fff',
    },
  ];

  const segments = data.map(segment => ({
    value: segment.part,
    color: segment.color,
    label:
      segment.part > 10 ? `${segment.part.toString().slice(0, 3)}%` : undefined,
  }));

  const descriptions = data.map(stat => (
    <Box
      key={stat.label}
      sx={{ borderBottomColor: stat.color }}
      className={classes.stat}
    >
      <span>{stat.label}</span>

      <Group position='apart' align='flex-end' spacing={0}>
        <Text fw={700}>{stat.count}</Text>
        <Text c={stat.color} fw={700} size='sm' className={classes.statCount}>
          {stat.part.toString().slice(0, 3)}%
        </Text>
      </Group>
    </Box>
  ));

  return (
    <Paper
      className='bg-secondary relative border-2 border-secondary hover:border-gray-500'
      p='md'
      radius='md'
    >
      <Group position='apart'>
        <Group align='flex-end' spacing='xs'>
          <h3 className='lg:text-xl'>Pokemons {total}</h3>
        </Group>
        <IconDeviceAnalytics
          size='1.4rem'
          className={classes.icon}
          stroke={1.5}
        />
      </Group>

      <Text c='dimmed' fz='sm'>
        This is the percentage of Pokémons you have based on their rarity
      </Text>

      <Progress
        sections={segments}
        size={34}
        classNames={{ label: classes.progressLabel }}
        mt={40}
      />

      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'xs', cols: 1 }]} mt='xl'>
        {descriptions}
      </SimpleGrid>
    </Paper>
  );
}

export default PokemonRaritiesProgress;
