import { ReactNode } from "react"
import theme from "../../theme"
import { ButtonIcon, GradientText, StyledButton, Text } from "./styles/button-style"

interface ButtonProps {
    variant?: 'PRIMARY' | 'SECONDARY' | 'DANGER' | string
    width?: string
    height?: string
    text?: string
    br?: string
    icon?: ReactNode
    m?: string
    ml?: string
    mr?: string
    type?: "button" | "reset" | "submit"
    onClick?: (event: any) => void
}

const Button = ({ ...props }: ButtonProps) => {
    let buttonColor = theme.colors.grey
    let textColor = theme.colors.light
    let buttonText = 'Click me'

    switch(props.variant) {
        case 'PRIMARY':
            buttonColor = `linear-gradient(${theme.gradients.secondGradient})`
            buttonText = props.text ? props.text : buttonText
            break;
        case 'SECONDARY':
            buttonColor = theme.colors.light
            buttonText = props.text ? props.text : buttonText
            textColor = theme.colors.blue500
            break;
        case 'DANGER':
            buttonColor = theme.colors.red
            textColor = theme.colors.light
            buttonText = props.text ? props.text : buttonText
            break;
        default:
            buttonText = props.text ? props.text : buttonText
    }


    return (
        <StyledButton style={{
            color: textColor,
            background: buttonColor,
            height: props.height, 
            width: props.width,
            borderRadius: props.br,
            margin: props.m,
            marginLeft: props.ml,
            marginRight: props.mr,
        }}
        type={ props.type ? props.type : "button" }
        onClick={props.onClick}
        >
            <ButtonIcon> {props.icon} </ButtonIcon>
            { props.variant === 'SECONDARY' ? (<GradientText>{buttonText}</GradientText>) : <Text>{buttonText}</Text> }
        </StyledButton>
    )
}

export default Button