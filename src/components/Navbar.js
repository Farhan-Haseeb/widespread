import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Navbar = () => {
  return (
    <View style={styles.containerStyles}>
      <Text>Hey there I am</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    width: windowWidth,
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: windowHeight / 20,
    paddingTop: 10,
    paddingLeft: 20,
    backgroundColor: '#fff',
  },
});
