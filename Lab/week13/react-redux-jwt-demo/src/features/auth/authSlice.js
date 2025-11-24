import { createSlice } from '@reduxjs/toolkit';
import { loginApi } from '../../api/fakeAuthApi';

// Decoding helper
function parseJwt(token) {
  try {
    const base64Payload = token.split('.')[1];
    const jsonPayload = atob(base64Payload);
    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
}

const initialToken = localStorage.getItem('token');
const initialUser = initialToken ? parseJwt(initialToken) : null;

// 0 - State (initial state for this slice)
const initialState = {
  token: initialToken || null,
  user: initialUser,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// 2 - Reducer & 3 - Action
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state) {
      state.status = 'loading';
      state.error = null;
    },
    loginSuccess(state, action) {
      state.status = 'succeeded';
      state.token = action.payload;
      state.user = parseJwt(action.payload);
      state.error = null;
    },
    loginFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
    logout(state) {
      state.status = 'idle';
      state.token = null;
      state.user = null;
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

// Thunk for async login
export const loginAsync = (username, password) => async (dispatch) => {
  // 4 - Dispatch
  dispatch(loginStart());
  try {
    const token = await loginApi(username, password);
    localStorage.setItem('token', token);
    dispatch(loginSuccess(token));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export default authSlice.reducer;
