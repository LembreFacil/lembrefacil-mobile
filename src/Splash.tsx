import { LinearGradient } from 'expo-linear-gradient'; // Importar do Expo
import { Image, View } from "native-base";
import { TEMAS } from "./estilos/temas";

export default function Splash() {
    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[TEMAS.colors.darkGreen, TEMAS.colors.lightGreen]} // Certifique-se de que essas cores estão disponíveis no seu tema
        >
            <View style={{flex:1}}>
                <Image
                 source={require("./assets/hero2.png")}
                 alt='Icone Idoso'
                 style={{
                    height: 70,
                    width:70,
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
                        {translateX: 50},
                        {translateY: 50},
                        {rotate: "-15deg"}
                    ]
                 }}
                />
            </View>
        </LinearGradient>
    );
}
