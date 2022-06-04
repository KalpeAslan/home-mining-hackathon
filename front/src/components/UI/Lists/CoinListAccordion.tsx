import React, { FC, useMemo } from "react"
import { List } from "react-native-paper"
import { BitcoinSvg } from "../Icons/Icons"
import styled from "@emotion/native"
import { ICoinMeta } from "../../../store/slices/mining/mining.state"
import { StyledCoinList } from "./stylesList"

interface IProps {
  title: string
  description?: string
  coin?: "BTC" | "ETH"
  bitcoinMeta?: ICoinMeta
}


const IconContainer = styled.View`
  transform: scale(0.5);
  max-width: 64px;
  max-height: 60px;
`


export const CoinListAccordion: FC<IProps> = ({ title, description, coin, bitcoinMeta }) => {
  // return <StyledListItem title={title} description={description || ''}
  //                   left={() => (coin === 'BTC' || !coin) && <IconContainer><BitcoinSvg/></IconContainer>}
  // />


  const metaCoinInfo = useMemo(() => {
    if (coin === "BTC" || !coin && bitcoinMeta) {
      return bitcoinMeta
    }
    return {}
  }, [bitcoinMeta])
  const { avgtxvalue, hashestowin, probability, eta, bcperblock, diff } = metaCoinInfo as ICoinMeta || {}


  return <StyledCoinList>
    <List.Accordion
      style={{ padding: 0 }}
      title={"Bitcoin"}
      left={() => <IconContainer><BitcoinSvg /></IconContainer>}
    >
      <List.Item title={probability} description={'Вероятность нахождения блока'} />
      <List.Item title={diff} description={'Сложность нахождения блока'} />
      <List.Item title={`${eta} сек`} description={'Примерное время до следующего блока'} />
      <List.Item title={`${bcperblock} BTC`} description={'Текущее вознаграждение за блок'} />
      <List.Item title={hashestowin} description={'Среднее кол-во попыток хэширования, для решения блока'} />
      <List.Item title={avgtxvalue} description={'Средняя стоимость транзакции'} />
    </List.Accordion>
  </StyledCoinList>
}
