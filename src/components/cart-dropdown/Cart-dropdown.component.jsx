import React from "react";
import CustomButton from "../custom-button/CustomButton.component.jsx";
import "./Cart-dropdown.styles.scss";

const CartDropDrown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropDrown