import { Box, ScrollView, VStack, View, Divider } from "native-base";
import { Botao } from "../componentes/Botao";
import CustomBox from "../componentes/CustomBox";
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

                <CustomBox>
                    <EntradaDeTexto
                        placeholder="Digite sua especialidade"
                    />

                    <EntradaDeTexto
                        placeholder="Digite sua localização"
                    />

                    <Botao>Buscar</Botao>
                </CustomBox>

                <CustomBox>
                    <EntradaDeTexto
                        placeholder="Digite sua especialidade"
                    />

                    <EntradaDeTexto
                        placeholder="Digite sua localização"
                    />

                    <Botao>Buscar</Botao>
                </CustomBox>
            </VStack>
        </ScrollView>
    )
}