import {
  SimpleGrid,
  Skeleton,
  Container,
  Stack,
  useMantineTheme,
  px,
  Indicator,
  UnstyledButton,
} from '@mantine/core';
import useSWR, { mutate } from 'swr';
import DayOne from './dayOne';
import FirstDay from './FirstDay';
import Gift from './Gift';
import Coin from './Coin';
import LastDay from './LastDay';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { toast } from 'sonner';
import { baseURL } from '../../../../api/api';

const getChild = (height: number) => (
  <Skeleton height={height} radius='md' animate={false} />
);
const BASE_HEIGHT = 500;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function Subgrid({ user }) {
  const [loading, setLoading] = useState(false);
  const { data } = useSWR('http://localhost:5000/weekgifts/current', fetcher);
  const theme = useMantineTheme();
  if (!data) return <div>Loading...</div>;
  const getGiftArr = (index: number) => {
    return data.days[index].gifts;
  };
  const handleClaim = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${baseURL}user/claimdailygift`, {
        method: 'POST',
        body: JSON.stringify({ user_id: user._id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      toast.success('Claimed');
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
      mutate('http://localhost:5000/user/login')
    }
  };
  console.log(user, 'user');
  return (
    <Container className='max-w-[80%]' my='md'>
      <SimpleGrid cols={4}>
        {/* <Indicator
          processing
          position='top-start'
          inline
          label={
            <span
              className='text-md font-bold '
              style={{ fontFamily: 'Genshin-Regular' }}
            >
              !
            </span>
          }
          size={32}
          color='red'>
        </Indicator> */}

        <FirstDay user={user} gifts={data?.days[0].gifts} />
        <Stack>
          <div
            className={`${
              user?.giftIndex !== 1 && 'grayscale'
            } flex flex-col gap-2 items-center justify-center h-[242px]`}
          >
            <h3 className='text-gray-200 text-2xl '>Day 2</h3>
            <div className='flex gap-2'>
              {data?.days[1].gifts.map(g => (
                <Gift gift={g} />
              ))}
              {data?.days[1].coins && <Coin count={data?.days[1].coins} />}
            </div>
            {user?.giftIndex === 1 && (
              <UnstyledButton
               onClick={handleClaim}
                style={{ fontFamily: 'Genshin-Regular' }}
                className='font-bold cursor-pointer mt-2 bg-[#EAE6D7] flex gap-2 items-center justify-center hover:scale-105 transition-all text-[#4E5668] p-2 px-20 rounded-full'
              >
                <FontAwesomeIcon color='green' icon={faPlusCircle} />
                Claim
              </UnstyledButton>
            )}
          </div>
          <div
            className={`${
              user?.giftIndex !== 2 && 'grayscale'
            } flex flex-col gap-2 items-center justify-center h-[242px]`}
          >
            <h3 className='text-gray-200 text-2xl '>Day 3</h3>
            <div className='flex gap-2 '>
              {data?.days[2].gifts.map(g => (
                <Gift gift={g} />
              ))}
              {data?.days[2].coins && <Coin count={data?.days[2].coins} />}
            </div>
            {user?.giftIndex === 2 && (
              <UnstyledButton
              onClick={handleClaim}
                style={{ fontFamily: 'Genshin-Regular' }}
                className='font-bold cursor-pointer mt-2 bg-[#EAE6D7] flex gap-2 items-center justify-center hover:scale-105 transition-all text-[#4E5668] p-2 px-20 rounded-full'
              >
                <FontAwesomeIcon color='green' icon={faPlusCircle} />
                Claim
              </UnstyledButton>
            )}
          </div>
        </Stack>
        <Stack>
          <div
            className={` ${
              user.giftIndex !== 3 && 'grayscale'
            } flex flex-col  items-center justify-center min-h-[156px]`}
          >
            <h3 className='text-gray-200 text-lg '>Day 4</h3>
            <div className='flex gap-2 '>
              {data?.days[3].gifts.map(g => (
                <Gift gift={g} />
              ))}
              {data?.days[3].coins > 0 && <Coin count={data?.days[3].coins} />}
            </div>
            {user?.giftIndex === 3 && (
              <UnstyledButton
              onClick={handleClaim}
                style={{ fontFamily: 'Genshin-Regular' }}
                className='font-bold cursor-pointer mt-2 bg-[#EAE6D7] flex gap-2 items-center justify-center hover:scale-105 transition-all text-[#4E5668] p-2 px-20 rounded-full'
              >
                <FontAwesomeIcon color='green' icon={faPlusCircle} />
                Claim
              </UnstyledButton>
            )}
          </div>
          <div
            className={` ${
              user.giftIndex !== 4 && 'grayscale'
            } flex flex-col  items-center justify-center min-h-[156px]`}
          >
            <h3 className='text-gray-200 text-lg '>Day 5</h3>
            <div className='flex gap-2 '>
              {data?.days[4].gifts.map(g => (
                <Gift gift={g} />
              ))}
              {data?.days[4].coins > 0 && <Coin count={data?.days[4].coins} />}
            </div>
            {user?.giftIndex === 4 && (
              <UnstyledButton
                style={{ fontFamily: 'Genshin-Regular' }}
                className='font-bold cursor-pointer mt-2 bg-[#EAE6D7] flex gap-2 items-center justify-center hover:scale-105 transition-all text-[#4E5668] p-2 px-20 rounded-full'
              >
                <FontAwesomeIcon color='green' icon={faPlusCircle} />
                Claim
              </UnstyledButton>
            )}
          </div>
          <div
            className={` ${
              user.giftIndex !== 5 && 'grayscale'
            } flex flex-col items-center justify-center min-h-[156px]`}
          >
            <h3 className='text-gray-200 text-lg '>Day 6</h3>
            <div className='flex gap-2 '>
              {data?.days[5].gifts.map(g => (
                <Gift gift={g} />
              ))}
              {data?.days[5].coins > 0 && <Coin count={data?.days[5].coins} />}
            </div>
            {user?.giftIndex === 5 && (
              <UnstyledButton
                style={{ fontFamily: 'Genshin-Regular' }}
                className='font-bold cursor-pointer mt-2 bg-[#EAE6D7] flex gap-2 items-center justify-center hover:scale-105 transition-all text-[#4E5668] p-2 px-20 rounded-full'
              >
                <FontAwesomeIcon color='green' icon={faPlusCircle} />
                Claim
              </UnstyledButton>
            )}
          </div>
        </Stack>
        <LastDay gifts={getGiftArr(6)} user={user} />
      </SimpleGrid>
    </Container>
  );
}
