import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'native-base';
import { useState } from "react";
import { Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BotaoEscolherData from './componentes/BotaoEscolherData';
import { EntradaDeTexto }  from "./componentes/EntradaDeTexto";
import SplashBtn from "./componentes/SplashBtn";
import { TEMAS } from './estilos/temas';

export default function Cadastro() {
  const { height } = Dimensions.get('window'); // Obtenha a altura da tela do dispositivo
  const [ isPasswordShown, setIsPasswordShown ] = useState(false)
  const [ isChecked, setIsChecked] = useState(false);
  return (
    
    <LinearGradient
      style={{
          flex: 1
      }}
      colors={[TEMAS.colors.darkGreen, TEMAS.colors.lightGreen]}
    >
      <SafeAreaView style={{ flex:1 }}>
        <View style={{ flex:1, marginHorizontal: 22}}>
          <View style={{ marginVertical:22 }}>
              <Text style={{
                fontSize: 22,
                fontWeight: "bold",
                marginVertical: 12,
                color: TEMAS.colors.white
              }}>
                Crie sua conta
              </Text>

              <Text style={{
                fontSize: 16,
                color: TEMAS.colors.white
              }}>
                Nunca perca uma Consulta ou Remédio!
              </Text>
          </View>

          <EntradaDeTexto
            label="Nome"
            placeholder="Insira seu nome"
          >
          </EntradaDeTexto>

          <EntradaDeTexto
            label="CPF"
            placeholder="Insira seu CPF"
          >            
          </EntradaDeTexto>

          <EntradaDeTexto
            label="Cartão do SUS"
            placeholder="Insira seu cartão do SUS"
          >
          </EntradaDeTexto>

          <BotaoEscolherData />

          <EntradaDeTexto
            label="Email"
            placeholder="Insira seu Email"
          ></EntradaDeTexto>

          <View style={{ marginBottom:12, marginTop: 8 }}>
              <Text style={{
                fontSize:16,
                fontWeight:"500",
                marginVertical: 8,
                color: TEMAS.colors.white
              }}>
                Senha
              </Text>

              <View style={{
                width: "100%",
                height: 48,
                borderColor: TEMAS.colors.black,
                backgroundColor: TEMAS.colors.white,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22
              }}>
                <TextInput
                  placeholder='Insira sua Senha'
                  placeholderTextColor={TEMAS.colors.black}
                  secureTextEntry={isPasswordShown}
                  style={{
                    width: "100%",
                    fontSize: 16
                  }}
                />

                <TouchableOpacity 
                onPress={()=>setIsPasswordShown(!isPasswordShown)}
                style={{
                  position: "absolute",
                  right: 12
                }}>
                  {
                    isPasswordShown == true ? (
                      <Ionicons name="eye-off" size={24} color={TEMAS.colors.black}/>
                    ) : (
                        <Ionicons name="eye" size={24} color={TEMAS.colors.black}/>
                    )
                  }
                </TouchableOpacity>
              </View>
          </View>
          
          <SplashBtn
            titleSplashBtn="Finalizar Cadastro"
            style={{
              marginTop: 18,
            }}
          ></SplashBtn>

        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
