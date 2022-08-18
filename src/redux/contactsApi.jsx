import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
 
  tagTypes: ['Contacts'], //под каким ключом сохраняется в кеше
  endpoints: builder => ({
    getContacts: builder.query({
      //квери на гэт запрос
      query: () => 'contacts',
      providesTags: ['Contacts'], //под каким ключом эти контакты весят
    }),
    deleteContacts: builder.mutation({
      // все остальное мутатион
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Contacts' }], // инвалидируем
    }),
    createContacts: builder.mutation({
      query: newContact => ({
        url: 'contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: [{ type: 'Contacts' }],
    }),
    // updateContacts:builder.mutation({
    //   query:(filterContacts)=>({
    //     url: 'contacts',
    //     method:'PUT',
    //     body: filterContacts,
    //   }),
    //   invalidatesTags: [{ type: 'Contacts' }],
    // })
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactsMutation,
  useCreateContactsMutation,
  // useUpdateContactsMutation,
} = contactsApi;
