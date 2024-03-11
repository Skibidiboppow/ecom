import React, { useState } from 'react';
import {  } from "../UI/Modal";
import "./Header.css";
import Modal from "../UI/Modal"
export default function Header(){
    const [showCart, setShowCart]= useState(false);

    function openCart(){
        setShowCart(true);
    }
    function closeCart(){
        setShowCart(false);
    }
    return (
        <header className="header">
            <h1>My React Store</h1>
            <div>
                <button 
                className='yellow-button'
                style={{marginRight: "20px"}}>
                Add Product</button>
                <button className='yellow-button' onClick={openCart}>Cart</button>
            </div>
            <Modal show={showCart} onClose={closeCart}> Hello from Cart</Modal>
        </header>
    );
}