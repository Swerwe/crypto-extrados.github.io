import axios from 'axios';
import { ISwap } from "../../models/ISwap";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchSwap = createAsyncThunk(
    'swap/fetch',
    async (_, thunkAPI) => {
        try{
            const response = await axios.get<ISwap>('https://my-json-server.typicode.com/Swerwe/FakeDB/swap');
            return response.data;
        }catch(e){
            return thunkAPI.rejectWithValue("Ошибка загрузки свапов");
        }

    }

);