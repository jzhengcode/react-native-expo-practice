import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import PalettePreview from '../components/PalettePreview';

export default function Home({ navigation }) {
  const [COLOR_PALETTE, setColorPalette] = useState([]);

  const fetchColorPalettes = async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );

    const palette = await result.json();
    if (result.ok) {
      setColorPalette(palette);
    }
  };

  const handleFetchColorPalettes = useCallback(fetchColorPalettes, []);

  useEffect(() => {
    handleFetchColorPalettes();
  }, [handleFetchColorPalettes]);

  return (
    <FlatList
      style={styles.list}
      data={COLOR_PALETTE}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          palette={item}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
});
