import React from "react";
import Modal from "../UI/Modal";
function Cart({showCart,closeCart}){
    return <Modal show={showCart} onClose={closeCart}>
        Hello from Cart
    </Modal>   
}
export default Cart;