import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Here are some boxes of different colours</Text>
      <View style={[styles.cyanBox]}>
        <Text style={styles.text}>Cyan #2aa198</Text>
      </View>
      <View style={[styles.blueBox]}>
        <Text style={styles.text}>Blue #268bd2</Text>
      </View>
      <View style={[styles.magentaBox]}>
        <Text style={styles.text}>Magenta #d33682</Text>
      </View>
      <View style={[styles.orangeBox]}>
        <Text style={styles.text}>Orange #cb4b16</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 50,
  },
  text: {
    color: 'white',
  },
  cyanBox: {
    backgroundColor: '#2aa198',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  blueBox: {
    backgroundColor: '#268bd2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  magentaBox: {
    backgroundColor: '#d33682',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  orangeBox: {
    backgroundColor: '#cb4b16',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
