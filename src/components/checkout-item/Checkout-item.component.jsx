import React from "react";


import "./Checkout-item.styles.scss";


const CheckoutItem = ({cartItem: {name, quantity, imageUrl, price}}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-button">&#10006;</div>
    </div>
)


export default CheckoutItem