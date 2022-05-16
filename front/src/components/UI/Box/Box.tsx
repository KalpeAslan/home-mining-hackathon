import React, {FC} from "react";
import LinearGradient from "react-native-linear-gradient";
import {Primary, Secondary} from "../../../styles/themes";
import styled from "@emotion/native";
import {TouchableWithoutFeedback} from "react-native";


const StyledGradient = styled(LinearGradient)`
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
`
const StyledView = styled.View`
  background: white;
  width: 100%;
  border-radius: 20px;
`

interface IProps {
    onPress?: () => void
    maxWidth?: number
}

export const Box: FC<IProps> = ({children, maxWidth, onPress}) => {
    return <TouchableWithoutFeedback onPress={onPress}>
        <StyledGradient
            start={{x: 0.0, y: 0.5}} end={{x: 1, y: 0.5}}
            style={{maxWidth: maxWidth ? maxWidth : '100%'}}
            colors={[Primary, Secondary]}>
            <StyledView>
                {
                    children
                }
            </StyledView>
        </StyledGradient>
    </TouchableWithoutFeedback>
}
