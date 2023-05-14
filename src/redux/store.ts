import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import { userEnpoint } from './api/userEndpoint';
import authSlice from './slices/authSlice';
import { pokemonEndpoint } from './api/pokemonEndpoint';
import { itemEndpoint } from './api/itemEndpoint';

export interface RootState {
  counterSlice: ReturnType<typeof counterSlice>;
  authSlice: ReturnType<typeof authSlice>;
}

export default configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(userEnpoint.middleware, pokemonEndpoint.middleware, itemEndpoint.middleware),
  reducer: {
    counterSlice,
    authSlice,
    [userEnpoint.reducerPath]: userEnpoint.reducer,
    [pokemonEndpoint.reducerPath]: pokemonEndpoint.reducer,
    [itemEndpoint.reducerPath]: itemEndpoint.reducer,
  },
});
