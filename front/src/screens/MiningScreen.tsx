import React, {FC, useEffect, useMemo} from "react"
import {DefaultLayout} from "../layouts/DefaultLayout"
import {useAppDispatch, useTypedSelector} from "../hooks/hooks"
import {setBitcoinMeta, setEarningList} from "../store/slices/mining/mining.thunk"
import {Box} from "../components/UI/Box/Box"
import styled from "@emotion/native"
import {StyledH1, StyledH3, StyledH4} from "../components/UI/Typography/Typography"
import {TitleColor} from "../styles/themes"
import {View, Dimensions, ScrollView} from "react-native"
import {useCountdown} from "../hooks/useCountDown"
import {GraphData} from "../types/common.types"
import {makeGraph} from "../utils/chartUtils"
import {animatedData, animatedData2, animatedData3, datas, originalData} from "../components/UI/Charts/Graph"
import {CoinListAccordion} from "../components/UI/Lists/CoinListAccordion"
import {Divider} from "react-native-paper"
import {LineChart} from "react-native-chart-kit";
import WebView from "react-native-webview";
import {LineChartData} from "react-native-chart-kit/dist/line-chart/LineChart";

const {width} = Dimensions.get("screen")

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

const graphData: GraphData[] = [
    makeGraph(originalData),
    makeGraph(animatedData),
    makeGraph(animatedData2),
];

export const MiningScreen: FC = () => {

    const {
        isLoading,
        hashrateForSecond,
        hashRateForDay,
        hashrateForHour,
        workersCount,
        bitcoinMeta
    } = useTypedSelector(state => state.mining)

    const {minutes, hours} = useCountdown("Tue May 20 2022 23:51:10 GMT+0600 (East Kazakhstan Time)")

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setBitcoinMeta())
        dispatch(setEarningList())
    }, [])


    const data: LineChartData = useMemo(() => {
        return {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
                {
                    data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                    ]
                }
            ]
        }
    }, [])

    return (
        <DefaultLayout>
            {/*Hash Rates*/}
            <StyledHashrates>
                <View style={{width: 105}}>
                    <Box>
                        <StyledHashrate>
                            <StyledH4 style={{color: TitleColor}}>
                                1 сек
                            </StyledH4>
                            <StyledH4 style={{color: TitleColor}}>
                                {
                                    hashrateForSecond
                                } TH/S
                            </StyledH4>
                        </StyledHashrate>
                    </Box>
                </View>
                <View style={{width: 105}}>
                    <Box>
                        <StyledHashrate>
                            <StyledH4 style={{color: TitleColor}}>
                                1 час
                            </StyledH4>
                            <StyledH4 style={{color: TitleColor}}>
                                {
                                    hashrateForHour
                                } TH/S
                            </StyledH4>
                        </StyledHashrate>
                    </Box>
                </View>
                <View style={{width: 105}}>
                    <Box>
                        <StyledHashrate>
                            <StyledH4 style={{color: TitleColor}}>
                                24 часа
                            </StyledH4>
                            <StyledH4 style={{color: TitleColor}}>
                                {
                                    hashRateForDay
                                } TH/S
                            </StyledH4>
                        </StyledHashrate>
                    </Box>
                </View>
            </StyledHashrates>

            {/*Workers Count*/}

            <View style={{marginTop: 20}}>
                <StyledH4 style={{color: TitleColor}}>Количество воркеров: {workersCount}</StyledH4>
            </View>


            {/*Next Payment*/}

            <View style={{width: "100%", justifyContent: "center", alignItems: "center", marginTop: 30}}>
                <StyledH3 style={{color: TitleColor}}>
                    До следущей выплаты
                </StyledH3>
                <StyledH1 style={{color: TitleColor}}>
                    {hours} : {minutes}
                </StyledH1>
            </View>

            {/*  LineChart*/}

           <ScrollView>
               <LineChart

                   data={data}
                   width={Dimensions.get("window").width} // from react-native
                   height={220}
                   yAxisLabel="$"
                   yAxisSuffix="k"
                   yAxisInterval={1} // optional, defaults to 1
                   chartConfig={{
                       backgroundColor: "#e26a00",
                       backgroundGradientFrom: "#fb8c00",
                       backgroundGradientTo: "#ffa726",
                       decimalPlaces: 2, // optional, defaults to 2dp
                       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                       labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                       style: {
                           borderRadius: 16
                       },
                       propsForDots: {
                           r: "6",
                           strokeWidth: "2",
                           stroke: "#ffa726"
                       },

                   }}
                   bezier
                   style={{
                       marginVertical: 8,
                       borderRadius: 16
                   }}
               />
           </ScrollView>
            {/*<LineChart label={'Всего Заработано'} height={CARD_HEIGHT} width={CARD_WIDTH} data={graphData} bottomPadding={20}*/}
            {/*           leftPadding={0} />*/}

            {/*Coins*/}
            <Divider style={{marginBottom: 30, marginTop: 30}}/>
            <View style={{paddingBottom: 50}}>
                <CoinListAccordion title={'Bitcoin'} coin={'BTC'} description={'Bitcoin is the first'}
                                   bitcoinMeta={bitcoinMeta}/>
                {/*<CoinListAccordion title={'Ethereum'} coin={'ETH'} description={'Ethereum is the first'}/>*/}
            </View>

            <View>
            </View>
        </DefaultLayout>
    )
}
