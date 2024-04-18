import axios from 'axios';
import { ISwap } from "../../models/ISwap";
import { IStatistics } from '../../models/IStatistics';
import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchSwap = createAsyncThunk(
    'swap/fetch',
    async (_, thunkAPI) => {
        try{
            const response = await axios.get<ISwap>('https://my-json-server.typicode.com/Swerwe/FakeDB/swap');
            return response.data;
        }catch(e){
            return thunkAPI.rejectWithValue("Swap loading error...");
        }
    }
);
export const fetchSales = createAsyncThunk(
    'swap/fetch',
    async (_, thunkAPI) => {
        try{
            const response = await axios.get<IStatistics>('https://my-json-server.typicode.com/Swerwe/FakeDB/sales-statistic');
            return response.data;
        }catch(e){
            return thunkAPI.rejectWithValue("Sales loading error...");
        }

    }
);