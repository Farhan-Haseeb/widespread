import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Card = props => {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.textStyles}> {props.title} </Text>
      <Text style={[styles.textStyles, styles.pushRight]}>{props.counts}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 10,
    margin: 10,
    padding: 10,
    backgroundColor: '#353535',
    borderRadius: 5,
  },
  textStyles: {
    paddingBottom: 5,
    color: '#ffffff',
  },
  pushRight: {
    paddingLeft: 20,
  },
});
