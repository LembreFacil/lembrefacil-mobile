import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { Checkbox, Text, View } from 'native-base';
import { useState } from "react";
import { TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EntradaDeTexto } from "./componentes/EntradaDeTexto";
import SplashBtn from "./componentes/SplashBtn";
import { TEMAS } from './estilos/temas';

export default function Login({ navigation }) {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[TEMAS.colors.darkGreen, TEMAS.colors.lightGreen]}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ 
          flex: 1, 
          alignItems: 'center', 
          justifyContent: "center",
          paddingHorizontal: 22 
        }}>
          {/* Imagem no topo */}
          {/* <View style={{ marginBottom: 20 }}>
            <Image
              source={require("./assets/logo.png")}
              style={{
                width: 200, // Ajuste o tamanho conforme necessário
                height: 200, // Ajuste o tamanho conforme necessário
                resizeMode: "contain", // Ajuste conforme necessário, pode ser "cover" ou "stretch"
              }}
              alt='Logo' // Adiciona uma descrição alternativa para a imagem
            />
          </View> */}

          {/* Conteúdo */}
          <View style={{ width: "100%" }}>
            <Text style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: TEMAS.colors.white,
            }}>
              Que bom te ver aqui de novo!
            </Text>
            <Text style={{
              fontSize: 16,
              color: TEMAS.colors.white,
            }}>
              Nunca perca uma Consulta ou Remédio!
            </Text>

            <EntradaDeTexto
              label="Email"
              placeholder="Insira seu email"
            />

            <View style={{ marginBottom: 12, marginTop: 8 }}>
              <Text style={{
                fontSize: 16,
                fontWeight: "500",
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
                  onPress={() => setIsPasswordShown(!isPasswordShown)}
                  style={{ position: "absolute", right: 12 }}
                >
                  {isPasswordShown ? (
                    <Ionicons name="eye-off" size={24} color={TEMAS.colors.black} />
                  ) : (
                    <Ionicons name="eye" size={24} color={TEMAS.colors.black} />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <SplashBtn
              titleSplashBtn="Entrar"
              style={{ marginTop: 18 }}
              onPress={() => navigation.navigate('Tabs')}
            />

            <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 6, marginTop: 20 }}>
              <Checkbox
                value="lembrarAcesso"
                isChecked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                accessibilityLabel="Lembrar Acesso"
                colorScheme="light"
                style={{ marginRight: 8 }}
              />
              <Text style={{ color: TEMAS.colors.white }}>Lembrar Acesso</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
