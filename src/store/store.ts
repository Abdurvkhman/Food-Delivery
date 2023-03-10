import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import establishmentsSlice from "./redusers/establishments/establishmentsSlice";


const rootReducer = combineReducers({
   establishments: establishmentsSlice

});

export const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;