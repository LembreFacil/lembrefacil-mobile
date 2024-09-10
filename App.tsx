// App.js
import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { TEMAS } from './src/estilos/temas';
import Rotas from './src/Rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.black} />
      <NavigationContainer>
        <Rotas />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
