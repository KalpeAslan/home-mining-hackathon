import React, { FC } from "react"
import styled from "@emotion/native"
import { ScrollView } from "react-native"
import { useRefresh } from "../hooks/useRefresh"

const StyledView = styled.View`
  width: 100%;
  background: #230066;
  justify-content: center;
  align-items: center;
`

export const DarkLayout: FC = ({ children }) => {
  const {refreshControl} = useRefresh()

  return (
    <StyledView>
      <ScrollView refreshControl={refreshControl} style={{width: '100%'}}>
        {children}
      </ScrollView>
    </StyledView>
  )
}
