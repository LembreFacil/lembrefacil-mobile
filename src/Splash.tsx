import { LinearGradient } from 'expo-linear-gradient';
import { Image, Text, View } from "native-base";
import { TEMAS } from "./estilos/temas";

export default function Splash() {
    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[TEMAS.colors.darkGreen, TEMAS.colors.lightGreen]}
        >
            <View style={{ flex: 1 }}>
                <Image
                    source={require("./assets/hero2.png")}
                    alt='Icone Idoso'
                    style={{
                        height: 100,
                        width: 100,
                        position: "absolute",
                        top: 10,
                        transform: [
                            { translateX: 20 },
                            { translateY: 50 },
                            { rotate: "-15deg" }
                        ]
                    }}
                />
                <Image
                    source={require("./assets/hero2.png")}
                    alt='Icone Idoso'
                    style={{
                        height: 100,
                        width: 100,
                        position: "absolute",
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
                    source={require("./assets/hero2.png")}
                    alt='Icone Idoso'
                    style={{
                        height: 100,
                        width: 100,
                        position: "absolute",
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
                    source={require("./assets/hero1.png")}
                    alt='Icone Idoso'
                    style={{
                        height: 170,
                        width: 170,
                        position: "absolute",
                        top: 110,
                        left: 120,
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
                </View>
            </View>
        </LinearGradient>
    );
}
