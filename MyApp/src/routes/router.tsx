import React, {FC} from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MiningScreen} from "../screens/Mining";
import {SettingScreen} from "../screens/Settings";
import {WalletScreen} from "../screens/Wallet";
import {BottomNav} from "../components/BottomNav/BottomNav";
import {HeaderNav} from "../components/Header/Header";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()


// const Settings = () => {
//     return <Tab.Navigator defaultScreenOptions={{tabBarStyle: {display: 'none', height: 0, width: 0}}} screenOptions={{headerShown: false}}>
//         <Tab.Screen name={'/settings'} component={SettingScreen}/>
//         <Tab.Screen name={'/device'} component={Device}/>
//     </Tab.Navigator>
// }

export const Router: FC = () => {
    return <NavigationContainer>
        <HeaderNav/>
        <Tab.Navigator
            tabBar={props => <BottomNav {...props}/>}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen options={{title: 'Settings'}} name="/settings" component={SettingScreen}/>
            <Tab.Screen options={{title: 'Mining'}} name="/mining" component={MiningScreen} />
            <Tab.Screen options={{title: 'Wallet'}} name="/wallet" component={WalletScreen} />
        </Tab.Navigator>
    </NavigationContainer>
}
