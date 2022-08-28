import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'redux/contactsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { sliceContact } from 'redux/filter';
import { userApi } from './userApi';
import {sliceUser} from './userSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['token']
}
 
const persistedReducer = persistReducer(persistConfig, sliceUser.reducer)

export const store = configureStore({
  reducer: {
    filter: sliceContact.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    user:persistedReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
    userApi.middleware,


  ],
});

setupListeners(store.dispatch);
export const persistor = persistStore(store)