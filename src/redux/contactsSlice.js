import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reduser(state, action) {
        state.items.push(action.payload);
      },
      prepare(values) {
        return {
          payload: {
            id: nanoid(),
            // name: values.name,
            // number: values.number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.items.filter(contact => contact.id !== action.payload);
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
