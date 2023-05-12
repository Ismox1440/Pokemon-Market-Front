import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mantine/core';
import React from 'react';
import useUser from '../../hooks/useUser';

const Login = () => {
  const { loginWithPopup } = useAuth0();
  const {user} = useUser()
  console.log(user)
  return (
    <div className='h-screen flex justify-center items-center'>
      <Button onClick={() => loginWithPopup()} variant='default'>
        Login
      </Button>
    </div>
  );
};

export default Login;
