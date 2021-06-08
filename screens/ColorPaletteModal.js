import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';

export default function ColorPaletteModal() {
  const [paletteName, setColorPalette] = useState('');
  const [colors, setColors] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Name of your color palette</Text>
      <TextInput
        style={styles.input}
        onChangeText={setColorPalette}
        value={paletteName}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
});
