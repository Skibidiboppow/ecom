import React,{useState} from 'react';
import Header from "./components/Header/Header";
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

function App() {

  const [showCart, setShowCart]= useState(false);
  const [cartItems,setCartItems] = useState([]);
  
  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  const handleAddToCart = (productId,productName,productImage)=>{
    const productInCartIndex = cartItems.findIndex(item => item.id === productId
      );
    if (productInCartIndex === -1) {
      
      const newCartItem ={
        id:productId,
        name:productName,
        image:productImage,
        quantity:1
      }; 
      // setCartItems([...cartItems,newCartItem]);  
      // setCartItems(cartItems.concat(newCartItem)); 
      setCartItems((state)=>[...state,newCartItem]);
    }else{
      let updateCartItem = [...cartItems];
      updateCartItem[productInCartIndex].quantity+=1;
      setCartItems(updateCartItem);
    }
  };
  const handleIncreaseQuantity = (productId)=>{
    const productInCartIndex = cartItems.findIndex(item => item.id === productId
      );
      let updateCartItem = [...cartItems];


      updateCartItem[productInCartIndex].quantity+=1;
      setCartItems(updateCartItem);

  }
  const handleDecreaseQuantity = (productId)=>{
    const productInCartIndex = cartItems.findIndex(item => item.id === productId
      );
      const qty =cartItems[productInCartIndex].quantity;
      let updateCartItem = [...cartItems];
      if(qty === 1){
        updateCartItem = updateCartItem.filter((item)=> item.id !== productId )
      }else{
        updateCartItem[productInCartIndex].quantity-=1;
      }
      setCartItems(updateCartItem);

  }

  return (
    <div >
      <Header openCart={openCart}/>
      <Products onAddToCart={handleAddToCart}/>
      <Cart 
      showCart={showCart} 
      closeCart={closeCart} 
      cartItems={cartItems} 
      onIncQuantity = {handleIncreaseQuantity}
      onDecQuantity = {handleDecreaseQuantity}
      />

    </div>
  );
}

export default App;
