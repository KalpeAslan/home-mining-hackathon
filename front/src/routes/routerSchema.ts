import {FC} from 'react'
import {MiningScreen} from '../screens/MiningScreen'
import {SettingScreen} from '../screens/Settings'
import {WalletScreen} from '../screens/WalletScreen'
import {DeviceScreen} from '../screens/DeviceScreen'

export interface IRoute {
  path: string
  component: FC
  children?: IRoute[]
}

export const routerSchema: IRoute[] = [
  {
    path: '/mining',
    component: MiningScreen,
  },
  {
    path: '/settings',
    component: SettingScreen,
    children: [
      {
        path: '/device',
        component: DeviceScreen,
      },
    ],
  },
  {
    path: '/wallet',
    component: WalletScreen,
  },
]
