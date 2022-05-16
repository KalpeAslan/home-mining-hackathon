import {createAsyncThunk} from "@reduxjs/toolkit";
import {TWorkMode} from "../../../types/devices.types";

export const changeDeviceWorkModeThunk = createAsyncThunk(
    'changeDeviceWorkModeThunk',
    async (workMode: TWorkMode) => {

    }
)
