import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const AuthMiddleware = ({ children }: {children:  JSX.Element}) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthenticated && !isLoading) {
        await loginWithRedirect();
      }
    };

    checkAuth();
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  useEffect(() => {
    if (isAuthenticated) {
      // El usuario está autenticado, continuar con la renderización de las rutas
    } else if (!isAuthenticated && !isLoading) {
      // El usuario no está autenticado, redirigir a la página de login
      navigate('/login');
    }
  }, [isAuthenticated, isLoading, navigate]);

  return <>{children}</>;
};

export default AuthMiddleware;
