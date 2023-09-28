import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { natureReducer } from "./feature/natureReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


  
const rootReducers = combineReducers({
    natureReducer,
 

})

export const store = configureStore({
    reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;