import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uploadEstablishments } from "./establishmentsAction";
import { establishmentsState, IEstablishments } from "../../../types/IEstablishments";

const initialState: establishmentsState = {
    establishments: [],
    isLoading: false,
  };

export const establishmentSlice = createSlice({
    name:"establishments",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(uploadEstablishments.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(uploadEstablishments.fulfilled, (state, action: PayloadAction<IEstablishments[]>) => {
            state.isLoading = false;
            state.establishments = action.payload;
        })
    }
}) 

export default establishmentSlice.reducer;