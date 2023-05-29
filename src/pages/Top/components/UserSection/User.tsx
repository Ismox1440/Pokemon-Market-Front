import { User } from '@/types';
import { shortenQuantity } from '@/utils/userUtils';
import { faBolt, faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  UnstyledButtonProps,
  Group,
  Avatar,
  Text,
  createStyles,
} from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles(theme => ({
  user: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },
}));

interface UserButtonProps extends UnstyledButtonProps {
  user: User;
  index: number;
  stats?: number;
}

function User({ stats, index, user, ...others }: UserButtonProps) {
  const { classes } = useStyles();
  return (
    <Link
      to={`/profile/${user._id}`}
      className={classes.user + ' rounded-lg lg:min-w-[400px]'}
      {...others}
    >
      <Group>
        <Avatar src={user.image} radius='xl' />

        <div style={{ flex: 1 }}>
          <Text size='sm' weight={500}>
            {user.username}
          </Text>

          {stats ? (
            <Text className='flex gap-1 items-center' color='dimmed' size='xs'>
              <FontAwesomeIcon icon={faBolt} />
              {shortenQuantity(stats)}
            </Text>
          ) : (
            <Text className='flex gap-1 items-center' color='dimmed' size='xs'>
              <FontAwesomeIcon icon={faCoins} />
              {shortenQuantity(user.coins)}
            </Text>
          )}
        </div>
        <div
          style={{ fontFamily: 'Poppins' }}
          className='ml-11 text-sm font-bold text-gray-400 flex items-center justify-center bg-secondary h-6 w-6 py-1 rounded-full'
        >
          {index}
        </div>
      </Group>
    </Link>
  );
}

export default User;
