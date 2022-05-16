import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import authReducer from "./slices/auth/auth.slice";
import deviceReducer from "./slices/devices/devices.slice";

const reducer = combineReducers({
    auth: authReducer,
    devices: deviceReducer
})

const middleware = getDefaultMiddleware({
    immutableCheck: true,
    serializableCheck: false,
    thunk: true,
})


export const store = configureStore({
    reducer,
    middleware,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
