import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors"
import { createStructuredSelector } from "reselect";
import CustomButton from "../custom-button/CustomButton.component.jsx";
import CartItem from "../cart-item/Cart-item.component.jsx";
import "./Cart-dropdown.styles.scss";

const CartDropDrown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            }
            </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropDrown)