import { createContext, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
  
    const addToCart = (item, counter) => {
      if (isInCart(item.id) === true){
        
        cart.map((itemInCart) => {
          if (itemInCart.id === item.id){
            itemInCart.quantity = itemInCart.quantity + counter
            setCart([...cart]); 
            itemAddedNotify(item.name, counter);
          }
        });

      } else{
        setCart([...cart, item])
        itemAddedNotify(item.name, counter);
        
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

    function itemAddedNotify(product, counter){
      toast.success(`Agregaste ${counter} "${product}" al carrito`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
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

