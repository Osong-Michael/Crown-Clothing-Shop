import React from "react";

import { BaseButton, GoogleSignIn, InvertedButton } from './index.styles';

export const BUTTON_TYPES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
};

const getButton = (buttonType = BUTTON_TYPES.base) => (
    {
        [BUTTON_TYPES.base]: BaseButton,
        [BUTTON_TYPES.google]: GoogleSignIn,
        [BUTTON_TYPES.inverted]: InvertedButton,
    }[buttonType]
)


const CustomButton = ({ children, buttonType, ...otherProps }) => {
    const Button = getButton(buttonType);
    return (
        <Button {...otherProps}>
            {children}
        </Button>
    )
};

export default CustomButton;