import { createSlice } from "@reduxjs/toolkit";
import { ISwap } from "../../models/ISwap";
interface SwapState {
    swaps: ISwap[];
    isLoading: boolean;
    error: string;
}
const initialState: SwapState = {
    swaps:[],
    isLoading: false,
    error: ''
}
export const swapSlice = createSlice({
    name: 'swap',
    initialState,
    reducers: {

    }
})
export default swapSlice.reducer;