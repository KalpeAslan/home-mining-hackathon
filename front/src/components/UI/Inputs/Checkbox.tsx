import React, {FC, useCallback} from 'react'
import {TouchableWithoutFeedback} from 'react-native'
import styled from '@emotion/native'
import {Text} from 'react-native-paper'
import {StyledH3} from '../Typography/Typography'

interface IProps {
  isActive: boolean
  label: string
  value: string | number
  onPress: (value?: string | number) => void
}

const StyledView = styled.View`
  background: #99ccff;
  width: 90px;
  height: 90px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: ${(props: {isActive: boolean}) =>
    props.isActive ? '2px solid #0080FF' : 'none'};
  margin: 0 10px;
`

export const Checkbox: FC<IProps> = ({isActive, value, onPress, label}) => {
  const handleOnPress = useCallback(() => {
    onPress()
  }, [value])

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <StyledView isActive={isActive}>
        <Text>{label}</Text>
        <StyledH3>{value}</StyledH3>
      </StyledView>
    </TouchableWithoutFeedback>
  )
}
