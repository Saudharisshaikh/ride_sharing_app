import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {TextProps} from './types';


const SmallText = (props: TextProps) => {
  return (
    <Text style={[styles.defaultStyles, props.textStyles]}>
      {props.children}
    </Text>
  );
};

export default SmallText;

const styles = StyleSheet.create({
  defaultStyles: {
    fontSize: 15,
  },
});
