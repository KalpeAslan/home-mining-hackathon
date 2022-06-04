import { FC, useEffect } from "react"
import React from "react"
import { Dimensions, TouchableOpacity, View } from "react-native"
import { Button, IconButton, Text, Title } from "react-native-paper"
import { useAppDispatch, useTypedSelector } from "../hooks/hooks"
import { setAccountInfoWallet, setTotalUsdBalance } from "../store/slices/wallet/wallet.thunk"
import styled from "@emotion/native"
import { DarkLayout } from "../layouts/DarkLayout"
import { StyledH2, StyledH4, StyledH3 } from "../components/UI/Typography/Typography"
import IconIonicons from "react-native-vector-icons/Ionicons"
import { CoinListItem } from "../components/UI/Lists/CoinListItem"
import { IAccountInfo } from "../store/slices/wallet/wallet.state"
import { utils } from "../utils/utils"
import { setEarningList } from "../store/slices/mining/mining.thunk"
import { IEarningList } from "../types/common.types"
import { useNavigation } from "@react-navigation/native"


const height = Dimensions.get("window").height - 200

const StyledWalletHeader = styled.View`
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
`

const StyledWalletContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: ${height}px;
  background: white !important;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0 36px 100px 36px;
`

export const WalletScreen: FC = () => {

  const { accountInfo, totalUsdBalance, coinBalancesToUsd } = useTypedSelector(state => state.wallet)
  const { earningList } = useTypedSelector(state => state.mining)


  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setAccountInfoWallet())
    dispatch(setEarningList())
  }, [])

  useEffect(() => {
    if (accountInfo) dispatch(setTotalUsdBalance())
  }, [accountInfo])


  const { balances } = accountInfo as IAccountInfo || {}
  const { data } = earningList as IEarningList || {}

  const navigation = useNavigation()

  return (
    <DarkLayout>
      <StyledWalletHeader>
        {/*<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>*/}
        {/*<StyledCoin>*/}
        {/*  <BitcoinSvg/>*/}
        {/*</StyledCoin>*/}

        {/*<StyledH2 style={{color: 'white'}}>*/}
        {/*  Bitcoin*/}
        {/*</StyledH2>*/}
        {/*</View>*/}

        <StyledH4 style={{ color: "white" }}>Общий Баланс</StyledH4>
        {
          totalUsdBalance && <StyledH2 style={{ color: "white" }}>$ {utils.normalizeSum(totalUsdBalance)} USD</StyledH2>
        }

        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
          <TouchableOpacity>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <IconButton size={32}
                          style={{
                            backgroundColor: "deepskyblue",
                            paddingBottom: 5,
                          }}
                          icon={() => <IconIonicons color={"white"} size={32} name={"ios-arrow-redo-outline"} />} />
              <Text style={{ color: "white" }}>Снять</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <IconButton size={32}
                          style={{
                            backgroundColor: "deepskyblue",
                            paddingLeft: 2.5,
                            paddingBottom: 1,
                          }}
                          icon={() => <IconIonicons color={"white"} size={32} name={"add-circle-outline"} />} />
              <Text style={{ color: "white" }}>Купить</Text>
            </View>
          </TouchableOpacity>
        </View>
      </StyledWalletHeader>
      <StyledWalletContainer>

        {/*Balance*/}
        <View style={{ width: "100%" }}>
          <StyledH3 style={{ marginBottom: 10, marginTop: 30 }}>Баланс</StyledH3>
        </View>
        {
          balances && balances.map(({ asset, free, locked }) => <CoinListItem title={"Bitcoin"} coin={asset}
                                                                              amountInUsd={coinBalancesToUsd ? coinBalancesToUsd.get(asset) : ""}
                                                                              key={asset} amount={+free + (+locked)} />)
        }

        {/*  Transactions*/}
        <View style={{ width: "100%" }}>
          <StyledH3 style={{ marginBottom: 10, marginTop: 30 }}>Транзакции</StyledH3>
        </View>
        {
          data &&
          data.accountProfits.map(({ coinName, time, profitAmount }) =>
            <CoinListItem title={"Bitcoin"}
                          coin={coinName}
                          key={time}
                          amount={profitAmount}
                          customConvertToUsd
                          profit
                          onPress={() =>
                            //@ts-ignore
                            navigation.navigate("/wallet-coin-transactions", { name: coinName })}
            />)
        }
        <CoinListItem title={"NFT's"} coin={"NFT"}
                      onPress={() =>
                        //@ts-ignore
                        navigation.navigate("/wallet-coin-transactions", { name: "NFT" })} />
      </StyledWalletContainer>
    </DarkLayout>
  )
}



