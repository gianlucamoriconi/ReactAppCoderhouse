import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
  
    const addToCart = (item, counter) => {
      if (isInCart(item.id) === true){
        
        cart.map((itemInCart) => {
          if (itemInCart.id === item.id){
            itemInCart.quantity = itemInCart.quantity + counter
            setCart([...cart]); 
          }
      });

      } else{
        setCart([...cart, item])
      }
    }
    
    const removeItem = (id) => {
      setCart([...cart.filter((item) => item.id !== id)])
    }

    const removeAllItems = (id) => {
      setCart([]);
    }
    
    const isInCart = (id) => {
      return cart.some((item) => item.id === id)
    }
    
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeItem,
            removeAllItems,
            isInCart
        }}>
          {children}
        </CartContext.Provider>
    )
}

