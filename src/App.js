import './scss/styles.scss';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import ItemListContainer from './components/itemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer';
import { CartProvider } from './context/cartContext';
import Cart from './components/cart';
import Checkout from './components/checkout/checkout';
import PaymentStage from './components/checkout/paymentStage';
 
function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/todos-los-productos" element={ <ItemListContainer greeting="Todos los productos" /> }/>
          <Route path="/categoria/:categorySlug" element={ <ItemListContainer /> }/>
          <Route path="*" element={ <Navigate to="/"/> }/>
          <Route path="/producto/:itemSlug" element={ <ItemDetailContainer/> }/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout/entrega" element={<Checkout/>}/>
          <Route path="/checkout/pago" element={<PaymentStage/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
