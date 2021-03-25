import React from "react"
import "./Sign-in.styles.scss"

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({ email: "", password: "" })
    }

    handleChange = event => {
        event.preventDefault()

        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            </div>
        )
    }
}

export default SignIn