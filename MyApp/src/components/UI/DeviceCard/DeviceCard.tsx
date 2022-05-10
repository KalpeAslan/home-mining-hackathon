import React, {FC} from 'react'
import styled from "@emotion/native";
import {Box} from "../Box/Box";
import {Text} from "react-native-paper";
import {DeviceIcon} from "../Icons/Icons";
import {useNavigation} from "@react-navigation/native";

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

    //@ts-ignore
    return <Box maxWidth={302}
                // onPress={navigation.navigate(id)}

    >
        <StyledCard>
            <DeviceIcon/>
            <StyledDescription>
                <StyledText>
                    {
                        name
                    }
                </StyledText>
                <StyledText>
                    {
                        power
                    }
                </StyledText>
                <StyledText>
                    {
                        net
                    }
                </StyledText>
            </StyledDescription>
        </StyledCard>
    </Box>
}
