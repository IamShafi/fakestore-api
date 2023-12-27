import React, { useContext , useEffect, useState} from 'react';

// create context
export const CartContext = React.createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);
  // total
  useEffect(()=>{
    const total = cart.reduce((accumulator, item) => {
      return accumulator + item.price * item.amount
    }, 0)
    setTotal(total)
  })
// header cart count
  useEffect(()=>{
    if(cart){
      const amount = cart.reduce((accumulator, item) => {
        return accumulator + item.amount
      }, 0)
      setItemAmount(amount)
    }
  },[cart])

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
  const removefromCart = (id)=>{
    const newCart = cart.filter((item)=> item.id !== id);
    setCart(newCart);
  }
  const clearCart = ()=>{
    setCart([])
  }
  // increase amount
  const increaseAmount = (id) =>{
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  }
  // decrease amount
  const decreaseAmount = (id) =>{
    const cartItem = cart.find((item) => item.id === id);
   
    if(cartItem){
      const newCart = [...cart].map( item=>{
        if(item.id === id){
          return {...cartItem, amount: cartItem.amount - 1}
        }else{
          return item
        }
      })
      setCart(newCart);
    }
    if(cartItem.amount < 2){
      removefromCart(id);
    }
  }
  

  return <CartContext.Provider value={{cart,
     addToCart,
     removefromCart,
     clearCart,
     increaseAmount,
     decreaseAmount,
     itemAmount,
     total,
     }}>{children}</CartContext.Provider>;
}
 
export default CartProvider;
