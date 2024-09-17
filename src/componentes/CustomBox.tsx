import React from 'react';
import { View, StyleSheet } from 'react-native';

const CustomBox = ({ children }) => {
  return (
    <View style={styles.box}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    borderRadius: 8,  // 'lg' em unidades padrão do React Native
    padding: 12,      // 'p={3}' convertido para valores padrão
    marginTop: 20,    // 'mt={10}' convertido para valores padrão
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: '#FFFFFF', // Substitua pelo valor específico de TEMAS.colors.white se necessário
    borderRightWidth: 1, // Define a borda direita
    borderRightColor: '#E0E0E0', // Defina a cor da borda, se necessário
  },
});

export default CustomBox;
