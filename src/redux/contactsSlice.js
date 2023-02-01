import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { contactsInitialState } from './contactsInitState';
import { STATUS } from 'constants/statusConstants';
import {
  contactsAsyncThunk,
  deleteContactAsyncThunk,
  addContactAsyncThunk,
} from 'redux/contactsOperations';

const extraActions = [
  contactsAsyncThunk,
  deleteContactAsyncThunk,
  addContactAsyncThunk,
];

const getActions = type => extraActions.map(action => action[type]);

const fetchContactsSuccessReducer = (state, { payload }) => {
  state.contacts = payload;
};

const addContactSuccessReducer = (state, { payload }) => {
  state.contacts.push(payload);
};

const deleteContactSuccessReducer = (state, { payload }) => {
  const index = state.contacts.findIndex(contact => contact.id === payload.id);
  state.contacts.splice(index, 1);
};

const pendingReducer = state => {
  state.status = STATUS.loading;
};

const rejectedReducer = state => {
  state.status = STATUS.error;
};

const fulfilledReducer = state => {
  state.status = STATUS.success;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder =>
    builder
      .addCase(contactsAsyncThunk.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContactAsyncThunk.fulfilled, addContactSuccessReducer)
      .addCase(deleteContactAsyncThunk.fulfilled, deleteContactSuccessReducer)
      .addMatcher(isAnyOf(...getActions('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), rejectedReducer)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;
