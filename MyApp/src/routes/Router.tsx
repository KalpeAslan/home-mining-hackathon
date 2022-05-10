import React, {FC} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MiningScreen} from "../screens/Mining";
import {SettingScreen} from "../screens/Settings";
import {WalletScreen} from "../screens/Wallet";
import {BottomNav} from "../components/BottomNav/BottomNav";
import {HeaderNav} from "../components/Header/Header";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Device} from "../screens/Device";
import {useTypedSelector} from "../hooks/hooks";
import {AuthScreen} from "../screens/AuthScreen";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()


// const Settings = () => {
//     return <Tab.Navigator defaultScreenOptions={{tabBarStyle: {display: 'none', height: 0, width: 0}}} screenOptions={{headerShown: false}}>
//         <Tab.Screen name={'/settings'} component={SettingScreen}/>
//         <Tab.Screen name={'/device'} component={Device}/>
//     </Tab.Navigator>
// }

const Settings = () => {
    return <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'/devices'} component={SettingScreen}/>
        <Stack.Screen name={'/device'} component={Device}/>
    </Stack.Navigator>
}

export const Router: FC = () => {

    const {isSigned} = useTypedSelector(state => state.auth)

    return <>
        <NavigationContainer>
            {
                isSigned ?
                    <>
                        <HeaderNav/>
                        <Tab.Navigator
                            tabBar={props => <BottomNav {...props}/>}
                            screenOptions={{
                                headerShown: false,
                            }}
                        >
                            <Tab.Screen options={{title: 'Settings'}} name="Settings" component={Settings}/>
                            <Tab.Screen options={{title: 'Mining'}} name="Mining" component={MiningScreen}/>
                            <Tab.Screen options={{title: 'Wallet'}} name="Wallet" component={WalletScreen}/>
                        </Tab.Navigator>
                    </>
                    :
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}
                    >
                        <Stack.Screen name={'Auth'} component={AuthScreen}/>
                    </Stack.Navigator>
            }
        </NavigationContainer>

    </>
}
