import React, {FC} from "react"
import {Appbar} from "react-native-paper"
import {useNavigation, useRoute} from "@react-navigation/native"
import styled from "@emotion/native"
import {TitleColor} from "../../styles/themes"

const {Header, BackAction, Content, Action} = Appbar

const StyledHeader = styled(Header)`
  background: white;
  box-shadow: none;
  elevation: 0;
  border-bottom-width: 0;
`

export const HeaderNav: FC = ({}) => {
    const navigation = useNavigation()

    const route = useRoute()

    return (
        <StyledHeader>
            {
                navigation.canGoBack() && <BackAction onPress={() => navigation.goBack()}/>
            }
            <Content color={TitleColor} title={route.name}/>
            <Action icon={"face-man"}/>
        </StyledHeader>
    )
}
