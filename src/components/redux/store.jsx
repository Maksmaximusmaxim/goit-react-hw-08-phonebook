import { configureStore,  createSlice} from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

const sliceContact = createSlice({
    name:'contacts',
    initialState:[],
    reducers:{
      deleteContact(state , action){
       return state.filter(c => c.id !== action.payload)
      },
      addContact(state,action){
        console.log(action)
        const contact = {
            id: nanoid(),
            name: action.payload.name,
            number: action.payload.number,
          };
        const repetitionCheck = state.some(p => p.name === contact.name);
        if (repetitionCheck) {
              return Notiflix.Notify.info('Этот контакт уже добавлен');
            }
         
          return [...state , action.payload] 
          
      }
    }
})
export const {deleteContact ,addContact } = sliceContact.actions;

const sliceFilter = createSlice({
    name:'filter',
    initialState:'',
    reducers:{
        onChangeFilter(state, action){
            return [...state , action.payload]
        }
    }
})
export const {onChangeFilter} = sliceFilter.actions
// const contactsReducer = createReducer([],{
// [deleteContact]:(state , action) => 
//     state.filter(c => c.id !== action.payload),
// })
export const store = configureStore({
  reducer: {
    contacts:sliceContact.reducer,
    filter:sliceFilter.reducer,
  },
})