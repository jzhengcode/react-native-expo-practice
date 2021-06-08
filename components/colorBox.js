import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ColorBox({ colorName, colorHex }) {
  const backgroundColor = {
    backgroundColor: colorHex,
  };

  return (
    <View style={[styles.box, backgroundColor]}>
      <Text style={styles.box}>
        {colorName}: {colorHex}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
