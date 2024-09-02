import { FormControl, Input } from "native-base";
import { TEMAS } from "../estilos/temas";

interface InputProps {
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
}

export function EntradaDeTexto ({
  label, 
  placeholder, 
  secureTextEntry = false
} : InputProps) : JSX.Element {
  return (
    <FormControl mt={4}>
      {label && <FormControl.Label _text={{ color: TEMAS.colors.white }}>{label}</FormControl.Label>}
      <Input
        placeholder={placeholder}
        placeholderTextColor={TEMAS.colors.black}  // Define a cor do texto do placeholder
        size="lg"
        w="100%"
        borderRadius="lg"
        color={TEMAS.colors.black}
        bgColor="gray.100"
        secureTextEntry={secureTextEntry}
      />
    </FormControl>
  );
}
