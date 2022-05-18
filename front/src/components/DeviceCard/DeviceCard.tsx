import React, {FC} from 'react'
import styled from '@emotion/native'
import {Box} from '../UI/Box/Box'
import {Text} from 'react-native-paper'
import {DeviceIcon} from '../UI/Icons/Icons'
import {useNavigation} from '@react-navigation/native'
import {View} from 'react-native'

interface IProps {
  id: number
  net: string
  name: string
  power: number
}

const StyledCard = styled.View`
  width: 100%;
  max-width: 302px;
  height: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

const StyledDescription = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 14px;
`

const StyledText = styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  &:nth-of-type(2) {
    margin: 2px 0;
  }
`

export const DeviceCard: FC<IProps> = ({net, power, name, id}) => {
  const navigation = useNavigation()

  return (
    //@ts-ignore
    <Box maxWidth={302} onPress={() => navigation.navigate('/device', {id})}>
      <StyledCard>
        <View style={{marginRight: 20}}>
          <DeviceIcon />
        </View>
        <StyledDescription>
          <StyledText>{name}</StyledText>
          <StyledText>{power} TH/S</StyledText>
          <StyledText>{net}</StyledText>
        </StyledDescription>
      </StyledCard>
    </Box>
  )
}
