import React, { useState, useCallback } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  FlatList,
  View,
  Switch,
} from 'react-native';

import { COLORS } from '../assets/COLORS';

export default function ColorPaletteModal({ navigation }) {
  const [paletteName, setPaletteName] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  const submit = () => {
    if (!paletteName) {
      Alert.alert('Please enter a palette name');
    } else {
      const newColorPalette = { paletteName, selectedColors };
      navigation.navigate('Home', { newColorPalette });
    }
  };

  const handleSubmit = useCallback(submit, [paletteName]);
  const handleUpdate = useCallback(
    (color, newValue) => {
      if (newValue === true) {
        setSelectedColors((current) => [...current, color]);
      } else {
        setSelectedColors((current) =>
          current.filter((c) => c.colorName !== color.colorName),
        );
      }
    },
    [selectedColors, setSelectedColors],
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text>Name of your color palette</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPaletteName}
        value={paletteName}
      />
      <ColorList
        colors={COLORS}
        handleToggle={handleUpdate}
        selectedColors={selectedColors}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const ColorList = ({ colors, handleToggle, selectedColors }) => (
  <FlatList
    style={styles.list}
    data={colors}
    keyExtractor={(item) => item.colorName}
    renderItem={({ item }) => (
      <View style={styles.switch}>
        <Text>{item.colorName}</Text>
        <Switch
          value={
            !!selectedColors.find((color) => color.colorName === item.colorName)
          }
          onValueChange={(newValue) => handleToggle(item, newValue)}
        />
      </View>
    )}
  />
);

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
  color: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
});
