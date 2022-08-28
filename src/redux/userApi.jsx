
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;

      //здесь добывается токен для хедера
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
  
      return headers
    },
  }),

  tagTypes: ['User'],
  endpoints: builder => ({
    getUser: builder.query({
      query: () => '/users/current',
      // providesTags: ['User'],
    }),
    singUp: builder.mutation({
      query: newUser => ({
        url: '/users/signup',
        method: 'POST',
        body: newUser,
        
      }),
      invalidatesTags: ['User'],
    }),
    logIn: builder.mutation({
      query: newLogIn => ({
        url: '/users/login',
        method: 'POST',
        body: newLogIn,
      }),
      invalidatesTags: ['User'],
    }),
    logOut: builder.mutation({
      query:()=>({
        url:'/users/logout',
        method:'POST',
   
      }), //ели  кверя загружается один раз , инвалидейт тагс не нужен

    })
  }),
});
export const { useGetUserQuery, useSingUpMutation, useLogInMutation,useLogOutMutation } = userApi;
