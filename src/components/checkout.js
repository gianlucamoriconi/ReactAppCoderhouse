import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from 'react-router-dom';
import { IoMdTrash } from 'react-icons/io';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Checkout = () => {

    const { cart, removeItem, removeAllItems, totalAmountInCart } = useContext(CartContext);
    

    if (cart.length === 0){
        
        <div className="w-100 h-80 p-2 text-center">

            <div>
                <p className="mb-0">Todavía no tenés ningún producto en tu carrito. Te invitamos a mirar nuestros productos en el siguiente link:</p>
                <Link className="" to="/todos-los-productos">Ver todos los productos</Link>
            </div>
        </div>

    } else{

        return (
            
            <div className="d-flex">
                <div className="p-5 col-7 col">
                    <Form>
                        <div className="mb-5">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Dejanos un email" />
                                <Form.Text className="text-muted">
                                Se utilizará únicamente para identificar tu compra.
                                </Form.Text>
                            </Form.Group>
                        </div>

                        <div className="mb-5">
                            <h4 className="mb-4">Datos de envío</h4>
                            <div className="d-flex mb-4">
                                <Form.Group className="mb-3 col-6 pe-3" controlId="name">
                                    <Form.Label>Nombre/s</Form.Label>
                                    <Form.Control type="text" placeholder="Tu nombre" />
                                </Form.Group>

                                <Form.Group className="mb-3 col-6" controlId="lasname">
                                    <Form.Label>Apellido/s</Form.Label>
                                    <Form.Control type="text" placeholder="Tu apellido" />
                                </Form.Group>
                            </div>
                            <div className="mb-4">
                                <Form.Group className="mb-3 col-12" controlId="shippingAddressAddress">
                                    <Form.Control type="text" placeholder="Nombre de la calle" />
                                </Form.Group>
                                <div className="d-flex">
                                    <Form.Group className="mb-3 col-3 pe-3" controlId="shippingAddressNumber">
                                        <Form.Control type="text" placeholder="Altura" />
                                        <Form.Check className="mt-3 fw-light" type="checkbox" label="Sin altura" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-9" controlId="shippingAddressNumber">
                                        <Form.Control type="text" placeholder="Departamento (opcional)" />
                                    </Form.Group>
                                </div>
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Mis datos de envío serán los mismos que los de facturación" />
                        </Form.Group>
                        </div>

                        <div>
                            <h4>Dirección de facturacción</h4>
                            <Form.Group className="mb-3 col-6 pe-3" controlId="name">
                                <Form.Label>Nombre/s</Form.Label>
                                <Form.Control type="text" placeholder="Tu nombre" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-6" controlId="lasname">
                                <Form.Label>Apellido/s</Form.Label>
                                <Form.Control type="text" placeholder="Tu apellido" />
                            </Form.Group>
                        </div>


                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>

                {/* resumen de la orden*/}

                <div className="p-5 col-5">
                    <div id="orderResume" className="row p-3 m-0 shadow bg-body rounded">

                        <div>
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
                                </div>
                                <hr/>
                                </div>
                            ))
                            }
                        </div>
                        <div className='pt-4 d-flex w-100'>
                            <h4 className='text-end w-100'>Total: ${new Intl.NumberFormat('es-AR').format(totalAmountInCart())}</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Checkout;