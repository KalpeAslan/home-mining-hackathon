import {FC, Fragment} from "react";
import React from 'react'
import {Text} from "react-native-paper";
import {DeviceCard} from "../components/UI/DeviceCard/DeviceCard";
import {DefaultLayout} from "../layouts/DefaultLayout";


const devices = [
    {
        name: 'Avalon 1246',
        net: 'BTC',
        power: 100,
        id: 0
    },
    {
        name: 'Avalon 1246',
        net: 'BTC',
        power: 100,
        id: 1
    },
    {
        name: 'Avalon 1246',
        net: 'BTC',
        power: 100,
        id: 2
    },
]

export const SettingScreen: FC = () => {
    return <DefaultLayout>
        <Text style={{marginBottom: 20}}>
            Ваши оборудования
        </Text>

        {
            devices.map(({name, net, power, id}, i) => <Fragment key={i}><DeviceCard id={id} net={net} name={name}
                                                                                 power={power}/></Fragment>)
        }
    </DefaultLayout>
}
