import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from 'components/redux/contactsApi';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: getDefaultMiddleware =>[...getDefaultMiddleware(),pokemonApi.middleware]
    
});
