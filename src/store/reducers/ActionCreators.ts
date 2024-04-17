import { AppDispatch } from "..";
import axios, { AxiosError } from 'axios';
import { swapSlice } from "./SwapSlice";
import { ISwap } from "../../models/ISwap";
export const fetchSwaps = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(swapSlice.actions.swapFetching());
        const response = await axios.get<ISwap>('https://my-json-server.typicode.com/Swerwe/FakeDB/swap');
        dispatch(swapSlice.actions.swapFetchingSuccess(response.data));
    }catch(err){
        const error = err as Error | AxiosError;
        dispatch(swapSlice.actions.swapFetchingError(error.message));
    }
};