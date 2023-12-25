import React, { useContext , useEffect, useState} from 'react';

// create context
export const CartContext = React.createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, id) =>{
    // console.log( `${product.title} is added to chart`);
    const newItem = { ...product, amount: 1}; 
    // check if item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    })
    if(cartItem){
      const newCart = [...cart].map( item=>{
        if(item.id === id){
          return {...cartItem, amount: cartItem.amount + 1}
        }else{
          return item
        }
      })
      setCart(newCart);
    }
    else{
      setCart([...cart, newItem]);
    }
    
   
  }
  console.log(cart);

  return <CartContext.Provider value={{cart, addToCart}}>{children}</CartContext.Provider>;
}
 
export default CartProvider;
