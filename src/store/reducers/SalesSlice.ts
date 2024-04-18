import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IStatistics } from "../../models/IStatistics";
import { fetchSales } from "./ActionCreators";
export interface SalesState{
    sales?: IStatistics;
    isLoading: boolean;
    error: string;
}
const initialState: SalesState = {
    sales:undefined,
    isLoading: false,
    error: ''
};
export const salesSlice = createSlice({
    name: 'sales',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSales.pending.type, (state:SalesState) => {
            state.isLoading = true;
        });
        builder.addCase(fetchSales.fulfilled.type, (state:SalesState,action:PayloadAction<IStatistics>) => {
            state.isLoading = false;
            state.error = '';
            state.sales = action.payload;
        });
        builder.addCase(fetchSales.rejected.type, (state:SalesState,action:PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        });

      },
});
export default salesSlice.reducer;