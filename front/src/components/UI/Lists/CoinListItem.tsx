import React, { FC, useMemo } from "react"
import { List, Text } from "react-native-paper"
import { BitcoinSvg } from "../Icons/Icons"
import styled from "@emotion/native"
import { View } from "react-native"
import { TextSecondary } from "../../../styles/themes"
import { ICoinMeta } from "../../../store/slices/mining/mining.state"

interface IProps {
  title: string
  description?: string
  coin?: "BTC" | "ETH"
  bitcoinMeta?: ICoinMeta
}

const StyledAccordion = styled.View`
  border: 1px solid #e0e0e0;
  max-width: 100%;
  width: 100%;
  padding: 0;
  border-radius: 4px;
`

const IconContainer = styled.View`
  transform: scale(0.5);
  max-width: 64px;
  max-height: 60px;
`


export const CoinListItem: FC<IProps> = ({ title, description, coin, bitcoinMeta }) => {
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


  return <>
    <StyledAccordion>
      <List.Accordion
        style={{padding: 0}}
        title={"Bitcoin"}
        left={() => <IconContainer><BitcoinSvg /></IconContainer>}
      >
        <List.Item title={probability} description={'Вероятность нахождения блока'}/>
        <List.Item title={diff} description={'Сложность нахождения блока'}/>
        <List.Item title={`${eta} сек`} description={'Примерное время до следующего блока'}/>
        <List.Item title={`${bcperblock} BTC`} description={'Текущее вознаграждение за блок'}/>
        <List.Item title={hashestowin} description={'Среднее кол-во попыток хэширования, для решения блока'}/>
        <List.Item title={avgtxvalue} description={'Средняя стоимость транзакции'}/>
      </List.Accordion>
    </StyledAccordion>
  </>
  // return <StyledListItemContainer>
  //   <IconContainer><BitcoinSvg /></IconContainer>
  //   <View style={{ width: "100%" }}>
  //     <ViewSpaceBetween>
  //       <Text style={{ flex: 0.5 }}>
  //         Bitcoin
  //       </Text>
  //       <Text style={{ flex: 0.5, marginLeft: 120 }}>
  //         Eth
  //       </Text>
  //     </ViewSpaceBetween>
  //     <ViewSpaceBetween>
  //       <StyledDescriptionText style={{ flex: 0.5 }}>
  //         Bitcoin
  //       </StyledDescriptionText>
  //       <StyledDescriptionText style={{ flex: 0.5, marginLeft: 120 }}>
  //         Eth
  //       </StyledDescriptionText>
  //     </ViewSpaceBetween>
  //   </View>
  // </StyledListItemContainer>
}


// const StyledListItemContainer = styled.View`
//   border: 1px solid #e0e0e0;
//   max-width: 100%;
//   width: 100%;
//   padding: 0;
//   border-radius: 4px;
//   flex-direction: row;
//   justify-content: flex-start;
//   align-items: center;
// `

//
// const ViewSpaceBetween = styled.View`
//   width: 100%;
//   flex-direction: row;
// `
// const StyledTitleText = styled(Text)`
// `
//
//
// const StyledDescriptionText = styled(Text)`
//   color: ${TextSecondary};
// `
