import { createSlice } from "@reduxjs/toolkit";
import { api } from "./apiSlice";

const tokenSlice = createSlice({
    name: "auth",
    initialState: {
        accessToken: null,
    },
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints.signin.matchFulfilled, (state, action) => {
            state.accessToken = action.payload.accessToken;
        });
    },
});

export const { setAccessToken } = tokenSlice.actions;
export default tokenSlice.reducer;
