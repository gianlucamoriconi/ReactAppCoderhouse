import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
  
    const addToCart = (item) => {
      setCart([...cart, item])
    }
    
    const removeItem = (id) => {
      setCart([...cart.filter((item) => item.id !== id)])
    }
    
    const isInCart = (id) => {
      return cart.some((item) => item.id === id)
    }
    
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeItem,
            isInCart
        }}>
          {children}
        </CartContext.Provider>
    )
}

