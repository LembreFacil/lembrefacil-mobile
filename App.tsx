import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import Splash from './src/Splash';

import { TEMAS } from './src/estilos/temas';


export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.black}/>
      <Splash/>
    </NativeBaseProvider>
  );
}

