import './scss/styles.scss';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Account from './components/account/account';

import ItemListContainer from './components/itemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer';
import { CartProvider } from './context/cartContext';
import Cart from './components/cart';
import Checkout from './components/checkout/checkout';
import StepTwoShippingMethod from './components/checkout/stepTwoShippingMethod';
import StepThreePayment from './components/checkout/stepThreePayment';
import Success from './components/checkout/success';
import { OrderProvider } from './context/orderContext';
import { LoginProvider } from './context/loginContext';
 
function App() {

  return (
    <LoginProvider>
    <CartProvider>
      <OrderProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/todos-los-productos" element={ <ItemListContainer greeting="Todos los productos" /> }/>
            <Route path="/categoria/:categorySlug" element={ <ItemListContainer /> }/>
            <Route path="*" element={ <Navigate to="/"/> }/>
            <Route path="/producto/:itemSlug" element={ <ItemDetailContainer/> }/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout/datos" element={<Checkout/>}/>
            <Route path="/checkout/entrega" element={<StepTwoShippingMethod/>}/>
            <Route path="/checkout/pago" element={<StepThreePayment/>}/>
            <Route path="/checkout/success/:orderCode" element={<Success/>}/>
            <Route path="/mi-cuenta" element={ <Account /> }/>
          </Routes>
          
          <Footer />
        </BrowserRouter>
      </OrderProvider>
    </CartProvider>
    </LoginProvider>
  )
}

export default App;
