import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function SampleBox({ hexColor }) {
  const color = {
    backgroundColor: hexColor,
  };

  return <View style={[styles.box, color]} />;
}

const styles = StyleSheet.create({
  height: 30,
  width: 30,
  marginRight: 5,
});
