import React, {FC, ReactElement, useCallback} from 'react'
import styled from "@emotion/native";
import {Button, Text} from "react-native-paper";
import IconFeather from 'react-native-vector-icons/Feather'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native';


interface IProps {
}


const StyledNavContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px 20px 20px;
  border: 2px solid #7b7878;
  border-bottom: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;


type NavItem = {
    name: string
    path: string
    icon: string
}

const navItems: NavItem[] = [
    {
        name: 'Settings',
        path: 'settings',
        icon: 'settings'
    },
    {
        name: 'Mining',
        path: 'mining',
        icon: 'pickaxe'
    },
    {
        name: 'Wallet',
        path: 'wallet',
        icon: 'wallet-outline'
    }
]

export const BottomNav: FC<IProps> = ({}) => {

    const computeIcon = useCallback((iconName) => {
        let icon: ReactElement | null;
        switch (iconName) {
            case 'settings':
                icon = <IconFeather style={{marginRight: 20}} size={20} name={'settings'}/>
                break
            case 'pickaxe':
                icon = <IconMaterialCommunityIcons style={{marginRight: 10}} size={20} name={'pickaxe'}/>
                break
            case 'wallet-outline':
                icon = <IconIonicons style={{marginRight: 20}} size={20} name={'wallet-outline'}/>
                break
        }
        return () => icon
    }, [])


    const navigation = useNavigation()

    const onPressHandle = useCallback((path: string) => () => {
        //@ts-ignore
        navigation.navigate(path)
    }, [])

    return <StyledNavContainer>
        {
            navItems.map(({path, name, icon}) => <Button
                icon={computeIcon(icon)}
                onPress={onPressHandle(path)}
                contentStyle={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
                key={path}>
                <Text children={name}/>
            </Button>)
        }
    </StyledNavContainer>
}
