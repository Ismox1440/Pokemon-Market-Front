import { useGetUserQuery } from '@/redux/api/userEndpoint';
import { useAuth0 } from '@auth0/auth0-react';

const useUser = () => {
  const { user: userAuth } = useAuth0();
  const { data: user, isLoading } = useGetUserQuery({
    email: userAuth?.email,
    name: userAuth?.name 
  });
  return {
    user,
    isLoading: isLoading,
  };
};

export default useUser;
