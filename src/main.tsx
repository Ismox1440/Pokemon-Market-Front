import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { MantineProvider } from '@mantine/core';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Auth0Provider
      domain='dev-lbu2ncq4c7wy2sqz.us.auth0.com'
      clientId='pyFvYJjvuzbPWL9twTG0jtsZyyTfq00H'
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://dev-lbu2ncq4c7wy2sqz.us.auth0.com/api/v2/',
      }}
      cacheLocation='localstorage'
    >
      <MantineProvider theme={{ colorScheme: 'dark', primaryColor: 'yellow' }}>
        <App />
      </MantineProvider>
    </Auth0Provider>
  </Provider>
);
