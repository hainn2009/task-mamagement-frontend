import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

export const taskApi = createApi({
    reducerPath: "taskApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/" }),
    prepareHeaders: (headers, { getState }) => {
        const token = localStorage.getItem("accessToken");
        // const token = getState().auth.token;
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => `tasks`,
        }),
    }),
});

export const { useGetTasksQuery } = taskApi;
