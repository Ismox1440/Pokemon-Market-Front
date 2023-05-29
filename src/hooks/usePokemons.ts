import useSWR from 'swr';
import { baseURL } from '../api/api';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const usePokemons = (query: string) => {
  const url =`${baseURL}pokemon${query}`
  const { data, error, isLoading } = useSWR(url, fetcher, { shouldRetryOnError: false,  revalidateOnFocus: false,  revalidateOnReconnect: false});
  return { info: data?.info, pokemons: data?.results, isLoading, error };
};  

export default usePokemons;
