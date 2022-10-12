import './scss/styles.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Account from './components/account/Account';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/cartContext';
import Cart from './components/Cart';
import Checkout from './components/checkout/Checkout';
import StepTwoShippingMethod from './components/checkout/StepTwoShippingMethod';
import StepThreePayment from './components/checkout/StepThreePayment';
import Success from './components/checkout/Success';
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
