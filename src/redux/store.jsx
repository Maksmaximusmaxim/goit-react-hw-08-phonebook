import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'redux/contactsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { sliceContact } from 'redux/filter';
export const store = configureStore({
  reducer: {
    filter: sliceContact.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
