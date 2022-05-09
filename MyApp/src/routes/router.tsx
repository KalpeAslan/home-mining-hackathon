import React, { FC } from "react";
import { routerSchema } from "./routerSchema";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MiningScreen} from "../screens/Mining";
import {SettingScreen} from "../screens/Settings";
import {WalletScreen} from "../screens/Wallet";
import {BottomNav} from "../components/UI/BottomNav/BottomNav";
const Stack = createNativeStackNavigator();

export const Router: FC = () => {
    return <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="settings" component={SettingScreen}/>
            <Stack.Screen name="mining" component={MiningScreen} />
            <Stack.Screen name="wallet" component={WalletScreen} />
        </Stack.Navigator>
        <BottomNav/>
    </NavigationContainer>
}
