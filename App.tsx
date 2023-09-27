import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplasScreen from './src/navigation/Stack/SplasStack/SplasScreen';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplasScreen" component={SplasScreen} />   
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BigApp = () => {
  return (
    // <Provider store={store}>
        <App />
    // </Provider>
  )
}

export default BigApp;