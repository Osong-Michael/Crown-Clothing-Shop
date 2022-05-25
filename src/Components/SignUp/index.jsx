import React, { useState } from 'react';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../firebase/firebase.utils';

import { SignUpContainer, Title } from './index.styles';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};


const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        };

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            
            await createUserDocumentFromAuth(user, { displayName });
            setFormFields(defaultFormFields);
        } catch(error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
              } else {
                console.log('user creation encountered an error', error);
            }
        }
    };

    const handleChange = event => {
        const { value, name } = event.target;

        setFormFields({...formFields, [name]: value });
    }


    return (
        <SignUpContainer>
            <Title>I do not have an account</Title>
            <span>Sign up with email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />  
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />  
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>   
            </form>
        </SignUpContainer>
    )
};

export default SignUp;