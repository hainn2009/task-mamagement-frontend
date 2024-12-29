import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000'

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/" }),
    endpoints: (builder) => ({
        signIn: builder.mutation({
            query: (username, password) => ({
                url: "signin",
                method: "POST",
                body: { username, password },
                // const result = await post(`${this.BASE_URL}/auth/signin`, { username, password });
                //     const accessToken = result.data.accessToken;
                //     this.saveToken(accessToken);
                //     return result.data.username;
            }),
        }),
        signUp: builder.mutation({
            query: (username, password) => ({
                url: "signup",
                method: "POST",
                body: { username, password },
                // await post(`${this.BASE_URL}/auth/signup`, { username, password });
            }),
        }),
    }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
