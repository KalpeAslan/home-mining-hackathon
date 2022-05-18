import React, {FC} from 'react';
import { SafeAreaView, View, Text, StyleSheet} from 'react-native';

import Animated from 'react-native-reanimated';
import {G, Line, Path, Svg} from 'react-native-svg';

import {GraphData} from './Graph';
import { ButtonSection } from '../Buttons/ButtonSection'

type LineChartProps = {
    height: number;
    width: number;
    data: GraphData[];
    leftPadding: number;
    bottomPadding: number;
};

export const LineChart: FC<LineChartProps> = ({
                                           height,
                                           width,
                                           data,
                                           bottomPadding,
                                           leftPadding,
                                       }) => {
    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.titleContainer}>
              <Text style={styles.titleText}>FACEBOOK</Text>
              <Text style={styles.titleText}>0</Text>
          </View>
          <Animated.View style={styles.chartContainer}>
              <Svg width={width} height={height} stroke="#6231ff">
                  <G y={-bottomPadding}>
                      <Line
                        x1={leftPadding}
                        y1={height}
                        x2={width}
                        y2={height}
                        stroke={'#d7d7d7'}
                        strokeWidth="1"
                      />
                      <Line
                        x1={leftPadding}
                        y1={height * 0.6}
                        x2={width}
                        y2={height * 0.6}
                        stroke={'#d7d7d7'}
                        strokeWidth="1"
                      />
                      <Line
                        x1={leftPadding}
                        y1={height * 0.2}
                        x2={width}
                        y2={height * 0.2}
                        stroke={'#d7d7d7'}
                        strokeWidth="1"
                      />
                   <Text>
                     {
                       data && data.length && <Path d={data[0].curve} strokeWidth="2" />
                     }
                   </Text>
                  </G>
              </Svg>
          </Animated.View>
          <ButtonSection
            q1Tapped={() => {}}
            q2Tapped={() => {}}
            q3Tapped={() => {}}
            q4Tapped={() => {}}
          />
      </SafeAreaView>
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
    marginHorizontal: 30,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
