import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

export const taskApi = createApi({
    reducerPath: "taskApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/",
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem("accessToken");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: ({ search, status }) => {
                let query = "/tasks?";
                if (search) query += `search=${search}&`;
                if (status) query += `status=${status}`;
                return query;
            },
        }),
    }),
});

export const { useGetTasksQuery } = taskApi;
