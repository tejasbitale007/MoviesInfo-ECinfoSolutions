import { createSlice } from "@reduxjs/toolkit";
import { movieDetails } from "./StorageInterface";
import { fetchMovieDetails } from "./asyncAction";

const movieInformation : movieDetails= {
    loading:false,
    movieInformation:{
        adult: false,
        backdrop_path: '',
        belongs_to_collection: {
            id: 0,
            name: '',
            poster_path: '',
            backdrop_path: ''
        },
        budget: 0,
        genres: [],
        homepage: '',
        id: 0,
        imdb_id: '',
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 0,
        poster_path: '',
        production_companies: [],
        production_countries: [],
        release_date: '',
        revenue: 0,
        runtime: 0,
        spoken_languages:[],
        status: '',
        tagline: '',
        title: '',
        video: false,
        vote_average: 0,
        vote_count: 0,
    }
}

const movieDetailSlice = createSlice({
    name:'movieDetails',
    initialState: movieInformation,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchMovieDetails.pending,(state)=>{
            state.loading = true;

        })
        builder.addCase(fetchMovieDetails.fulfilled,(state:movieDetails,{payload})=>{
            state.loading = false;
            console.log('movieInformation', state.movieInformation , 'payload getting',payload)
            state.movieInformation = payload;
        })
        builder.addCase(fetchMovieDetails.rejected,(state)=>{
            state.loading = false;

        })
        
    }
}) 

const {} = movieDetailSlice.actions;
export default movieDetailSlice.reducer;