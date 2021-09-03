import React from 'react';
import './customButton.style.scss';

export default function CustomButton({children,isGoogleSignIn,...otherProps}) {
    return (
        <button className={` ${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
