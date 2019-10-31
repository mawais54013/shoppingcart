import React from 'react';
import './cart.css'

const Cart = ({ cartItems }) => (
    <div>
        <button className="custom-button">
            <p className="cart">Cart: {cartItems == 0 ? (cartItems.length) : ("0 items")}</p>
        </button>
    </div>
);

export default Cart;