import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../FormInput';
import CustomButton, { BUTTON_TYPES } from '../CustomButton';

import { googleSignInStart, emailSignInStart } from '../../Store/User/user.actions';
import { SignInContainer, Buttons } from './index.styles';


const defaultFormFields = {
    email: '',
    password: ''
};


const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const dispatch = useDispatch();

    const signInWithGoogle = () => dispatch(googleSignInStart());

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        try {
            dispatch(emailSignInStart(email, password))
            setFormFields(defaultFormFields);
        } catch(error) {
            console.log('Invalid User Credentials', error)
        };
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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