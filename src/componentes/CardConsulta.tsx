import { Avatar, Text, VStack } from "native-base";
import { Botao } from "./Botao";

interface CardProps {
    nome: string;
    foto: string;
    especialidade: string;
    data?: string;
    foiAtendido?: boolean;
    foiAgendado?: boolean;
}

export default function CardConsulta({
    nome,
    foto,
    data,
    especialidade,
    foiAtendido,
    foiAgendado
}:CardProps) {
    return(
        <VStack w="100%" bg={foiAtendido ? 'lightBlue': 'white'} p={5} borderRadius="lg" shadow={2} mt={5}>
            <VStack flexDir="row" alignItems='center'>
                <Avatar source={{ uri: foto }}/>
            
                <VStack pl="4">
                    <Text fontSize="md">{nome}</Text>
                    <Text fontSize="md">{especialidade}</Text>
                    <Text fontSize="md">{data}</Text>
                </VStack>
            </VStack>

            <Botao>
                {foiAgendado ? 'Cancelar Consulta' : 'Agendar Consulta'}
            </Botao>
        </VStack>
    )
}