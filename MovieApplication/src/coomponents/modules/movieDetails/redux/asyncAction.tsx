import { createAsyncThunk } from "@reduxjs/toolkit";
import { movieDetails } from "./StorageInterface";

export const fetchMovieDetails = createAsyncThunk('movieDetails/fetchMovieDetails',async(value:number)=>{
    try {
        const api_key = 'ce446fe931fb6876925ab907566f9e7a';
        const response = await fetch(`https://api.themoviedb.org/3/movie/${value}?api_key=${api_key}&language=en-US`);
        const data = JSON.parse(await response.text());
        console.log('the data im getting',data.adult)
        return data;

    } catch (error) {
        console.log('error in movies Details api',error)
    }
})