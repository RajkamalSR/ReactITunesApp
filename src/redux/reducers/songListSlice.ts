import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Action
export const fetchSongsList = createAsyncThunk("fetchSongsList", async (artistName) => {
    const url = 'https://itunes.apple.com/search?term='+artistName;
    const response = await fetch(url);
    return response.json();
});

const initialState = {
    isLoading: false,
    data: [],
    isError: false,
}

//export const songListSlice = createSlice({})