import { createAsyncThunk } from "@reduxjs/toolkit";
import  Cookie  from "cookie.js";
import { baseService } from "../../../api/baseService";
import { IUser } from "../../../types/IUser";

export const authorization = createAsyncThunk(
    'user/authorization',
    async function (userdata:{userName:string, password:string}){
        const res = await baseService.post<IUser>('/signin',{
            username:userdata.userName,
            password:userdata.password,
        })
        
        Cookie.set('token', res.data.token)
        return res.data
    }
)