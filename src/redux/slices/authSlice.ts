import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface AuthSlice {
  accessToken: string | undefined;
  user: UserAuth0 | undefined;
  error: string | undefined;
}

export interface UserAuth0 {
  nickname: string;
  email: string;
  picture: string;
}

const initialState: AuthSlice = {
  accessToken: undefined,
  user: undefined,
  error: undefined,
};

const authSlice = createSlice({
  name: 'auht0Slice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = authSlice.actions;
export const selectAuth = (state: RootState) => state.authSlice;
export default authSlice.reducer;
