import React, {FC} from 'react'
import styled from "@emotion/native";
import {BottomNav} from "../components/BottomNav/BottomNav";

const StyledView = styled.View`
  background: white;
  height: 100%;
  width: 100%;
  padding: 0 36px;
`

export const DefaultLayout: FC = ({children}) => {
    return <StyledView>
        {
            children
        }
    </StyledView>
}
