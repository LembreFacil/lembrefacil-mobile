import { Ionicons } from "@expo/vector-icons";
import { Checkbox, Text, View } from 'native-base';
import { useState } from "react";
import { Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TEMAS } from './estilos/temas';

export default function Cadastro() {
  const { height } = Dimensions.get('window'); // Obtenha a altura da tela do dispositivo
  const [ isPasswordShown, setIsPasswordShown ] = useState(false)
  const [ isChecked, setIsChecked] = useState(false);
  return (
  
    <SafeAreaView style={{ flex:1, backgroundColor: TEMAS.colors.white }}>
      <View style={{ flex:1, marginHorizontal: 22}}>
        <View style={{ marginVertical:22 }}>
            <Text style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: TEMAS.colors.black
            }}>
              Crie sua conta
            </Text>

            <Text style={{
              fontSize: 16,
              color: TEMAS.colors.black
            }}>
              Nunca perca uma Consulta ou Remédio!
            </Text>
        </View>

        <View style={{ marginBottom:12 }}>
            <Text style={{
              fontSize:16,
              fontWeight:400,
              marginVertical: 8
            }}>
              Nome
            </Text>

            <View style={{
              width: "100%",
              height: 48,
              borderColor: TEMAS.colors.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22
            }}>
              <TextInput
                placeholder='Insira seu nome'
                placeholderTextColor={TEMAS.colors.black}
                keyboardType='default'
                style={{
                  width: "100%"
                }}
              />
            </View>
        </View>

        <View style={{ marginBottom:12 }}>
            <Text style={{
              fontSize:16,
              fontWeight:400,
              marginVertical: 8
            }}>
              CPF
            </Text>

            <View style={{
              width: "100%",
              height: 48,
              borderColor: TEMAS.colors.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22
            }}>
              <TextInput
                placeholder='Insira seu CPF'
                placeholderTextColor={TEMAS.colors.black}
                keyboardType='numeric'
                style={{
                  width: "100%"
                }}
              />
            </View>
        </View>

        <View style={{ marginBottom:12 }}>
            <Text style={{
              fontSize:16,
              fontWeight:400,
              marginVertical: 8
            }}>
              Cartão do SUS
            </Text>

            <View style={{
              width: "100%",
              height: 48,
              borderColor: TEMAS.colors.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22
            }}>
              <TextInput
                placeholder='Insira seu cartão do SUS'
                placeholderTextColor={TEMAS.colors.black}
                keyboardType='numeric'
                style={{
                  width: "100%"
                }}
              />
            </View>
        </View>

        <View style={{ marginBottom:12 }}>
            <Text style={{
              fontSize:16,
              fontWeight:400,
              marginVertical: 8
            }}>
              Email
            </Text>

            <View style={{
              width: "100%",
              height: 48,
              borderColor: TEMAS.colors.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22
            }}>
              <TextInput
                placeholder='Insira seu Email'
                placeholderTextColor={TEMAS.colors.black}
                keyboardType='email-address'
                style={{
                  width: "100%"
                }}
              />
            </View>
        </View>

        <View style={{ marginBottom:12 }}>
            <Text style={{
              fontSize:16,
              fontWeight:400,
              marginVertical: 8
            }}>
              Senha
            </Text>

            <View style={{
              width: "100%",
              height: 48,
              borderColor: TEMAS.colors.black,
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
                  width: "100%"
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
        
        <View style={{
          flexDirection: 'row',
          marginVertical: 6
        }}>
          <Checkbox
           style={{marginRight: 8}}
           value={isChecked}
           onValueChange={setIsChecked}
          />
          
        </View>
      </View>
    </SafeAreaView>

  );
}
