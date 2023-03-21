import { configureStore } from "@reduxjs/toolkit";

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
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


import { filterReducer } from './filterSlice';
import {contactsReducer  } from './contactsSlice';


const persistConfig = {
  key: 'contacts',
  storage,

};

const rootReducer = combineReducers({
  contacts: contactsReducer ,
  filter: filterReducer,
});
const persistRootReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {contacts:persistRootReducer,filter: filterReducer},
  middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

