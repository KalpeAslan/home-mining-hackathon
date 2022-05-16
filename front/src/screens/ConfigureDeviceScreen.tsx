import React, {FC} from 'react'
import {DeviceForm} from "../components/Forms/DeviceForm";

interface IProps {
}

export const ConfigureDeviceScreen: FC<IProps> = ({}) => {
    return <>
        <DeviceForm/>
    </>
}
