import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';

import PalettePreview from '../components/PalettePreview';

export default function Home({ navigation, route }) {
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;

  const [colorPalette, setColorPalette] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColorPalettes = async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );

    const palette = await result.json();
    if (result.ok) {
      setColorPalette(palette);
    }
  };

  const refresh = async () => {
    setIsRefreshing(true);
    await handleFetchColorPalettes();
    setIsRefreshing(false);
  };

  const handleFetchColorPalettes = useCallback(fetchColorPalettes, []);
  const handleRefresh = useCallback(refresh, []);

  useEffect(() => {
    handleFetchColorPalettes();
  }, [handleFetchColorPalettes]);

  useEffect(() => {
    if (newColorPalette) {
      setColorPalette((palette) => [newColorPalette, ...palette]);
      console.log(colorPalette);
    }
  }, [newColorPalette]);

  return (
    <FlatList
      style={styles.list}
      data={colorPalette}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          palette={item}
        />
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ColorPaletteModal');
          }}
        >
          <Text style={styles.text}>Add a color scheme</Text>
        </TouchableOpacity>
      }
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
  text: {
    color: 'teal',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
