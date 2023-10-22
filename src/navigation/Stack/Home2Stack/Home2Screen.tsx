import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home2 from '../../../component/Home2/Home2';
const Stack = createNativeStackNavigator();
const Home2Screen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Home2" component={Home2} />
    </Stack.Navigator>
  )
}

export default Home2Screen
