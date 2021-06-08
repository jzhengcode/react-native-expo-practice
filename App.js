import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ColorPalette from './screens/ColorPalette';
import Home from './screens/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorPalette" component={ColorPalette} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
