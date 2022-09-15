import './scss/styles.scss';
import { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import ItemListContainer from './components/itemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer';
import { CartContext } from './context/cartContext';
 
function App() {
  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider value={{
      cart,
      setCart
    }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/todos-los-productos" element={ <ItemListContainer greeting="Todos los productos" /> }/>
          <Route path="/categoria/:categorySlug" element={ <ItemListContainer /> }/>
          <Route path="*" element={ <Navigate to="/"/> }/>
          <Route path="/producto/:itemSlug" element={ <ItemDetailContainer/> }/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App;
