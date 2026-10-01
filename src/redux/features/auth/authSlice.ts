import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  connected: boolean;
  accessToken: string;
  email: string;
};

type UserPayload = {
    email: string;
    accessToken: string;
}

const initialState: AuthState = {
  connected: false,
  accessToken: '',
  email: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRedux: (state, action: PayloadAction<UserPayload>) => {
        state.connected = true;
        state.email = action.payload.email;
        state.accessToken = action.payload.accessToken;
    }
  },
});

export const { loginRedux} = authSlice.actions;

export default authSlice.reducer;