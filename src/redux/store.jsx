import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'redux/contactsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { sliceContact } from 'redux/filter';
import { userApi } from './userApi';
export const store = configureStore({
  reducer: {
    filter: sliceContact.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    userApi.middleware,
  ],
});

setupListeners(store.dispatch);
