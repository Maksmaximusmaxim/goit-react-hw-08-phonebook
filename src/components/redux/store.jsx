import { configureStore, createSlice } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

const sliceContact = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '' },
  reducers: {
    deleteContact(state, action) {
      return {
        ...state,
        items: state.items.filter(c => c.id !== action.payload),
      };
    },
    addContact(state, action) {
      console.log(state, 'ijijoii');
      const contact = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      };
      const repetitionCheck = state.items.some(p => p.name === contact.name);
      if (repetitionCheck) {
        return Notiflix.Notify.info('Этот контакт уже добавлен');
      }
      state.items.push(contact);
      //  return { items: [...state.items, contact], filter: state.filter }
    },
    filterContact(state, action) {
      return { ...state, filter: action.payload };
    },
  },
});
export const { deleteContact, addContact, filterContact } =
  sliceContact.actions;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
};
const saveLocalStoradge = persistReducer(persistConfig, sliceContact.reducer);

export const store = configureStore({
  reducer: {
    contacts: saveLocalStoradge,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
