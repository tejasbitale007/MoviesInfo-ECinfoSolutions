import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const storeUser = createAsyncThunk('setUser/storeUser', async (value) => {
    try {
        await AsyncStorage.setItem("user", JSON.stringify(value));
    } catch (error) {
        console.log('error in asyncstorages', error);
    }
});