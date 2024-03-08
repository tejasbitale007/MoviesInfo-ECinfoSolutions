import { createAsyncThunk } from "@reduxjs/toolkit";

export const createNewSession = createAsyncThunk('createNewSession/NewSession',async()=>{
    try {
        const data = await fetch('https://api.themoviedb.org/3/authentication/guest_session/new');
        const response = JSON.parse(await data.text());
        if(response.success){
            return response;
        }
        else{
            return 'crash at creating new session';
        }
    } catch (error) {
        console.log('The api gets failed inside Creating new Session')
    }
}) 