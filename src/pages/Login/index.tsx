import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mantine/core';

const Login = () => {
  const { loginWithPopup } = useAuth0();
  return (
    <div className='h-screen flex justify-center items-center'>
      <Button onClick={() => loginWithPopup()} variant='default'>
        Login
      </Button>
    </div>
  );
};

export default Login;
