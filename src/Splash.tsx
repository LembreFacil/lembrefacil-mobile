import { LinearGradient } from 'expo-linear-gradient';
import { Image, Pressable, Text, View } from "native-base";
import SplashBtn from './componentes/SplashBtn';
import { TEMAS } from "./estilos/temas";

export default function Splash( { navigation } ) {
    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[TEMAS.colors.darkGreen, TEMAS.colors.lightGreen]}
        >
            <View style={{ flex: 1 }}>
                <Image
                    source={require("./assets/splashImg3.png")}
                    alt='Icone Idoso'
                    style={{
                        height: 130,
                        width: 130,
                        position: "absolute",
                        objectFit: "contain",
                        top: 10,
                        transform: [
                            { translateX: 20 },
                            { translateY: 50 },
                            { rotate: "-15deg" }
                        ]
                    }}
                />
                <Image
                    source={require("./assets/splashImg2.png")}
                    alt='Icone Idoso'
                    style={{
                        height: 130,
                        width: 130,
                        position: "absolute",
                        objectFit: "contain",
                        top: -30,
                        left: 130,
                        transform: [
                            { translateX: 20 },
                            { translateY: 50 },
                            { rotate: "-10deg" }
                        ]
                    }}
                />
                <Image
                    source={require("./assets/splashImg1.png")}
                    alt='Icone Idoso'
                    style={{
                        height: 130,
                        width: 130,
                        position: "absolute",
                        objectFit: "contain",
                        top: 160,
                        left: -30,
                        transform: [
                            { translateX: 20 },
                            { translateY: 50 },
                            { rotate: "15deg" }
                        ]
                    }}
                />
                <Image
                    source={require("./assets/splashImg4.png")}
                    alt='Icone Idoso'
                    style={{
                        height: 230,
                        width: 230,
                        position: "absolute",
                        objectFit: "contain",
                        top: 110,
                        left: 80,
                        transform: [
                            { translateX: 50 },
                            { translateY: 50 },
                            { rotate: "-15deg" }
                        ]
                    }}
                />
                <View style={{
                    paddingHorizontal: 20,
                    position: "absolute",
                    top: 400, // Aumente este valor para mover o texto para baixo
                    width: "100%",
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: '800',
                        paddingTop: 40, // Adiciona um espaço superior dentro do texto
                        color: TEMAS.colors.white
                    }}>Vamos</Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: '800',
                        paddingTop: 42, // Adiciona um espaço superior dentro do texto
                        color: TEMAS.colors.white
                    }}>Começar!</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: TEMAS.colors.white,
                            width: "80%"
                        }}>Nunca mais perca uma Consulta</Text>
                        <Text style={{
                            fontSize: 16,
                            color: TEMAS.colors.white,
                            width: "80%"
                        }}>Nunca mais esqueça aquele Remédio</Text>
                    </View>

                    <SplashBtn
                        titleSplashBtn="Crie uma conta"
                        onPress={()=>navigation.navigate("Cadastro")}
                        style={{
                            marginTop: 22,
                            width: "100%",
                            fontWeight: 'bold'
                        }}
                    >
                    </SplashBtn>

                    <View style={{
                        flexDirection:"row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: TEMAS.colors.white
                        }}>Já tem uma conta? </Text>
                        <Pressable
                         onPress={()=>navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: TEMAS.colors.white,
                                fontWeight: "bold"
                            }}>Login</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}
