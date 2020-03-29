import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}> {props.title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    display: 'flex',
    flexDirection: 'row',
    paddingTop: windowHeight / 20,
    paddingBottom: 20,
    backgroundColor: '#353535',
  },
  textStyles: {
    color: '#ffffff',
    paddingLeft: 5,
    fontSize: 20,
  },
});
