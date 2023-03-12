import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';

export interface RootState {
    counterSlice: ReturnType<typeof counterSlice>
}

export default configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(),
    reducer: {
        counterSlice
    }
})
