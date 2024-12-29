import { createSlice } from "@reduxjs/toolkit";
// import { authApi } from "./new-auth.service";

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
    // TODO: Uncomment this code to handle the sign-in action
    // extraReducers: (builder) => {
    //     builder.addMatcher(api.endpoints.signin.matchFulfilled, (state, action) => {
    //         state.accessToken = action.payload.accessToken;
    //     });
    // },
});

export const { setAccessToken } = tokenSlice.actions;
export default tokenSlice.reducer;
