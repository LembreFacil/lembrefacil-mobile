import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Cadastro from './Cadastro';
import Login from './Login';
import Splash from './Splash';
import Tabs from './Tabs'; // Suas outras telas

const Stack = createStackNavigator();

export default function Rotas() {
    return (
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    );
  }