import React from 'react'


const STYLE = ["btn-white", "btn-transparent"]
const SIZE = ["btn-medium", "btn-large"]

const Button = ({ buttonStyle,
    buttonSize,
    children,
    onClick,
    bootStrapClasses = "",
    cssButton = ""
    }) => {
    
    const checkButtonType = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[1]
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0]


    return (
        <button
            className={`${checkButtonType} ${checkButtonSize} ${bootStrapClasses} ${cssButton}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
export default Button
