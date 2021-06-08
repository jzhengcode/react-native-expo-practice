import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';

export default function PalettePreview({ handlePress, palette }) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{palette.paletteName}</Text>
      <FlatList
        style={styles.list}
        horizontal={true}
        data={palette.colors.slice(0, 5)}
        keyExtractor={(item) => item.paletteName}
        renderItem={renderColorSample}
      />
    </TouchableOpacity>
  );
}

const renderColorSample = ({ item }) => {
  const { hexCode } = item;
  const color = {
    backgroundColor: hexCode,
  };

  return <View style={[color, styles.box]} />;
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  box: {
    height: 30,
    width: 30,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 5,
  },
  list: {
    marginBottom: 20,
  },
});
