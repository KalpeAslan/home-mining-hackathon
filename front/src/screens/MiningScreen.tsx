import React, { FC, useEffect } from "react"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { useAppDispatch, useTypedSelector } from "../hooks/hooks"
import { getHashrateInSeconds, setWorkersCount } from "../store/slices/mining/mining.thunk"
import { Box } from "../components/UI/Box/Box"
import styled from "@emotion/native"
import { StyledH1, StyledH3, StyledH4 } from "../components/UI/Typography/Typography"
import { TitleColor } from "../styles/themes"
import { Text, View } from "react-native"
import { useCountdown } from "../hooks/useCountDown"
import { binanceApi } from "../api/binanceApi"
import { LineChart } from "../components/UI/Charts/LineChart"
import { Dimensions } from "react-native"
import { animatedData, GraphData } from "../components/UI/Charts/Graph"

const { width } = Dimensions.get("screen")

const StyledHashrates = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

const StyledHashrate = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  height: 85px;
`

const CARD_WIDTH = width - 20
const GRAPH_WIDTH = CARD_WIDTH - 60
const CARD_HEIGHT = 325
const GRAPH_HEIGHT = 200

const graphData: GraphData[] = []

export const MiningScreen: FC = () => {

  const {
    isLoading,
    hashrateForSecond,
    hashRateForDay,
    hashrateForHour,
    workersCount,
  } = useTypedSelector(state => state.mining)

  const { minutes, hours } = useCountdown("Tue May 17 2022 23:51:10 GMT+0600 (East Kazakhstan Time)")

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getHashrateInSeconds())
    dispatch(setWorkersCount())
  }, [])


  return (
    <DefaultLayout>
      {/*Hash Rates*/}
      <StyledHashrates>
        <View style={{ width: 105 }}>
          <Box>
            <StyledHashrate>
              <StyledH4 style={{ color: TitleColor }}>
                1 сек
              </StyledH4>
              <StyledH4 style={{ color: TitleColor }}>
                {
                  hashrateForSecond
                } TH/S
              </StyledH4>
            </StyledHashrate>
          </Box>
        </View>
        <View style={{ width: 105 }}>
          <Box>
            <StyledHashrate>
              <StyledH4 style={{ color: TitleColor }}>
                1 час
              </StyledH4>
              <StyledH4 style={{ color: TitleColor }}>
                {
                  hashrateForHour
                } TH/S
              </StyledH4>
            </StyledHashrate>
          </Box>
        </View>
        <View style={{ width: 105 }}>
          <Box>
            <StyledHashrate>
              <StyledH4 style={{ color: TitleColor }}>
                24 часа
              </StyledH4>
              <StyledH4 style={{ color: TitleColor }}>
                {
                  hashRateForDay
                } TH/S
              </StyledH4>
            </StyledHashrate>
          </Box>
        </View>
      </StyledHashrates>

      {/*Workers Count*/}

      <View style={{ marginTop: 20 }}>
        <StyledH4 style={{ color: TitleColor }}>Количество воркеров: {workersCount}</StyledH4>
      </View>


      {/*Next Payment*/}

      <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
        <StyledH3 style={{ color: TitleColor }}>
          До следущей выплаты
        </StyledH3>
        <StyledH1 style={{ color: TitleColor }}>
          {hours} : {minutes}
        </StyledH1>
      </View>

      {/*  LineChart*/}
      <LineChart height={CARD_HEIGHT} width={CARD_WIDTH} data={graphData} bottomPadding={20}
                 leftPadding={0} />
    </DefaultLayout>
  )
}
