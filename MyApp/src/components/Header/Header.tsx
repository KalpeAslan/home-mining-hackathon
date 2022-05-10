import React, {FC} from 'react'
import {Appbar} from 'react-native-paper';
import {useNavigation} from "@react-navigation/native";
import styled from "@emotion/native";
import {theme} from "../../styles/themes";

const {Header, BackAction, Content, Action} = Appbar


const StyledHeader = styled(Header)`
  background: white;
  box-shadow: none;
  elevation: 0;
  border-bottom-width: 0;
`


export const HeaderNav: FC = ({}) => {
    const navigation = useNavigation()
    return <StyledHeader>
        <BackAction
            onPress={() => navigation.goBack()}
        />
        <Content color={theme.colors.text} title={'Settings'}/>
        <Action icon={'face-man'}/>
    </StyledHeader>
}
