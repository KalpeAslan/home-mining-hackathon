import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initialState} from "./devices.state";
import {changeDeviceWorkModeThunk} from "./devices.thunk";
import {TWorkMode} from "../../../types/devices.types";


const devicesSlice = createSlice({
    name: 'devicesSlice',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(changeDeviceWorkModeThunk.pending, (state, action: PayloadAction) => {
            state.currentDevice!.workMode = action.payload as unknown as TWorkMode
        });
    }
})

export const {} = devicesSlice.actions

export default devicesSlice.reducer
