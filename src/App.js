import './scss/styles.scss';
import Header from './components/header';
import Home from './components/home';
import ItemListContainer from './components/itemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer';
import { MyContext } from './context/MyContext';
 
function App() {
  return (
    <MyContext.Provider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/productos" element={ <ItemListContainer greeting="Todos los productos" /> }/>
          <Route path="/productos/:categorySlug" element={ <ItemListContainer /> }/>
          <Route path="*" element={ <Navigate to="/"/> }/>
          <Route path="/producto/:itemSlug" element={ <ItemDetailContainer/> }/>
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  )
}

export default App;
