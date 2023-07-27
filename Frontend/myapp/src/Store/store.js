import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Features/authSlice";
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer,persistStore } from "redux-persist";
import thunk from 'redux-thunk';
const persistConfig={
    key:'root',
    version:1,
    storage
}
const rootReducer=combineReducers({
    'authentication':authSlice
});
const persistedReducer=persistReducer(persistConfig,rootReducer);
export const store=configureStore({
  reducer:persistedReducer,
  middleware:[thunk]
})
export const persistor=persistStore(store);