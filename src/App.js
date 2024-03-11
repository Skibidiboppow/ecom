import React,{useState} from 'react';
import Header from "./components/Header/Header";
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

function App() {
  //Is it working
  const [showCart, setShowCart]= useState(false);
  const [cartItems,setCartItems] = useState([]);
  
  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  const handleAddToCart = (productId,productName,productImage)=>{
    
    console.log(productName);
    
  };

  return (
    <div >
      <Header openCart={openCart}/>
      <Products onAddToCart={handleAddToCart}/>
      <Cart showCart={showCart} closeCart={closeCart} />
      Hello from app
    </div>
  );
}

export default App;
