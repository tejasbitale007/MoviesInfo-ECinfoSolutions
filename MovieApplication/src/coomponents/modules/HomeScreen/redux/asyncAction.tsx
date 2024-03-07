import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchTrendingMovies = createAsyncThunk('HomeScreen/fetchTrendingMovies', async () => {
    try {
        const api_key = 'ce446fe931fb6876925ab907566f9e7a';
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}&language=en-US`)
        const result = JSON.parse(await response.text());
        return result;
    } catch (error) {
        console.log('error in fetchTrendingMovies api calling')
    }
}) 