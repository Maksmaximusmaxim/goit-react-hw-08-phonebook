import { createSlice } from '@reduxjs/toolkit';

export const sliceContact = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filterContact(state, action) {
      return { ...state, filter: action.payload };
    },
  },
});

export const { filterContact } = sliceContact.actions;
