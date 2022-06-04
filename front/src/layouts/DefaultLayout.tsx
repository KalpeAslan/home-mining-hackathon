import React, { FC } from "react"
import styled from "@emotion/native"
import { ScrollView } from "react-native"
import { useRefresh } from "../hooks/useRefresh"
import { HeaderNav } from "../components/Header/Header"

const StyledView = styled.View`
  background: white;
  width: 100%;
  padding: 0 36px 100px 36px;
  border-radius: 30px;
  height: 100%;
`

export const DefaultLayout: FC = ({ children }) => {
  const { refreshControl } = useRefresh()

  return (
    <>
      <HeaderNav />
      <StyledView>
        <ScrollView refreshControl={refreshControl}>{children}</ScrollView>
      </StyledView>
    </>
  )
}
