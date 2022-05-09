import { FC } from "react";
import React from 'react'
import {StyleSheet, View} from "react-native";
import {Box} from "../components/UI/Box/Box";
import {Text} from "react-native-paper";
import LinearGradient from 'react-native-linear-gradient';


export const WalletScreen: FC = () => {
    return  <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <Text style={styles.buttonText}>
            Sign in with Facebook
        </Text>
    </LinearGradient>
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});
