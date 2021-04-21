import React from "react";
import { connect } from "react-redux";
import { clearCartItem } from "../../redux/cart/cart.actions"

import "./Checkout-item.styles.scss";


const CheckoutItem = ({cartItem, clearCartItem}) => {
    
    const {name, quantity, imageUrl, price} = cartItem

    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={() => clearCartItem(cartItem)}>&#10006;</div>
    </div>
)}

const matchDispatchToProps = dispatch => ({
    clearCartItem: item => dispatch(clearCartItem(item))
})

export default connect(null, matchDispatchToProps)(CheckoutItem)