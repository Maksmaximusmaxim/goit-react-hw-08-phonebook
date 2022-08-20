import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const userApi = createApi({
    reducerPath:'userApi',
    baseQuery:fetchBaseQuery({baseUrl: 'https://connections-api.herokuapp.com'}),
    tagTypes: ['User'],
    endpoints: (builder)=>({
        getUser:builder.query({
            query: ()=> '/users/current',
            providesTags:['User'],
        }),
      singUp:builder.mutation({
        query: newUser => ({
            url:'/users/signup',
            method:'POST',
            body:newUser,
        }),
        invalidatesTags: ['User'],
      }),
      logIn:builder.mutation({
        query: newLogIn=>({
url:'/users/login',
method:'POST',
body:newLogIn,
        }),
        invalidatesTags: ['User'],
      })
    }),
});
export const {useGetUserQuery ,useSingUpMutation, useLogInMutation } = userApi;