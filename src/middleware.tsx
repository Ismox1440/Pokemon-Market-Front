import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, setUser } from './redux/slices/authSlice';

const AuthMiddleware = ({ children }: { children: JSX.Element }) => {
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    user,
    getAccessTokenSilently,
  } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user: userAuth } = useSelector(selectAuth);

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthenticated && !isLoading) {
        await loginWithRedirect();
      }
    };

    checkAuth();
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  const setUserAction = async () => {
    const accessToken = await getAccessTokenSilently();
    dispatch(setUser({ user, accessToken }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      setUserAction();
    } else if (!isAuthenticated && !isLoading) {
      navigate('/login');
    }
  }, [isAuthenticated, isLoading, navigate]);

  return <>{userAuth && children}</>;
};

export default AuthMiddleware;
