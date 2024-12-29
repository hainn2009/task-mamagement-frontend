import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from '@reduxjs/toolkit/query'
import { taskApi } from "./services/new-tasks.service";
import { authApi } from "./services/new-auth.service";
import filterReduder from "./services/filters-slice";

export const store = configureStore({
    reducer: {
        [taskApi.reducerPath]: taskApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        filters: filterReduder,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(taskApi.middleware).concat(authApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)
