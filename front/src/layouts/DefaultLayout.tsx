import React, {FC} from 'react'
import styled from '@emotion/native'
import {ScrollView} from 'react-native'

const StyledView = styled.View`
  background: white;
  height: 100%;
  width: 100%;
  padding: 0 36px 100px 36px;
`

export const DefaultLayout: FC = ({children}) => {
  return (
    <StyledView>
      <ScrollView>{children}</ScrollView>
    </StyledView>
  )
}
