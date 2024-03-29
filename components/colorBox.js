import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ColorBox({ colorName, colorHex }) {
  const backgroundColor = {
    backgroundColor: colorHex,
  };

  const textColor = {
    color:
      parseInt(colorHex.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    <View style={[styles.box, backgroundColor]}>
      <Text style={[styles.box, textColor]}>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 5,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
