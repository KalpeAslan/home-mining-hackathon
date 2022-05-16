import {configureFonts, DefaultTheme} from 'react-native-paper';
import {Fonts, Theme} from 'react-native-paper/lib/typescript/types';
import {PlatformOSType} from "react-native";


export const Primary = '#4650d0'
export const Secondary = '#ff00e4'
export const TitleColor = '#06287E'

const fontConfig: { [platform in PlatformOSType | 'default']?: Fonts; } = {
        web: {
            regular: {
                fontFamily: 'gadugi-normals',
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
                fontFamily: 'gadugi-normals',
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
        android: {
            regular: {
                fontFamily: 'gadugi-normals',
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
        }
    };

export const theme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white'
    },
    fonts: {
        ...configureFonts(fontConfig)
    },
}
