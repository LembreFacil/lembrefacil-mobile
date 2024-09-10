import { ITextProps, Text } from "native-base"
import { ReactNode } from "react"

interface TituloProps extends ITextProps {
    children: ReactNode
}

export function Titulo({ children, ...rest }: TituloProps) {
    return (
        <Text
        fontSize={'2xl'}
        fontWeight={'semibold'}
        color={'black'}
        textAlign={'center'}
        {...rest}
        marginTop={3}
        marginBottom={3}
      >
        {children}
      </Text>
    )
}