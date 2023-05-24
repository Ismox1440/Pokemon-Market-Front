import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import { userEndpoint } from './api/userEndpoint';
import authSlice from './slices/authSlice';
import { pokemonEndpoint } from './api/pokemonEndpoint';
import { itemEndpoint } from './api/itemEndpoint';
import { giftWeekEndpoint } from './api/weekGiftEndpoint';

export interface RootState {
  counterSlice: ReturnType<typeof counterSlice>;
  authSlice: ReturnType<typeof authSlice>;
}

export default configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      userEndpoint.middleware,
      pokemonEndpoint.middleware,
      itemEndpoint.middleware,
      giftWeekEndpoint.middleware
    ),
  reducer: {
    counterSlice,
    authSlice,
    [userEndpoint.reducerPath]: userEndpoint.reducer,
    [pokemonEndpoint.reducerPath]: pokemonEndpoint.reducer,
    [itemEndpoint.reducerPath]: itemEndpoint.reducer,
    [giftWeekEndpoint.reducerPath]: giftWeekEndpoint.reducer,
  },
});
