import React, {FC, useCallback} from 'react'
import {DefaultLayout} from '../layouts/DefaultLayout'
import {Text, View} from 'react-native'
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native'
import {Checkbox} from '../components/UI/Inputs/Checkbox'
import {useAppDispatch, useTypedSelector} from '../hooks/hooks'
import {TWorkMode} from '../types/devices.types'
import {changeDeviceWorkModeThunk} from '../store/slices/devices/devices.thunk'
import RNSpeedometer from 'react-native-speedometer'
import {DeviceForm} from '../components/Forms/DeviceForm'
import {WarningButton} from '../components/UI/Buttons/Buttons'
import {Button} from 'react-native-paper'

interface IProps {}

type StackParamsList = {
  deviceId: {
    id: number
  }
}

const speedometerLabels = [
  {
    name: 'Unbelievably Fast',
    labelColor: '#00ff6b',
    activeBarColor: '#00ff6b',
  },
  {
    name: 'Fast',
    labelColor: '#14eb6e',
    activeBarColor: '#14eb6e',
  },
  {
    name: 'Normal',
    labelColor: '#f2cf1f',
    activeBarColor: '#f2cf1f',
  },
  {
    name: '',
    labelColor: '#f4ab44',
    activeBarColor: '#f4ab44',
  },
  {
    name: 'Very Slow',
    labelColor: '#ff5400',
    activeBarColor: '#ff5400',
  },
  {
    name: 'Too Slow',
    labelColor: '#ff2900',
    activeBarColor: '#ff2900',
  },
]
export const DeviceScreen: FC<IProps> = ({}) => {
  const route = useRoute<RouteProp<StackParamsList, 'deviceId'>>()
  const {currentDevice} = useTypedSelector(state => state.devices)
  const dispatch = useAppDispatch()

  const navigation = useNavigation()

  const handleCheckbox = useCallback(
    (workMode: TWorkMode) => {
      return () => {
        if (currentDevice) {
          dispatch(changeDeviceWorkModeThunk(workMode))
        }
      }
    },
    [currentDevice],
  )

  return (
    <DefaultLayout>
      <Text>Device Page {String(route.params.id)}</Text>
      <View style={{marginBottom: 50}}>
        <RNSpeedometer
          labels={speedometerLabels}
          size={200}
          value={50}
          maxValue={100}
        />
      </View>
      {currentDevice && (
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Checkbox
            isActive={currentDevice.workMode === 'normal'}
            label={'Work Mode'}
            value={'normal'}
            onPress={handleCheckbox('normal')}
          />
          <Checkbox
            isActive={currentDevice.workMode === 'high'}
            label={'Work Mode'}
            value={'high'}
            onPress={handleCheckbox('high')}
          />
        </View>
      )}
      {/*@ts-ignore*/}
      <DeviceForm
        isActive={false}
        onPress={() =>
          navigation.navigate('/configure-device', {id: route.params.id})
        }
      />

      <Button
        mode={'outlined'}
        color={'red'}
        style={{
          borderColor: 'red',
          borderWidth: 1,
          marginTop: 10,
          marginBottom: 10,
        }}>
        <Text style={{fontFamily: 'gadugi-normals'}}>Reboot Miner</Text>
      </Button>
    </DefaultLayout>
  )
}
