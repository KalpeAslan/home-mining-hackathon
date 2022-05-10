import {configureFonts, DefaultTheme} from 'react-native-paper';
import {Fonts, Theme} from 'react-native-paper/lib/typescript/types';
import {PlatformOSType} from "react-native";


export const Primary = '#4650d0'
export const Secondary = '#ff00e4'


const fontConfig: { [platform in PlatformOSType | 'default']?: Fonts; } = {
        web: {
            regular: {
                fontFamily: 'gadugi-bold',
                fontWeight: 'normal',
            },
            medium: {
                fontFamily: 'gadugi-bold',
                fontWeight: 'normal',
            },
            light: {
                fontFamily: 'gadugi-normals',
                fontWeight: 'normal',
            },
            thin: {
                fontFamily: 'gadugi-normals',
                fontWeight: 'normal',
            },
        },
        ios: {
            regular: {
                fontFamily: 'gadugi-bold',
                fontWeight: 'normal',
            },
            medium: {
                fontFamily: 'gadugi-bold',
                fontWeight: 'normal',
            },
            light: {
                fontFamily: 'gadugi-normal',
                fontWeight: 'normal',
            },
            thin: {
                fontFamily: 'gadugi-normal',
                fontWeight: 'normal',
            },
        },
        android: {
            regular: {
                fontFamily: 'gadugi-bold',
                fontWeight: 'normal',
            },
            medium: {
                fontFamily: 'gadugi-bold',
                fontWeight: 'normal',
            },
            light: {
                fontFamily: 'gadugi-normal',
                fontWeight: 'normal',
            },
            thin: {
                fontFamily: 'gadugi-normal',
                fontWeight: 'normal',
            },
        }
    };

export const theme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: Primary,
        text: '#06287E',
        background: 'white'
    },
    fonts: {
        ...configureFonts(fontConfig)
    },
}
