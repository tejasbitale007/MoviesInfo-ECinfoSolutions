import { configureStore } from "@reduxjs/toolkit";
import { HomeScreen } from "../modules/HomeScreen/redux/StorageInterface";
import HomeSliceReducer from "../modules/HomeScreen/redux/HomeSlice";
import movieDetailSliceReducer from "../modules/movieDetails/redux/movieDetailsSlice";
import { movieDetails } from "../modules/movieDetails/redux/StorageInterface";
export interface StoreType{
    homeScreen : HomeScreen,
    movieDetail: movieDetails
}
export const store = configureStore({
    reducer:{
        homeScreen:HomeSliceReducer,
        movieDetail:movieDetailSliceReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck:false
    }).concat([]),

})

