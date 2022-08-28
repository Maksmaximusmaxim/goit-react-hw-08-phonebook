import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';
export const sliceUser = createSlice({
  name: 'user',
  initialState: { name: '', email:'',token:'',isLogIn:false },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.logIn.matchFulfilled,
      (state, { payload }) => {
        const {user , token}=payload;
     state.email = user.email;
     state.name = user.name;
     state.token = token;
     state.isLogIn = true;
      }
    );
    builder.addMatcher(
        userApi.endpoints.logOut.matchFulfilled,
        (state) => {
          
       state.email = '';
       state.name = '';
       state.token = '';
       state.isLogIn = false;
        }
      );
      builder.addMatcher(
        userApi.endpoints.singUp.matchFulfilled,
        (state, { payload }) => {
          const {user , token}=payload;
       state.email = user.email;
       state.name = user.name;
       state.token = token;
       state.isLogIn = true;
        }
      );
  },
});

export const { userLogin ,getCurrentUser} = sliceUser.actions;