import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { People } from './src/utils/interfaces.ts'
import MainScreen from "./src/screens/Main.tsx";
import PeopleScreen from "./src/screens/People.tsx";

export type RootStackParamList = {
  Main: {};
  People: { people: People },
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName='Main'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='Main'
        component={MainScreen}
        options={{ gestureEnabled: false }}
      />
      <Stack.Screen
        name='People'
        component={PeopleScreen}
        options={{ gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
};

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
