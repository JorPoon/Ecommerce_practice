import React from "react";

import "./CustomButton.styles.scss"

const CustomButton = ({children, logInMethod, isGoogleSignIn, inverted, ...otherButtonProps}) => (
    <button onClick={logInMethod} className={`${inverted ? "inverted" : ""}${ isGoogleSignIn ? "google-sign-in" : "" } custom-button`} {...otherButtonProps}>
        {children}
    </button>
)


export default CustomButton