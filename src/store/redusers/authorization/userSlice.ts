import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import { userState, IUser } from "../../../types/IUser";
import { authorization } from "./UserAction";

const cookies = new Cookies()

const initialState: userState = {
    user: {
        token: cookies.get('token') || '',
        id: '',
        role: ''
    },
    isLoading:false,
    isAuth:false
};

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(authorization.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(authorization.fulfilled, (state, action:PayloadAction<IUser>) => {
            state.user = action.payload;
            state.isAuth = true;
            state.isLoading = false;
        })
    }
})

export default userSlice.reducer;