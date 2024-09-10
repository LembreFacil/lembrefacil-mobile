import { Avatar, Divider, ScrollView, Text, VStack } from "native-base";
import { Titulo } from "../componentes/Titulo";
import { TEMAS } from "../estilos/temas";

export default function Perfil(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color={TEMAS.colors.darkGreen}>Meu Perfil</Titulo>
                <Avatar source={require('../assets/hero3.png')} size={"xl"} />
                <Titulo color={TEMAS.colors.darkGreen}>Informações Pessoais</Titulo>
                <Titulo fontSize={"lg"}>Josefina Rodrigues</Titulo>
                <Titulo fontSize={"lg"}>10/09/1980</Titulo>
                <Titulo fontSize={"lg"}>Ferraz de Vasconcelos</Titulo>

                <Divider mt={5}/>

                <Titulo color={TEMAS.colors.darkGreen}>Histórico Médico</Titulo>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text>
            </VStack>
        </ScrollView>
    )
}