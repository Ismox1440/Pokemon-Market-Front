import useSWR from 'swr';
import { IPokemon } from '../types/pokemon';
import { baseURL } from '../api/api';

interface IProps {
  _id: string | undefined;
}

const fetcher = (url: string) =>
  fetch(url).then(res => {
    if(res.ok) return res.json()
    else throw new Error("Error in fetch")
  });
const usePokemon = ({ _id }: IProps) => {
  const { data, isLoading, error } = useSWR<IPokemon>(
    `${baseURL}pokemon/${_id}`,
    fetcher, { shouldRetryOnError: false,  revalidateOnFocus: false,  revalidateOnReconnect: false}
  );
  return { data, isLoading, error };
};

export default usePokemon;
