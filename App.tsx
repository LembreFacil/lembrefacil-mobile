import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import { TEMAS } from './src/estilos/temas';
import Cadastro from './src/Cadastro';


export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.black}/>
      <Cadastro/>
    </NativeBaseProvider>
  );
}

