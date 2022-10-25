import { BsCart2 } from 'react-icons/bs';
import { IoMdTrash } from 'react-icons/io';
import { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const CartWidget = () => {
    const { cart, removeItem, removeAllItems, totalAmountInCart } = useContext(CartContext);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        return (
            <div id="cartWidget">
                <Button className="btn btn-primary" onClick={handleShow}>
                    <div className='d-flex'><BsCart2 /><span className='cart-widget-amount'>{cart.length}</span></div>
                </Button>

                <Offcanvas show={show} placement="end" onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="fw-bold">Carrito</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    {cart.length < 1 ? <div>
                            Aquí estarán los productos que llevas comprando
                        </div>:
                        cart.map((item, i) => (
                            <div key={i}>
                            <div className="d-flex">
                                <div className="col-3 item-cart-col-img">
                                    <img className="w-100" src={item.image} alt={item.name}/>
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
                    </Offcanvas.Body>
                    {cart.length > 0 ?
                        <div className='w-100 d-flex p-3 flex-wrap'>
                            <div className='p-3 d-flex w-100'>
                                <h4 className='text-end w-100'>Total: ${new Intl.NumberFormat('es-AR').format(totalAmountInCart())}</h4>
                                <hr/>
                            </div>
                            <div className='p-3 d-flex w-100'>
                                <button onClick={removeAllItems} className="btn btn-secondary w-100 me-2">Vaciar carrito</button>
                                <Link to="/cart" className="btn btn-primary w-100" onClick={handleClose}>Ver carrito</Link>
                            </div>
                            <div className='ps-3 pe-3 pt-0 d-flex w-100'>
                            <Link to="/checkout/datos" onClick={handleClose} className="btn btn-primary w-100">Iniciar compra</Link>
                            </div>
                        </div>
                    : null}
                </Offcanvas>
            </div>
        )

}

export default CartWidget;
