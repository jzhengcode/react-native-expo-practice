import React, { useState, useCallback } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';

const COLORS = [
  { colorName: 'AliceBlue', hexCode: '#F0F8FF' },
  { colorName: 'AntiqueWhite', hexCode: '#FAEBD7' },
  { colorName: 'Aqua', hexCode: '#00FFFF' },
];

export default function ColorPaletteModal() {
  const [palette, setPalette] = useState({});
  const [paletteName, setPaletteName] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  const submit = () => {
    if (!paletteName) {
      Alert.alert('Please enter a palette name');
    }
  };

  const handleSubmit = useCallback(submit, [paletteName]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Name of your color palette</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPaletteName}
        value={paletteName}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  input: {
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
