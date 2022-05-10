import {FC, ReactElement} from "react"
import { MiningScreen } from "../screens/Mining"
import { SettingScreen } from "../screens/Settings"
import { WalletScreen } from "../screens/Wallet"
import React from "react"
import {Device} from "../screens/Device";


export interface IRoute {
    path: string
    component: FC,
    children?: IRoute[]
}

export const routerSchema: IRoute[] = [
    {
        path: '/mining',
        component: MiningScreen
    },
    {
        path: '/settings',
        component: SettingScreen,
        children: [
            {
                path: '/device',
                component: Device
            }
        ]
    },
    {
        path: '/wallet',
        component: WalletScreen
    }
]
