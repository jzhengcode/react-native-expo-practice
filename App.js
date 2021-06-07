import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, styles.pink]}>
        <Text>Hello!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 2,
  },
  container: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pink: {
    backgroundColor: 'pink',
  },
});
