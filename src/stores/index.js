import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer, { loadUserFromStorage } from "../services/authSlice";
// import { setupListeners } from '@reduxjs/toolkit/query'
import { taskApi } from "../services/new-tasks.service";
import { authApi } from "../services/new-auth.service";
import filterReduder from "../services/filters-slice";

const appReducer = combineReducers({
    [taskApi.reducerPath]: taskApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    filters: filterReduder,
    auth: authReducer,
});

const rootReducer = (state, action) => {
    if (action.type === "auth/logout") {
        state = undefined;
    }
    return appReducer(state, action);
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(taskApi.middleware).concat(authApi.middleware),
});

// Load user from localStorage when the store is created
store.dispatch(loadUserFromStorage());

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)
