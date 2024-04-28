import axios from 'axios';
import { ISwap } from "../../models/ISwap";
import { IStatistics } from '../../models/IStatistics';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { thunk } from 'redux-thunk';
import { IToken } from '../../models/IToken';
export const fetchSwap = createAsyncThunk(
    'swap/fetch',
    async (_, thunkAPI) => {
        try{
            const response = await axios.get<ISwap>('https://my-json-server.typicode.com/Swerwe/FakeDB/swap');
            return response.data;
        }catch(e){
            return thunkAPI.rejectWithValue("Swap loading error..."); // implement custom error
        }
    }
);
export const fetchSales = createAsyncThunk(
    'sales/fetch',
    async (_, thunkAPI) => {
        try{
            const response = await axios.get<IStatistics>('https://my-json-server.typicode.com/Swerwe/FakeDB/sales-statistic');
            return response.data;
        }catch(e){
            return thunkAPI.rejectWithValue("Sales loading error..."); // implement custom error
        }

    }
);
export const fetchOffers = createAsyncThunk(
    'offers/fetch',
    async (_, thunkAPI) => {
        try{
            const response = await axios.get<IStatistics>('https://my-json-server.typicode.com/Swerwe/FakeDB/exchange-offer');
            return response.data;
        }catch(e){
            return thunkAPI.rejectWithValue("Sales loading error..."); // implement custom error
        }

    }
);
export const fetchTokens = createAsyncThunk(
    'tokens/fetch',
    async (_, thunkApi) => {
        try{
            const response = await axios.get<IToken>(('https://my-json-server.typicode.com/Swerwe/FakeDB/tokens'));
            return response.data;
        }catch(e){
            return thunkApi.rejectWithValue("Tokens loading error...") // implement custom error
        }
    }
)