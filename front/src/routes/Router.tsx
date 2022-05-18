import React, {FC} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {MiningScreen} from '../screens/MiningScreen'
import {SettingScreen} from '../screens/Settings'
import {WalletScreen} from '../screens/Wallet'
import {BottomNav} from '../components/BottomNav/BottomNav'
import {HeaderNav} from '../components/Header/Header'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {DeviceScreen} from '../screens/DeviceScreen'
import {useTypedSelector} from '../hooks/hooks'
import {AuthScreen} from '../screens/AuthScreen'
import {ConfigureDeviceScreen} from '../screens/ConfigureDeviceScreen'
import {TransitionSpec} from '@react-navigation/stack/lib/typescript/src/types'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const configureDeviceOption: {
  open: TransitionSpec

  close: TransitionSpec
} = {
  open: {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  },
  close: {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  },
}

const Settings = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen name={'/devices'} component={SettingScreen} />
      <Stack.Screen name={'/device'} component={DeviceScreen} />
      <Stack.Screen
        name={'/configure-device'}
        options={{
          transitionSpec: configureDeviceOption,
        }}
        component={ConfigureDeviceScreen}
      />
    </Stack.Navigator>
  )
}


const Mining = () => {
  return <Stack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
    }}>
    <Stack.Screen name={'/mining'} component={MiningScreen} />
    <Stack.Screen name={'/device'} component={DeviceScreen} />
    <Stack.Screen
      name={'/configure-device'}
      options={{
        transitionSpec: configureDeviceOption,
      }}
      component={ConfigureDeviceScreen}
    />
  </Stack.Navigator>
}

export const Router: FC = () => {
  const {isSigned} = useTypedSelector(state => state.auth)

  return (
    <>
      <NavigationContainer>
        {!isSigned ? (
          <>
            <HeaderNav />
            <Tab.Navigator
              tabBar={props => <BottomNav {...props} />}
              screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
              }}>
              <Tab.Screen
                options={{title: 'Mining'}}
                name="Mining"
                component={Mining}
              />
              <Tab.Screen
                options={{title: 'Settings'}}
                name="Settings"
                component={Settings}
              />
              <Tab.Screen
                options={{title: 'Wallet'}}
                name="Wallet"
                component={WalletScreen}
              />
            </Tab.Navigator>
          </>
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name={'Auth'} component={AuthScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  )
}
