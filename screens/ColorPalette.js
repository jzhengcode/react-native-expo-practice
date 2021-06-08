import React from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';

import ColorBox from '../components/colorBox';

export default function ColorPalette({ route }) {
  const { colors, title } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text>{title}</Text>
      <FlatList
        data={colors}
        renderItem={renderColorBox}
        keyExtractor={(item) => item.hexCode}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 50,
  },
});

const renderColorBox = ({ item }) => {
  const { colorName, hexCode } = item;
  return <ColorBox colorName={colorName} colorHex={hexCode} />;
};
