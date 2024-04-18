import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies: [],
    currentMovie: null
}

export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {

    }
})

export default movieSlice.reducer