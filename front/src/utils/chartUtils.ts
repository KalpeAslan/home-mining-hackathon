import {DataPoint, datas} from "../components/UI/Charts/Graph"
import { curveBasis, line, scaleLinear, scaleTime } from "d3"
import { GRAPH_HEIGHT, GRAPH_WIDTH } from "../components/UI/Charts/LineChart"
import {parse} from 'react-native-redash';
import {LineChartData} from "react-native-chart-kit/dist/line-chart/LineChart";
import {IEarningList} from "../types/common.types";

export const makeGraph = (data: DataPoint[]) => {
  const max = Math.max(...data.map(val => val.value));
  const min = Math.min(...data.map(val => val.value));
  const y = scaleLinear().domain([0, max]).range([GRAPH_HEIGHT, 35]);

  const x = scaleTime()
      .domain([Math.min(...data.map(val => new Date(val.date).getTime())), Math.max(...data.map(val => new Date(val.date).getTime()))])
    .range([10, GRAPH_WIDTH - 10]);

  const curvedLine = line<DataPoint>()
    .x(d => x(new Date(d.date)))
    .y(d => y(d.value))
    .curve(curveBasis)(data);

  return {
    max,
    min,
    curve: parse(curvedLine!),
    mostRecent: data.length ? data[data.length - 1].value : 0,
  };
};



export const accEarningListToChartData = (earningList: IEarningList): LineChartData => {
  return {
    labels: earningList.data.accountProfits.map(value => new Date(value.time).toLocaleDateString('default', {month: 'long'})),
    datasets: [
      {
        data: earningList.data.accountProfits.map(value => value.profitAmount)
      }
    ]
  }
}
