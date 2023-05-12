import { useAuth0 } from '@auth0/auth0-react';
import useSWR from 'swr';
import { baseURL } from '../api/api';
import { standarFetcher } from '../utils/standarFetcher';
const useUserPokemons = () => {
  const { user } = useAuth0();
  const { data, isLoading, error } = useSWR(
    `${baseURL}user/pokemons/${user?.email}`,
    standarFetcher
  );
  return { data, isLoading, error };
};

export default useUserPokemons;
