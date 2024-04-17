import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISwap } from "../../models/ISwap";
interface SwapState {
    swap?: ISwap;
    isLoading: boolean;
    error: string;
}
const initialState: SwapState = {
    swap:undefined,
    isLoading: false,
    error: ''
};
export const swapSlice = createSlice({
    name: 'swap',
    initialState,
    reducers: {
        swapFetching(state) {
            state.isLoading = true;

        },
        swapFetchingSuccess(state, action: PayloadAction<ISwap>){
            state.isLoading = false;
            state.error = '';
            state.swap = action.payload;
        },
        swapFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;

        }

    }
});
export default swapSlice.reducer;