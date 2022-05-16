import {IDevice} from "../../../types/devices.types";

interface IState {
    currentDevice: IDevice | null
    devices: IDevice[]
}

export const initialState: IState = {
    devices: [],
    currentDevice: {
        workMode: 'normal'
    }
}
