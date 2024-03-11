import React,{useState} from 'react';

import Header from "./components/Header/Header";
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

function App() {
  const [showCart, setShowCart]= useState(false);

  function openCart(){
      setShowCart(true);
  }
  function closeCart(){
      setShowCart(false);
  }
  return (
    <div >
      <Header openCart={openCart}/>
      <Products/>
      <Cart showCart={showCart} closeCart={closeCart} />
      Hello from app
    </div>
  );
}

export default App;
