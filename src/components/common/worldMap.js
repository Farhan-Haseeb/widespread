import React from 'react';
import {StyleSheet, View, Stylesheet} from 'react-native';
import HighchartsReactNative from '@highcharts/highcharts-react-native';

export const WorldMap = props => {
  return (
    <HighchartsReactNative
      styles={styles.container}
      options={this.state.chartOptions}
      modules={modules}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 200,
    // width: 200,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
