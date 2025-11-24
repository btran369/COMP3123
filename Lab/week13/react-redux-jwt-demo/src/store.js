import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';

// Create the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Demonstrate "Subscribe": log state on every change
store.subscribe(() => {
  console.log('Redux store changed:', store.getState());
});

export default store;
