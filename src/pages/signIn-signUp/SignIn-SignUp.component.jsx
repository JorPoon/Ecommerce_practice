import React from "react";

import SignIn from "../../components/sign-in/Sign-in.component.jsx"
import SignUp from "../../components/sign-up/Sign-Up.component.jsx"
import "./SignIn-SignUp.styles.scss"

const SignInAndSignUpPage = () => (
    <div className="sign-in-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage