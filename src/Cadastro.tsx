import { Box, Image, Link, Text, VStack } from 'native-base';
import { Dimensions, TouchableOpacity } from 'react-native';
import logo from './assets/Lembre-removebg-preview.png';
import { Botao } from './componentes/Botao';
import { EntradaDeTexto } from './componentes/EntradaDeTexto';
import { Titulo } from './componentes/Titulo';

export default function Login() {
  const { height } = Dimensions.get('window'); // Obtenha a altura da tela do dispositivo

  return (
    <VStack 
      flex={1} 
      alignItems="center" 
      justifyContent="center"
      p={5}
    >
      <Box
        width="100%"
        alignItems="center"
        justifyContent="center"
        mb={3}
      >
        <Image 
          source={logo} 
          alt="Logo LembreFácil" 
          size={height * 0.2} // 20% da altura da tela para manter responsividade
          resizeMode="contain" // Garante que a imagem se ajuste ao espaço disponível
        />
      </Box>

      <Titulo>
        Cadastro
      </Titulo>

      <Box width="100%">
        <EntradaDeTexto placeholder='Insira seu Email'/>
        <EntradaDeTexto placeholder='Insira sua Senha'/>
        <Botao>ENTRAR</Botao>
      </Box>


      <Link href='https://www.linkedin.com/in/igor-silva-472669202/' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box 
        flexDirection={'row'}
        width={'100%'}
        justifyContent={'center'}
        mt={5}
      >
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity>
          <Text color={'lightGreen'} fontWeight={'semibold'}>Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
