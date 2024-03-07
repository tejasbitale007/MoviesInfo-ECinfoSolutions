import { createSlice } from "@reduxjs/toolkit";
import { HomeScreen } from "./StorageInterface";
import { fetchTrendingMovies } from "./asyncAction";

const initialState: HomeScreen = {
    loading: false,
    trendings: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    }
}

const HomeScreenSlice = createSlice({
    name: 'HomeScreen',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTrendingMovies.pending,(state)=>{
            state.loading= true;
            state.trendings = initialState.trendings;
        });
        builder.addCase(fetchTrendingMovies.fulfilled,(state:HomeScreen , {payload}) =>{
            state.loading = false ;
            state.trendings = payload; 
        });
        builder.addCase(fetchTrendingMovies.rejected,(state)=>{
            state.loading = false;
        })
    }
})
export const {} = HomeScreenSlice.actions;
export default HomeScreenSlice.reducer;