import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IToken } from "../../models/IToken";
import { fetchTokens } from "./ActionCreators";

export interface TokensState{
    tokens: IToken[];
    isLoading: boolean;
    error: string;
}
const initialState:TokensState = {
    tokens:[],
    isLoading:false,
    error:""
};
export const tokensSlice = createSlice({
    name: "tokens",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder.addCase(fetchTokens.pending.type, (state:TokensState)=> {
            state.isLoading = true;
        });
        builder.addCase(fetchTokens.fulfilled.type, (state:TokensState, action:PayloadAction<IToken[]>) => {
            state.isLoading = false;
            state.error = "";
            state.tokens = action.payload;
        });
        builder.addCase(fetchTokens.rejected.type, (state:TokensState, action:PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        });

    }
});
export default tokensSlice.reducer;