import {combineReducers, configureStore} from "@reduxjs/toolkit";
import swapReducer from "./reducers/SwapSlice";
import salesReducer from "./reducers/SalesSlice";
import offersReducer from "./reducers/OffersSlice";
const rootReducer = combineReducers({
    swapReducer,
    salesReducer,
    offersReducer,
});
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
};
export type  RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']