import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { TEMAS } from "../estilos/temas";


const SplashBtn = (props) => {
    const filledBgColor = props.color || TEMAS.colors.lightGreen;
    const outlinedColor = TEMAS.colors.white;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? TEMAS.colors.white : TEMAS.colors.lightGreen;
    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...{backgroundColor: bgColor},
                ...props.style
            }}
            onPress={props.onPress}
        >
            <Text style={{fontSize:18, fontWeight: 'bold', ... {color:textColor}}}>{props.titleSplashBtn}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button:{
        paddingBottom: 16,
        paddingVertical: 10,
        borderColor: TEMAS.colors.lightGreen,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
    }
})

export default SplashBtn