import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
    currentUser: null
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        
    }
})

export default userSlice.reducer