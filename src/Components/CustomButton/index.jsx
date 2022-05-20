import React from "react";

import './index.scss';

const BUTTON_TYPES = {
    google: 'google-sign-in',
    inverted: 'inverted'
};


const CustomButton = ({ children, buttonType, ...otherProps }) => (
    <button className={`custom-button ${BUTTON_TYPES[buttonType]}`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;