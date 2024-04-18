import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IStatistics } from "../../models/IStatistics";
import { fetchOffers } from "./ActionCreators";
export interface OffersState{
    offers?: IStatistics;
    isLoading: boolean;
    error: string;
}
const initialState: OffersState = {
    offers:undefined,
    isLoading: false,
    error: ''
};
export const offersSlice = createSlice({
    name: 'offers',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchOffers.pending.type, (state:OffersState) => {
            state.isLoading = true;
        });
        builder.addCase(fetchOffers.fulfilled.type, (state:OffersState,action:PayloadAction<IStatistics>) => {
            state.isLoading = false;
            state.error = '';
            state.offers = action.payload;
        });
        builder.addCase(fetchOffers.rejected.type, (state:OffersState,action:PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        });

      },
});
export default offersSlice.reducer;