import React from 'react';

import "./Header.css";

export default function Header({openCart}){

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
            
        </header>
    );
}