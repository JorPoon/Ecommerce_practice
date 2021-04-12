import React from "react"
import { Link } from "react-router-dom"
import { auth } from "../../firebase/firebase.utils"
import { connect } from "react-redux"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import CartDropDown from "../cart-dropdown/Cart-dropdown.component.jsx";
import CartIcon from "../cart-icon/Cart-icon.component"
import "./Header.styles.scss"
import CartDropDrown from "../cart-dropdown/Cart-dropdown.component.jsx"


const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
                )
            }
            <CartIcon/>
        </div>
        { hidden ? null:<CartDropDrown/> }
    </div>
)




const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header)