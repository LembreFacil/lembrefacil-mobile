import React from 'react';
import { Box, Text, VStack, HStack, Icon, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import CustomBox from '../componentes/CustomBox';


export default function Principal(){
    return(
        <ScrollView>
        <VStack space={4} padding={5}>
          {/* Título */}
          <Box alignItems="center">
            <Text fontSize="2xl" bold>Relatório de Saúde</Text>
          </Box>
  
          {/* Status de Saúde Geral */}
          <HStack justifyContent="center" alignItems="center">
            <Icon as={MaterialIcons} name="favorite" size="lg" color="green.500" marginRight={10} />
            <Text fontSize="xl" bold>Status Geral: Saudável</Text>
          </HStack>
  
          {/* Informações Vitais */}
          <CustomBox>
            <VStack space={3}>
              <HStack justifyContent="space-between">
                <Text fontSize="md">Pressão Arterial:</Text>
                <Text fontSize="md" bold>120/80 mmHg</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Text fontSize="md">Frequência Cardíaca:</Text>
                <Text fontSize="md" bold>72 bpm</Text>
              </HStack>
            </VStack>
          </CustomBox>
  
          {/* Últimos Registros */}
          <CustomBox>
            <Text fontSize="lg" bold marginBottom={2}>Últimos Registros</Text>
            <VStack space={2}>
              <HStack justifyContent="space-between">
                <Text>28/09/2024</Text>
                <Text>Pressão Alta</Text>
              </HStack>
              <HStack justifyContent="space-between">
                <Text>25/09/2024</Text>
                <Text>Normal</Text>
              </HStack>
            </VStack>
          </CustomBox>
  
          {/* Botão para Mais Informações */}
          <Button size="lg" colorScheme="teal" marginTop={5}>
            Mais Informações
          </Button>
        </VStack>
      </ScrollView>
    )
}