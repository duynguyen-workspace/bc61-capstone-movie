import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    currentUser: null,
};

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        handleGetValue: (state, action) => {
            state.users = action.payload;
            console.log(state.users);
        },
    },
});

export const { handleGetValue } = userSlice.actions;

export default userSlice.reducer;
