import React,{useState} from 'react';
import Header from "./components/Header/Header";
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import AddProduct from  './components/AddProduct/AddProduct'
import initialProduct from './data/products.json'
function App() {

  const [showCart, setShowCart]= useState(false);
  const [showAddProduct,setShowAddProduct] = useState(false);

  const [cartItems,setCartItems] = useState([]);
  const [products,setProducts] = useState(initialProduct);

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);
  const openAddProduct = () => setShowAddProduct(true);
  const closeAddProduct = () => setShowAddProduct(false);
  
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
  const handleAddProdcut = (productName) =>{
    const product = {
      id:products.length +1,
      name:productName,
      image:"default_product.png",
    }

    setProducts((state)=>[...state,product]);
    closeAddProduct();//or setShowAddProduct(false)
  }


  return (
    <>
      <Header 
      openCart={openCart} 
      openAddProduct={openAddProduct}
      />

      <Products products={products} onAddToCart={handleAddToCart}/>
      <Cart 
      showCart={showCart} 
      closeCart={closeCart} 
      cartItems={cartItems} 
      onIncQuantity = {handleIncreaseQuantity}
      onDecQuantity = {handleDecreaseQuantity}
      />
      <AddProduct 
      showAddProduct={showAddProduct} 
      onCloseAddProduct={closeAddProduct} 
      onAddProduct={handleAddProdcut}
      />
    </>
  );
}

export default App;
