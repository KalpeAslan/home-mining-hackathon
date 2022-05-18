import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import authReducer from './slices/auth/auth.slice'
import deviceReducer from './slices/devices/devices.slice'
import miningSlice from './slices/mining/mining.slice'



const reducer = combineReducers({
  auth: authReducer,
  devices: deviceReducer,
  mining: miningSlice
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
