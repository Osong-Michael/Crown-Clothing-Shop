import React from 'react';
import SignIn from '../../Components/SignIn';
import SignUp from '../../Components/SignUp';

import { SignInSignUpContainer } from './index.styles';


const AuthPages = () => (
    <SignInSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInSignUpContainer>
);

export default AuthPages;