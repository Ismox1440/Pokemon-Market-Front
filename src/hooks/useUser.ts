import { User, useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import useSWR, { mutate } from 'swr';

const fetcher = async (
  url: string,
  getAccessTokenSilently: Function,
  user: User | undefined
) => {
  try {
    const accessToken = await getAccessTokenSilently();
    if (!user) throw new Error('User not found');
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(user),
    });
    if (res.ok) return await res.json();
    throw new Error('Error in fetching');
  } catch (error) {
    return error;
  }
};
const useUser = () => {
  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();
  const { data, error, isLoading } = useSWR(
    'http://localhost:5000/user/login',
    () => fetcher("http://localhost:5000/user/login", getAccessTokenSilently, user),
    {
      revalidateOnFocus: false,
      revalidateOnMount: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
      refreshInterval: 0
    }
  );
  useEffect(() => {
    if (isAuthenticated && user) {
      console.log(isAuthenticated, 'cambio algo')
      mutate('http://localhost:5000/user/login');
    }
  }, [user, isAuthenticated]);
  return {
    user: data,
    isError: error || !isAuthenticated,
    isLoading,
  };
};

export default useUser;
