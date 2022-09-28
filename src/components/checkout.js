import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';



const Checkout = () => {

    const { cart = {}, removeItem, removeAllItems, totalAmountInCart } = useContext(CartContext);

    const [billingInfoSame, setBillingInfoSame] = useState(false);
    const [shippingAddressNumber, setShippingAddressNumber] = useState(false);
    const [billingAddressNumber, setBillingAddressNumber] = useState(false);
    const {stage} = useParams();


    const handleChangeBillingSame = event => {
        setBillingInfoSame(current => !current);
    };

    const handleChangeShippingAddressNumber = event => {
        let addressNumberInput = document.getElementById("shippingAddressNumber");
        let addressNumberValue = addressNumberInput.value;

        if (addressNumberValue.length > 0) {
            document.getElementById("shippingAddressNumber").value = "";
        }
        setShippingAddressNumber(current => !current);
    };

    const handleChangeBillingAddressNumber = event => {
        let addressNumberInput = document.getElementById("billingAddressNumber");
        let addressNumberValue = addressNumberInput.value;

        if (addressNumberValue.length > 0) {
            document.getElementById("billingAddressNumber").value = "";
        }
        setBillingAddressNumber(current => !current);
    };
    

    if (cart.length === 0){
        return(
            <div className="w-100 h-80 p-5 text-center">

                <div>
                    <p className="mb-0">Todavía no tenés ningún producto en tu carrito. Te invitamos a mirar nuestros productos en el siguiente link:</p>
                    <p className="mt-3"><Link to="/todos-los-productos">Ver todos los productos</Link></p>
                </div>
            </div>
        )

    } else{

        return (
            
            <div id="checkoutForm" className="">
                <div className="ps-5 pe-5 pt-4 pb-4 w-100">
                    <Link to="/checkout/entrega" className="btn p-0"><span className="breadcrumb-checkout">Entrega</span></Link>
                    <span className="ms-2 me-2 breadcrumb-checkout">/</span>
                    <Link to="/checkout/pago" className="btn p-0"><span className="breadcrumb-checkout">Pago</span></Link>
                </div>

                <div className="d-flex">
                    <div className="p-5 pt-0 col-7 col">
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
                                <div className="d-flex">
                                    <Form.Group className="mb-3 col-6 pe-3" controlId="name">
                                        <Form.Control type="text" placeholder="Tu nombre" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 col-6" controlId="lasname">
                                        <Form.Control type="text" placeholder="Tu apellido" />
                                    </Form.Group>
                                </div>
                                <div className="mb-4">
                                    <Form.Group className="mb-3 col-12" controlId="shippingAddressAddress">
                                        <Form.Control type="text" placeholder="Nombre de la calle" />
                                    </Form.Group>
                                    <div className="d-flex">
                                        <Form.Group className="mb-3 col-3 pe-3" controlId="shippingAddressNumber">
                                            <Form.Control disabled={shippingAddressNumber ? "disabled" : null} type="text" placeholder="Altura" />
                                            <Form.Check onChange={handleChangeShippingAddressNumber} className="mt-3" fw-light type="checkbox" label="Sin altura" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 col-9" controlId="shippingAddressNumber">
                                            <Form.Control type="text" placeholder="Departamento (opcional)" />
                                        </Form.Group>
                                    </div>
                                </div>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check id="billingInfoSame" type="checkbox" onChange={handleChangeBillingSame} label="Mis datos de facturación serán los mismos que los de envío." />
                            </Form.Group>
                            </div>

                            {!billingInfoSame ? <div>
                                <h4 className="mb-4">Dirección de facturacción</h4>
                                <div className="d-flex">
                                    <Form.Group className="mb-3 col-6 pe-3" controlId="name">
                                        <Form.Control type="text" placeholder="Tu nombre" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 col-6" controlId="lasname">
                                        <Form.Control type="text" placeholder="Tu apellido" />
                                    </Form.Group>
                                </div>
                                <div className="mb-4">
                                    <Form.Group className="mb-3 col-12" controlId="billingAddressAddress">
                                        <Form.Control type="text" placeholder="Nombre de la calle" />
                                    </Form.Group>
                                    <div className="d-flex">
                                        <Form.Group className="mb-3 col-3 pe-3" controlId="billingAddressNumber">
                                            <Form.Control disabled={billingAddressNumber ? "disabled" : null} type="text" placeholder="Altura" />
                                            <Form.Check onChange={handleChangeBillingAddressNumber} className="mt-3" fw-light type="checkbox" label="Sin altura" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 col-9" controlId="billingAddressNumber">
                                            <Form.Control type="text" placeholder="Departamento (opcional)" />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>: null}


                            <Link to="/checkout/pago" className="btn btn-primary w-100">Ir a la etapa de pago</Link>
                        </Form>
                    </div>

                    {/* resumen de la orden*/}

                    <div className="p-5 pt-0 col-5">
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
            </div>
        )
    }
}
export default Checkout;