import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from 'react-router-dom';
import { IoMdTrash } from 'react-icons/io';



const Cart = () => {

    const { cart, removeItem, removeAllItems, totalAmountInCart } = useContext(CartContext);
    

    return (
        <div id="cart-page">
            <div className="container">
                <div className="p-md-4 mb-3"><h1 className="pb-4 text-center">Carrito</h1>
                    <div className="p-md-5">
                      
                        {cart.length < 1 ?
                        
                        <div className="w-100 h-80 p-2 text-center">

                            <div>
                                <p className="mb-0">Acá se visualizan los productos previo a iniciar la compra.</p>
                                <p>Todavía no tenés ninguno, puedes ver todos los productos acá:</p>
                                <Link className="" to="/todos-los-productos">Ver todos los productos</Link>
                            </div>
                        </div>
                        
                        :
                        
                        cart.map((item) => (
                            <div key={item.id} className="p-4">
                                <div key={item.id} className="d-flex">
                                    <div className="col-3 item-cart-col-img">
                                        <img className="w-100 img-item-product-cart" alt={item.id} src={item.image}/>
                                    </div>
                                    <div className='col-7 item-cart-col-info'>
                                        <h3>{item.name}</h3>
                                        <p>${new Intl.NumberFormat('es-AR').format(item.price)}</p>
                                        <p>Cantidad: {item.quantity}</p>
                                        {item.option1 !== null || item.option2 !== null ? 
                                        <div className="variants">
                                            <p> Variante:
                                            {item.option1 !== null ?
                                            <span> {item.option1}</span>
                                            : null}
                                            {item.option2 !== null ?
                                            <span> {item.option2}</span>
                                            : null}
                                            </p>
                                        </div>:null}
                                    </div>
                                    <div className='col-2 item-cart-col-button text-center'>
                                        <button onClick={() => removeItem(item.id)} className="trash"><IoMdTrash/></button>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        ))}
                  
                    {cart.length > 0 ?

                    <div className='w-100 d-flex p-3 flex-wrap'>
                        <div className='p-3 d-flex w-100'>
                            <h4 className='text-end w-100'>Total: ${new Intl.NumberFormat('es-AR').format(totalAmountInCart())}</h4>
                            <hr/>
                        </div>
                        <div className='d-flex flex-wrap w-100'>
                           <div className="d-flex w-100 mb-3">
                                <div className="pe-3">
                                    <Link to="/todos-los-productos" className="btn btn-secondary">Seguir comprando</Link>
                                </div>
                                <div className="pe-3">
                                    <button onClick={removeAllItems} className="btn btn-secondary">Vaciar carrito</button>
                                </div>
                            </div>
                            <Link to="/checkout/datos" className="btn w-100 btn-primary">Iniciar compra</Link>
                        </div>
                    </div>

                    : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;