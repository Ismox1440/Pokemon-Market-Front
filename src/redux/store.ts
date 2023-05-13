import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import { userEnpoint } from './api/userEndpoint';
import authSlice from './slices/authSlice';

export interface RootState {
  counterSlice: ReturnType<typeof counterSlice>;
  authSlice: ReturnType<typeof authSlice>;
}

export default configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(userEnpoint.middleware),
  reducer: {
    counterSlice,
    authSlice,
    [userEnpoint.reducerPath]: userEnpoint.reducer,
  },
});
