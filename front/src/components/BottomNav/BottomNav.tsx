import React, {FC, ReactElement, useCallback, useState} from 'react'
import styled from '@emotion/native'
import {Button, Text} from 'react-native-paper'
import IconFeather from 'react-native-vector-icons/Feather'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import {BottomTabBarProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types'
import {TitleColor} from '../../styles/themes'

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
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  border: 2px solid #d3d1d1;
  background: white;
`

export const BottomNav: FC<BottomTabBarProps> = ({
  navigation,
  state,
  descriptors,
}) => {
  const computeIcon = useCallback(iconName => {
    let icon: ReactElement | null
    switch (iconName) {
      case 'Settings':
        icon = (
          <IconFeather style={{marginRight: 20}} size={20} name={'settings'} />
        )
        break
      case 'Mining':
        icon = (
          <IconMaterialCommunityIcons
            style={{marginRight: 10}}
            size={20}
            name={'pickaxe'}
          />
        )
        break
      case 'Wallet':
        icon = (
          <IconIonicons
            style={{marginRight: 20}}
            size={20}
            name={'wallet-outline'}
          />
        )
        break
    }
    return () => icon
  }, [])

  return (
    <StyledNavContainer>
      {state.routes.map(({path, key, name}, index) => {
        const {options} = descriptors[key]
        const isFocused = state.index === index

        const onPressHandle = useCallback(() => {
          navigation.emit({
            type: 'tabPress',
            target: key,
            canPreventDefault: true,
          })
          //@ts-ignore
          return navigation.navigate({name})
        }, [])

        return (
          <Button
            key={name}
            contentStyle={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            icon={computeIcon(name)}
            onPress={onPressHandle}>
            <Text style={{color: TitleColor}} children={options.title} />
          </Button>
        )
      })}
    </StyledNavContainer>
  )
}
