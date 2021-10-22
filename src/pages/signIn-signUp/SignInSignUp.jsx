import React from 'react';
import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/signUp/signup';
import './signInsignUp.style.scss';

export default function SignInSignUp() {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}
