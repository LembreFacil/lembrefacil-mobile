import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Avatar, Divider, VStack, Box, FlatList } from 'native-base';
import { Botao } from '../componentes/Botao';
import CustomBox from '../componentes/CustomBox';
import { Titulo } from '../componentes/Titulo';
import { TEMAS } from '../estilos/temas';

const medicalHistory = [
  { id: '1', condition: 'Bronquite' },
  { id: '2', condition: 'Sinusite' },
];

export default function Perfil() {
  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <CustomBox>
          <Box style={styles.profileContainer}>
            <Avatar source={require('../assets/hero3.png')} size={"xl"} />
            <Titulo fontSize={"lg"}>Josefina Rodrigues</Titulo>
          </Box>
          <Box style={styles.infoContainer}>
            <Titulo fontSize={"md"} mt={2}>Data de Nascimento: 10/09/1980</Titulo>
            <Titulo fontSize={"md"}>Cidade: Ferraz de Vasconcelos</Titulo>
            <Titulo fontSize={"md"}>CPF: 123.456.789-00</Titulo>
            <Titulo fontSize={"md"}>Cartão do SUS: 123451234512345</Titulo>
          </Box>
          <Botao>Editar Perfil</Botao>
        </CustomBox>

        <Divider mt={5} />

        <CustomBox>
          <Titulo color={TEMAS.colors.darkGreen}>Histórico Médico</Titulo>
          <FlatList
            data={medicalHistory}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Text style={styles.item}>- {item.condition}</Text>}
          />
        </CustomBox>
      </VStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
    gap: 15,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 5,
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
    color: TEMAS.colors.black,
  },
});
