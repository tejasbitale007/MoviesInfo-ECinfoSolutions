import { configureStore } from "@reduxjs/toolkit";
import { HomeScreen } from "../modules/HomeScreen/redux/StorageInterface";
import HomeSliceReducer from "../modules/HomeScreen/redux/HomeSlice";
export interface StoreType{
    homeScreen : HomeScreen
}
export const store = configureStore({
    reducer:{
        homeScreen:HomeSliceReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck:false
    }).concat([]),

})

