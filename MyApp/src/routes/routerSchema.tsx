import { ReactElement } from "react"
import { MiningScreen } from "../screens/Mining"
import { SettingScreen } from "../screens/Settings"
import { WalletScreen } from "../screens/Wallet"
import React from "react"


export interface IRoute {
    path: string
    component: ReactElement
}

export const routerSchema: IRoute[] = [
    {
        path: '/',
        component: <MiningScreen/>
    },
    {
        path: '/settings',
        component: <SettingScreen/>
    },
    {
        path: '/wallet',
        component: <WalletScreen/>
    }
]