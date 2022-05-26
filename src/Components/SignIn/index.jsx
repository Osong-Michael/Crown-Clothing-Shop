import React, { useState } from 'react';
import FormInput from '../FormInput';
import CustomButton, { BUTTON_TYPES } from '../CustomButton';

import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../firebase/firebase.utils';


import { SignInContainer, Buttons } from './index.styles';


const defaultFormFields = {
    email: '',
    password: ''
};


const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const signInWithGoogle = async () => await signInWithGooglePopup();

    const handleSubmit = async event => {
        event.preventDefault();


        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            setFormFields(defaultFormFields);
        } catch(err) {
            switch (err.code) {
                case 'auth/wrong-password':
                    alert('Incorrect Password');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;
                default:
                    console.log(err);
            }
        };
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setFormFields({...formFields, [name]: value });
    }


    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>


            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                />

                <FormInput
                    type="password"
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label="Password"
                />

                <Buttons>
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} buttonType={BUTTON_TYPES.google} >SIGN IN WITH GOOGLE</CustomButton>
                </Buttons>
            </form>
        </SignInContainer>
    )
};

export default SignIn;