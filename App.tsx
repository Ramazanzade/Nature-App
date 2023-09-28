import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplasScreen from './src/navigation/Stack/SplasStack/SplasScreen';
import HomeScreen from './src/navigation/Stack/Home/HomeScreen';
import { store } from './src/store/store';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="SplasScreen" component={SplasScreen} /> */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BigApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default BigApp;