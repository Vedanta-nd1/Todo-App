import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import GroupScreen from '../screens/GroupScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Todo App" component={MainScreen} />
        <Stack.Screen name="Group" component={GroupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;