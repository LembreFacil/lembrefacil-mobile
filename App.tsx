import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import { TEMAS } from './src/estilos/temas';
import Login from './src/Login';


export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.black}/>
      <Login/>
    </NativeBaseProvider>
  );
}

