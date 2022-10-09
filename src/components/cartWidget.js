import { BsCart2 } from 'react-icons/bs';
import { IoMdTrash } from 'react-icons/io';
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const { cart, removeItem, removeAllItems, itemsQuantity, totalAmountInCart } = useContext(CartContext);

        return (
            <div id="cartWidget">
                <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <div className='d-flex'><BsCart2 /><span className='cart-widget-amount'>{cart.length}</span></div>
                </a>

                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title fw-bold" id="offcanvasExampleLabel">Carrito</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        {cart.length < 1 ? <div>
                            Aquí estarán los productos que llevas comprando
                        </div>:
                        cart.map((item, i) => (
                            <div key={i}>
                            <div className="d-flex">
                                <div className="col-3 item-cart-col-img">
                                    <img className="w-100" src={item.image}/>
                                </div>
                                <div className='col-7 item-cart-col-info'>
                                    <h3 className='item-name-cart'>{item.name}</h3>
                                    <p className='item-info-cart item-price-cart'>${new Intl.NumberFormat('es-AR').format(item.price)}</p>
                                    <p className='item-info-cart item-quantity-cart'>Cantidad: {item.quantity}</p>
                                    {item.option1 !== null || item.option2 !== null ? 
                                    <div className="variants item-quantity-cart">
                                        <p> Variante:
                                        {item.text !== null ?
                                        <span> {item.text}</span>
                                        :null}
                                        </p>
                                    </div>:null}
                                </div>
                                <div className='col-2 item-cart-col-button text-center'>
                                    <button onClick={() => removeItem(item.id)} className="trash"><IoMdTrash/></button>
                                </div>
                            </div>
                            <hr/>
                            </div>
                        ))
                        }
                    </div>
                    {cart.length > 0 ?
                    <div className='w-100 d-flex p-3 flex-wrap'>
                        <div className='p-3 d-flex w-100'>
                            <h4 className='text-end w-100'>Total: ${new Intl.NumberFormat('es-AR').format(totalAmountInCart())}</h4>
                            <hr/>
                        </div>
                        <div className='p-3 d-flex w-100'>
                            <button onClick={removeAllItems} className="btn btn-secondary w-100 me-2">Vaciar carrito</button>
                            <Link to="/cart" className="btn btn-primary w-100">Ver carrito</Link>
                        </div>
                        <div className='ps-3 pe-3 pt-0 d-flex w-100'>
                        <Link to="/checkout/datos" className="btn btn-primary w-100">Iniciar compra</Link>
                        </div>
                    </div>
                    : null}
                </div>
            </div>
        )

}

export default CartWidget;
