import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/views/Home';
import Expenses from './src/views/Expenses';
import AddorEditBudgetItem from './src/views/AddorEditBudgetItem';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  const { Navigator, Screen } = Stack;
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Screen
          name="Expenses"
          component={Expenses}
          options={{ headerShown: false }}
        />
        <Screen
          name="AddorEditBudgetItem"
          component={AddorEditBudgetItem}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
