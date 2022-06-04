import React, { FC, useEffect, useMemo, useState } from "react"
import { List, Text } from "react-native-paper"
import { BitcoinSvg } from "../Icons/Icons"
import { NFTIcon } from "../Icons/NFTIcon"
import styled from "@emotion/native"
import { TouchableOpacity, View } from "react-native"
import { StyledCoinList } from "./stylesList"
import { converterApi } from "../../../api/converterApi"
import { utils } from "../../../utils/utils"

interface IProps {
  title: string
  coin: "BTC" | "ETH" | string
  amount?: string | number
  amountInUsd?: string | number
  customConvertToUsd?: boolean
  profit?: boolean
  onPress?: () => void
}


const IconContainer = styled.View`
  transform: scale(0.5);
  max-width: 64px;
  max-height: 60px;
`


export const CoinListItem: FC<IProps> = ({ title, coin, amount, amountInUsd, customConvertToUsd, profit, onPress }) => {


  const [amountInUsdState, setAmountInUsd] = useState("")

  useEffect(() => {
    (async () => {
      if (!customConvertToUsd) return setAmountInUsd(amountInUsd as string)
      try {
        const usd = await converterApi.btcToUsd(Number(amount || 0))
        setAmountInUsd(usd)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [customConvertToUsd, amountInUsd, amount])


  const computedIcon = useMemo(() => {
    switch (coin) {
      case "NFT":
        return <NFTIcon />
      case "BTC":
        return <IconContainer><BitcoinSvg /></IconContainer>
      default:
        return <IconContainer><BitcoinSvg /></IconContainer>
    }
  }, [coin])

  const content = useMemo(() => {
    return <StyledCoinList style={{ marginBottom: 10 }}>
      <List.Item
        style={{ padding: 0, width: "100%", backgroundColor: "white" }}
        title={title}
        right={() => (amount && coin &&
          <View style={{ justifyContent: "center", paddingRight: 10 }}><Text
            style={{ color: profit ? "green" : "" }}>{`${profit ? "+ " : ""}${amount} ${coin}`}</Text></View>)}
        left={() => computedIcon}
        description={amountInUsdState && `~$ ${utils.normalizeSum(amountInUsdState)}`}
      />
    </StyledCoinList>
  }, [computedIcon, amountInUsdState, coin, amount, title, profit])


  return onPress ? <TouchableOpacity style={{width: '100%'}} onPress={onPress}>{content}</TouchableOpacity> : content
}
