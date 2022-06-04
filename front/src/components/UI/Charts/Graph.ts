import { charts } from "./charts"

export type DataPoint = {
  date: string;
  value: number;
};

export const originalData: DataPoint[] = [
  {date: '2000-02-01T05:00:00.000Z', value: 250},
  {date: '2000-02-15T05:00:00.000Z', value: 600.47},
];

export const animatedData: DataPoint[] = [
  {date: '2000-02-01T05:00:00.000Z', value: 500},
  {date: '2000-02-02T05:00:00.000Z', value: 400.0},
  {date: '2000-02-03T05:00:00.000Z', value: 300.0},
  {date: '2000-02-04T05:00:00.000Z', value: 400.0},
  {date: '2000-02-05T05:00:00.000Z', value: 500.0},
  {date: '2000-02-06T05:00:00.000Z', value: 1000.98},
  {date: '2000-02-07T05:00:00.000Z', value: 500.0},
  {date: '2000-02-08T05:00:00.000Z', value: 200.0},
  {date: '2000-02-09T05:00:00.000Z', value: 1300.75},
  {date: '2000-02-10T05:00:00.000Z', value: 400.0},
  {date: '2000-02-11T05:00:00.000Z', value: 500.0},
  {date: '2000-02-12T05:00:00.000Z', value: 900.98},
  {date: '2000-02-13T05:00:00.000Z', value: 600.0},
  {date: '2000-02-14T05:00:00.000Z', value: 250.0},
  {date: '2000-02-15T05:00:00.000Z', value: 330.67},
];

export const animatedData2: DataPoint[] = [
  {date: '2000-02-01T05:00:00.000Z', value: 250},
  {date: '2000-02-02T05:00:00.000Z', value: 300.0},
  {date: '2000-02-03T05:00:00.000Z', value: 400.0},
  {date: '2000-02-04T05:00:00.000Z', value: 100.0},
  {date: '2000-02-05T05:00:00.000Z', value: 100.0},
  {date: '2000-02-06T05:00:00.000Z', value: 700.0},
  {date: '2000-02-07T05:00:00.000Z', value: 1300.11},
  {date: '2000-02-08T05:00:00.000Z', value: 900.0},
  {date: '2000-02-09T05:00:00.000Z', value: 100.0},
  {date: '2000-02-10T05:00:00.000Z', value: 100.0},
  {date: '2000-02-11T05:00:00.000Z', value: 100.0},
  {date: '2000-02-12T05:00:00.000Z', value: 700.0},
  {date: '2000-02-13T05:00:00.000Z', value: 1100.11},
  {date: '2000-02-14T05:00:00.000Z', value: 900.0},
  {date: '2000-02-15T05:00:00.000Z', value: 100.96},
];

export const animatedData3: DataPoint[] = [
  {date: '2000-02-01T05:00:00.000Z', value: 250},
  {date: '2000-02-02T05:00:00.000Z', value: 600.0},
  {date: '2000-02-03T05:00:00.000Z', value: 350.0},
  {date: '2000-02-04T05:00:00.000Z', value: 900.0},
  {date: '2000-02-05T05:00:00.000Z', value: 80.0},
  {date: '2000-02-06T05:00:00.000Z', value: 1000.76},
  {date: '2000-02-07T05:00:00.000Z', value: 300.0},
  {date: '2000-02-08T05:00:00.000Z', value: 100.0},
  {date: '2000-02-09T05:00:00.000Z', value: 900.0},
  {date: '2000-02-10T05:00:00.000Z', value: 900.0},
  {date: '2000-02-11T05:00:00.000Z', value: 80.0},
  {date: '2000-02-12T05:00:00.000Z', value: 1000.76},
  {date: '2000-02-13T05:00:00.000Z', value: 300.0},
  {date: '2000-02-14T05:00:00.000Z', value: 100.0},
  {date: '2000-02-15T05:00:00.000Z', value: 900.53},
];


export const datas = charts.map((value) => ({date: new Date().toString(), value: value.x + value.y}))
