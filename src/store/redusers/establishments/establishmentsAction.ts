import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseService } from "../../../api/baseService";


export const uploadEstablishments= createAsyncThunk(
    'establishments/post',
    async function () {
        const res = await baseService.get('/cafe');
        return res.data;
    }
)