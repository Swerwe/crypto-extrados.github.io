import {combineReducers, configureStore} from "@reduxjs/toolkit";
import swapReducer from "./reducers/SwapSlice";
import salesReducer from "./reducers/SalesSlice";
import offersReducer from "./reducers/OffersSlice";
import tokensReducer from "./reducers/TokensSlice";
const rootReducer = combineReducers({
    swapReducer,
    salesReducer,
    offersReducer,
    tokensReducer,
});
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
};
export type  RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']