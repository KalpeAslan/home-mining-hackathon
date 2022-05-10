import React, {FC} from 'react'
import {DefaultLayout} from "../layouts/DefaultLayout";
import {Text} from "react-native";
import {useRoute, RouteProp} from '@react-navigation/native';

interface IProps {
}

type StackParamsList = {
    deviceId: {
        id: number
    }
}

export const Device: FC<IProps> = ({}) => {

    const route = useRoute<RouteProp<StackParamsList, 'deviceId'>>()


    return <DefaultLayout>
        <Text>
            Device Page {JSON.stringify(route.params.id)}
        </Text>
    </DefaultLayout>
}
