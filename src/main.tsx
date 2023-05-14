import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { MantineProvider, create } from '@mantine/core';
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
      <MantineProvider
        theme={{  
          colorScheme: 'dark',
          primaryColor: 'yellow',
          colors: {
            dark: [
              '#d5d7e0',
              '#acaebf',
              '#8c8fa3',
              '#666980',
              '#4d4f66',
              '#323947',
              '#3A4254',
              '#3A4254',
              '#0c0d21',
              '#01010a',
            ]
          },
        }}
      >
        <App />
      </MantineProvider>
    </Auth0Provider>
  </Provider>
);
