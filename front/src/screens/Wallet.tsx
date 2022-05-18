import {FC} from 'react'
import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Box} from '../components/UI/Box/Box'
import {Text} from 'react-native-paper'
import {DefaultLayout} from '../layouts/DefaultLayout'

export const WalletScreen: FC = () => {
  return (
    <DefaultLayout>
      <Box>
        <Text>Hello Wallet Page</Text>
      </Box>
    </DefaultLayout>
  )
}
