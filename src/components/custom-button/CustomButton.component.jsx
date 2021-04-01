import React from "react";

import "./CustomButton.styles.scss"

const CustomButton = ({children, logInMethod, ...otherButtonProps}) => (
    <button onClick={logInMethod} className="custom-button">
        {children}
    </button>
)


export default CustomButton