import React, {FC} from 'react'
import {DeviceForm} from '../components/Forms/DeviceForm'
import {RouteProp, useRoute} from '@react-navigation/native'
import {Text} from 'react-native'
import {DefaultLayout} from '../layouts/DefaultLayout'

interface IProps {}

type StackParamsList = {
  deviceId: {
    id: number
  }
}

export const ConfigureDeviceScreen: FC<IProps> = ({}) => {
  const route = useRoute<RouteProp<StackParamsList, 'deviceId'>>()
  return (
    <DefaultLayout>
      <Text>{JSON.stringify(route.params.id)}</Text>
      <DeviceForm isActive />
    </DefaultLayout>
  )
}
