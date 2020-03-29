import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
};
