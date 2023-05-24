import { baseURL } from '@/api/api';
import { standarFetcher } from '@/utils/standarFetcher';
import useSWR from 'swr';

const useGetUserById = (id: string) => {
  const { data, isLoading, error, isValidating } = useSWR(
    `${baseURL}user/id/${id}`,
    standarFetcher
  );
  return { data, isLoading, error, isValidating };
};

export default useGetUserById;
