import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

import ColorBox from './components/colorBox';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Here are some boxes of different colours</Text>
      <ColorBox colorName="Cyan" colorHex="#2aa198" />
      <ColorBox colorName="Blue" colorHex="#268bd2" />
      <ColorBox colorName="Magenta" colorHex="#d33682" />
      <ColorBox colorName="Orange" colorHex="#cb4b16" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 50,
  },
});
