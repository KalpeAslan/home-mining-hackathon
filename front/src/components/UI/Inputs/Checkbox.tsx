import React, {FC, useCallback} from 'react'
import {TouchableWithoutFeedback} from "react-native";
import styled from "@emotion/native";
import {Text} from "react-native-paper";
import {StyledH1} from "../Typography/Typography";

interface IProps {
    isActive: boolean
    label: string
    value: string | number
    onPress: ((value?: string | number) => void)
}

const StyledView = styled.View`
  background: #99CCFF;
  width: 90px;
  height: 90px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: ${(props: { isActive: boolean }) => props.isActive ? '2px solid #0080FF' : 'none'};
  margin: 0 10px;
`


export const Checkbox: FC<IProps> = ({isActive, value, onPress, label}) => {

    const handleOnPress = useCallback(() => {
        onPress()
    }, [value])

    return <TouchableWithoutFeedback onPress={handleOnPress}>
        <StyledView isActive={isActive}>
            <Text>{label}</Text>
            <StyledH1>{value}</StyledH1>
        </StyledView>
    </TouchableWithoutFeedback>
}
