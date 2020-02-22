import React from 'react';
import Signin from '../../components/signin/signin.component';
import Signup from '../../components/signup/signup.component';
import './signin-signup.styles.scss';

const SigninSignupPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <Signin />
            <Signup />
            
        </div>
    );
};

export default SigninSignupPage