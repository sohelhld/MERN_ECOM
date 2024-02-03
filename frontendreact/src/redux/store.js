import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {reducer as authReducer} from "./Authtication/reducer"
import {reducer as producdtReducer} from "./Products/reducer"
// Combine your reducers
const rootReducer = combineReducers({
  authReducer,producdtReducer
});

// Configure Redux Persist
const persistConfig = {
  key: 'root',
  storage,
};

// Wrap your rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store using persistedReducer
export const store = legacy_createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
