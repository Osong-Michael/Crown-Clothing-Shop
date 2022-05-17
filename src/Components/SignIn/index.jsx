import React from 'react';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

import { auth, signInWithGooglePopup } from '../../firebase/firebase.utils';

import './index.scss';



class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    };

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch(err) {
            console.log(err);
        };
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }


    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>


                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />

                    <FormInput
                        type="password"
                        name='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                    />

                    <div className="buttons">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton type="button" onClick={signInWithGooglePopup} isGoogleSignIn >SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    };
};

export default SignIn;