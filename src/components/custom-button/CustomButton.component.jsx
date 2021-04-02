import React from "react";

import "./CustomButton.styles.scss"

const CustomButton = ({children, logInMethod, isGoogleSignIn, ...otherButtonProps}) => (
    <button onClick={logInMethod} className={`${ isGoogleSignIn ? "google-sign-in" : "" }custom-button`} {...otherButtonProps}>
        {children}
    </button>
)


export default CustomButton