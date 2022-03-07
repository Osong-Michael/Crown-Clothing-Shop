import React from 'react';
import SignIn from '../../Components/SignIn';
import SignUp from '../../Components/SignUp';

import './index.scss';


const AuthPages = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default AuthPages