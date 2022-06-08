import React from "react";

import { BaseButton, GoogleSignIn, InvertedButton, ButtonSpinner } from './index.styles';

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


const CustomButton = ({ children, buttonType, isLoading, ...otherProps }) => {
    const Button = getButton(buttonType);
    return (
        <Button {...otherProps} disabled={isLoading}>
            { isLoading ? <ButtonSpinner/> : children }
        </Button>
    )
};

export default CustomButton;