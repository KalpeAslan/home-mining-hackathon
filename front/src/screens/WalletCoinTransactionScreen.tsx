import React, {FC, useMemo} from "react"
import {ScrollView, Text} from "react-native"
import {DefaultLayout} from "../layouts/DefaultLayout"
import {RouteProp, useRoute} from "@react-navigation/native"
import {CARD_HEIGHT, CARD_WIDTH} from "../components/UI/Charts/LineChart"
import {IEarningList} from "../types/common.types"
import {useTypedSelector} from "../hooks/hooks"
import {accEarningListToChartData} from "../utils/chartUtils"
import {LineChart} from "react-native-chart-kit";

interface IProps {
}

type StackParamsList = {
    coin: {
        name: string | "BTC" | "NFT" | "ETH" | "LTC"
    }
}


export const WalletCoinTransactionScreen: FC<IProps> = ({}) => {
    const route = useRoute<RouteProp<StackParamsList, "coin">>()

    const {earningList} = useTypedSelector(state => state.mining)

    const {data} = earningList as IEarningList || {}

    // const graphData: GraphData[] = useMemo(() => {
    //     if (!data) return []
    //     const dataPoints = data.accountProfits.reduce((prev, current) => {
    //         if (current.coinName === route.params.name) {
    //             prev = [...prev, {
    //                 date: new Date(current.time).toString(),
    //                 value: +current.profitAmount,
    //             }]
    //         }
    //         return prev
    //     }, [] as DataPoint[])
    //
    //     console.log(dataPoints)
    //     return [makeGraph(dataPoints)]
    // }, [data])

    // const computedShowChart = useMemo(() => route.params.name !== 'NFT' && data && graphData.length, [graphData, route])

    const computedShowChart = useMemo(() => route.params.name !== 'NFT' && earningList && earningList.data.accountProfits, [data, route])

    const dataChart = useMemo(() => {
        return accEarningListToChartData(earningList!)
    }, [data])


    return <DefaultLayout>
        <Text>{route.params.name}</Text>
        {
            computedShowChart &&
            <ScrollView horizontal>
                <LineChart data={dataChart} width={CARD_WIDTH} height={CARD_HEIGHT} yAxisLabel="$"
                           yAxisSuffix="k"
                           yAxisInterval={1} // optional, defaults to 1
                           chartConfig={{
                               backgroundColor: "#230066",
                               backgroundGradientFrom: "#230066",
                               backgroundGradientTo: "#230066",
                               decimalPlaces: 2, // optional, defaults to 2dp
                               color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                               labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                               style: {
                                   borderRadius: 16
                               },
                               propsForDots: {
                                   r: "6",
                                   strokeWidth: "2",
                                   stroke: "deepskyblue"
                               },

                           }}
                           bezier
                           style={{
                               marginVertical: 8,
                               borderRadius: 16
                           }}/>
            </ScrollView>
            // <LineChart height={CARD_HEIGHT} width={CARD_WIDTH} data={graphData} leftPadding={0} bottomPadding={20}
            //            label={"График заработка"} />
        }
    </DefaultLayout>
}
