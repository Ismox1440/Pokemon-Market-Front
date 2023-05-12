import {
  createStyles,
  Table,
  Progress,
  Anchor,
  Text,
  Group,
  ScrollArea,
  rem,
  Avatar,
} from '@mantine/core';

const useStyles = createStyles(theme => ({
  progressBar: {
    '&:not(:first-of-type)': {
      borderLeft: `${rem(3)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      }`,
    },
  },
}));

interface TableReviewsProps {
  data: {
    title: string;
    author: string;
    year: number;
    reviews: { positive: number; negative: number };
    image: string;
  }[];
}

function UserPokemonsList({ data }: TableReviewsProps) {
  const { classes, theme } = useStyles();

  const rows = data.map(row => {
    const totalReviews = row.reviews.negative + row.reviews.positive;
    const positiveReviews = (row.reviews.positive / totalReviews) * 100;
    const negativeReviews = (row.reviews.negative / totalReviews) * 100;

    return (
      <tr key={row.title}>
        <td>
          <Anchor
            component='button'
            className='flex items-center justify-center'
            fz='sm'
          >
            <Avatar src={row.image} />
          </Anchor>
        </td>
        <td className='text-center'>
          <Anchor
            component='button'
            className='flex items-center justify-center'
            fz='sm'
          >
            {row.title}
          </Anchor>
        </td>

        <td>{row.year}</td>

        <td>{Intl.NumberFormat().format(totalReviews)}</td>
      </tr>
    );
  });

  return (
    <ScrollArea>
      <Table  verticalSpacing='xs'>
        <thead>
          <tr>
            <th>Pokemon</th>
            <th>Name</th>
            <th>Rarity</th>
            <th>Nivel</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

export default UserPokemonsList;
