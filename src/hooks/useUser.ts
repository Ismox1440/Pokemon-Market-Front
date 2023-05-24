import { useGetUserQuery } from '@/redux/api/userEndpoint';
import { useAuth0 } from '@auth0/auth0-react';

const useUser = () => {
  const { user: userAuth } = useAuth0();
  const {
    data: user,
    isLoading,
    isFetching,
  } = useGetUserQuery({
    email: userAuth?.email,
  });
  return {
    user,
    isLoading: isLoading,
    isFetching,
  };
};

export default useUser;
