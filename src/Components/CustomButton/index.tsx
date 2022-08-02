import { FC, ButtonHTMLAttributes } from 'react';
import { BaseButton, GoogleSignIn, InvertedButton, ButtonSpinner } from './index.styles';

export enum BUTTON_TYPES {
    base = 'base',
    google = 'google-sign-in',
    inverted = 'inverted'
};

const getButton = (buttonType = BUTTON_TYPES.base): typeof BaseButton => (
    {
        [BUTTON_TYPES.base]: BaseButton,
        [BUTTON_TYPES.google]: GoogleSignIn,
        [BUTTON_TYPES.inverted]: InvertedButton,
    }[buttonType]
);

export type ButtonProps = {
    buttonType?: BUTTON_TYPES;
    isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;


const CustomButton: FC<ButtonProps> = ({ children, buttonType, isLoading, ...otherProps }) => {
    const Button = getButton(buttonType);
    return (
        <Button {...otherProps} disabled={isLoading}>
            { isLoading ? <ButtonSpinner/> : children }
        </Button>
    )
};

export default CustomButton;