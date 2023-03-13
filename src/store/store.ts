import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userSlice from "./redusers/authorization/userSlice";
import establishmentsSlice from "./redusers/establishments/establishmentsSlice";


const rootReducer = combineReducers({
   establishments: establishmentsSlice,
   user:userSlice

});

export const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;