import { Box, ScrollView, VStack, View } from "native-base";
import { Botao } from "../componentes/Botao";
import { EntradaDeTexto } from "../componentes/EntradaDeTexto";
import { Titulo } from "../componentes/Titulo";
import { TEMAS } from "../estilos/temas";

export default function Principal(){
    return(
        <ScrollView flex={1} backgroundColor={TEMAS.colors.white}>
            <VStack flex={1} p={5}>
                <View style={{ alignItems: "flex-start" }}>
                    <Titulo color={TEMAS.colors.darkGreen}>Bem vindo de volta!</Titulo>
                </View>

                <Box 
                    w="100%" 
                    borderRadius="lg" 
                    p={3} mt={10} 
                    shadow="1" 
                    borderRightRadius={"md"}
                    backgroundColor={TEMAS.colors.white} // Defina a cor de fundo explicitamente
                    style={{
                        // Propriedades de sombra para iOS
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.5,  // Aumente a opacidade (0.0 - 1.0)
                        shadowRadius: 4,      // Defina o raio da sombra
                        // Propriedades de sombra para Android
                        elevation: 4,         // Aumente para intensificar a sombra no Android
                      }}
                >
                    <EntradaDeTexto
                        placeholder="Digite sua especialidade"
                    />

                    <EntradaDeTexto
                        placeholder="Digite sua localização"
                    />

                    <Botao>Buscar</Botao>
                </Box>
            </VStack>
        </ScrollView>
    )
}