import { useState, useContext, useCallback } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { CartContext } from "../../context/cartContext";
import { OrderContext } from "../../context/orderContext";

import ResumeCheckout from "./resumeCheckout";
import BillingForm from "./billingForm";
import ShippingForm from "./shippingForm";
import ShippingMethod from "./shippingMethod";
import Form from 'react-bootstrap/Form';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config"; 

const Checkout = () => {

    const [billingInfoRequired, setBillingInfoRequired] = useState(false);
    const [shippingAddressNumberDisabled, setShippingAddressNumberDisabled] = useState(false);
    const [billingAddressNumberDisabled, setBillingAddressNumberDisabled] = useState(false);
    const [isShip, setIsShip] = useState();
    const [isPickup, setIsPickup] = useState();
    const [business, setBusiness] = useState(true);
    const { cart = {}, totalAmountInCart } = useContext(CartContext);
    const { order, changeValue } = useContext(OrderContext);
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const goToShippingMethod = useCallback(() => navigate('/checkout/entrega', {replace: true}), [navigate]);
    const [values, setValues] = useState({
        email: '',
        consumerName: '',
        consumerLastname: '',
        shippingAddressAddress: '',
        shippingAddressNumber: '',
        shippingAddressDpto: '',
        shippingPostalCode: '',
        shippingMethod: '',
        consumerPersonalId: '',
        billingName: '',
        billingBusinessName: '',
        billingLastname: '',
        billingAddressAddress: '',
        billingAddressNumber: '',
        billingAddressDpto: '',
        billingPersonalId: '',
        shippingMethod: '',
        shippingOptionName: '',
        shippingOptionCost: ''
    });


    const handleShipOrPickup = () => {
        const ship = document.getElementById("ship");
        const pickup = document.getElementById("pickup");

        if (ship.checked){
            setIsShip(true);
            setIsPickup(false);
            document.querySelector(".radio-button-big.ship").classList.add("active");
            document.querySelector(".radio-button-big.pickup").classList.remove("active");

        } else if (pickup.checked){
            setIsPickup(true);
            setIsShip(false);
            document.querySelector(".radio-button-big.pickup").classList.add("active");
            document.querySelector(".radio-button-big.ship").classList.remove("active");

        }
    };

    const handleBusiness = () => {
        const business = document.getElementById("business");
        const person = document.getElementById("person");

        if (business.checked){
            setBusiness(true);
        } else if (person.checked){
            setBusiness(false);
        }
    };



    const handleSubmit = (event) => {
        const form = event.currentTarget;

        event.preventDefault();

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else{

            setValidated(true);

            const orderInfo = {
                consumer: {
                    consumerName: values.consumerName,
                    consumerLastname: values.consumerLastname,
                    email: values.email,
                    consumerPersonalId: values.consumerPersonalId,
                    addressStreet: values.shippingAddressAddress,
                    addressNumber: values.shippingAddressNumber,
                    addressDpto: values.shippingAddressDpto
                },

                billing: {
                    billingName: values.billingName,
                    billingLastname: values.billingLastname,
                    billingAddressStreet: values.billingAddressAddress,
                    billingAddressNumber: values.billingAddressNumber,
                    billingAddressDpto: values.billingAddressDpto,
                    billingPersonalId: values.billingPersonalId
                },
                
                shipping: {
                    shippingMethod: isShip ? "ship" : "pickup" ,
                },

                cart,
                total: totalAmountInCart()
            }
            // setOrderInCookie(orderInfo);
            changeValue(orderInfo);
            // console.log(orderInfo);
            goToShippingMethod();
        }
    };

    const handleChange = (e) => {

        //Si es un radio, pasamos como valor el ID.
        if (e.target.type === "radio") {
            setValues({
                ...values,
                [e.target.name]: e.target.id
            })
        } else{
            //Si otro (hasta el momento campos de entrada de texto), pasamos como valor el value.
            setValues({
                ...values,
                [e.target.name]: e.target.value
            })
        }
    };

    const handleBillingRequired = (e) => {
        const billingAndShippingInfoIsSameCheckbox = document.getElementById("billingInfoSame");

        if (e.target.id === "billingInfoSame"){

            if (billingAndShippingInfoIsSameCheckbox.checked){
                setBillingInfoRequired(false);
            } else {
                setBillingInfoRequired(true);
            }
        } else if(e.target.id === "pickup"){
            setBillingInfoRequired(true);
            setBillingAddressNumberDisabled(false);
            setShippingAddressNumberDisabled(false)
        } else if(e.target.id === "ship"){
            if (billingInfoRequired){
                //Esto es porque al clickear Pickup aparece el form de billing.
                //Y en caso de hacer eso y volver a tocar Ship, como al renderizar el form de ship aparece por defecto checked
                // el box de "Info de envío igual a la de billing", es necesario ocultar el form de billing para que coincida
                // con el checkbox.
                setBillingInfoRequired(false);
                setBillingAddressNumberDisabled(false);
                setShippingAddressNumberDisabled(false)
            }
        }
    };

    const handleChangeShippingAddressNumber = event => {

        const addressNumberInput = document.getElementById("shippingAddressNumber");
        const addressNumberValue = addressNumberInput.value;

        if (event.target.checked === true){

            setShippingAddressNumberDisabled(true)

            if (addressNumberValue.length > 0) {
                document.getElementById("shippingAddressNumber").value = "";
            }

        } else if (event.target.checked === false){
            setShippingAddressNumberDisabled(false)
        }
    };

    const handleChangeBillingAddressNumber = event => {

        const addressNumberInput = document.getElementById("billingAddressNumber");
        const addressNumberValue = addressNumberInput.value;

        if (event.target.checked === true){

            setBillingAddressNumberDisabled(true)

            if (addressNumberValue.length > 0) {
                document.getElementById("billingAddressNumber").value = "";
            }

        } else if (event.target.checked === false){
            setBillingAddressNumberDisabled(false)
        }
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
                    <Link to="/checkout/datos" className="btn p-0"><span className="breadcrumb-checkout">Entrega</span></Link>
                    <span className="ms-2 me-2 breadcrumb-checkout">/</span>
                    <Link to="/checkout/pago" className="btn p-0"><span className="breadcrumb-checkout">Pago</span></Link>
                </div>

                <div className="d-flex flex-wrap">
                    <div className="p-5 pt-0 col-md-7 col-12">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label name="email" value={values.email} onChange={handleChange} >Email</Form.Label>
                                    <Form.Control type="email" required placeholder="Dejanos un email" />
                                    <Form.Text className="text-muted">
                                    Se utilizará únicamente para identificar tu compra.
                                    </Form.Text>
                                </Form.Group>
                            </div>

                            <ShippingMethod 
                                values={values}
                                handleChange={handleChange} 
                                handleShipOrPickup={handleShipOrPickup} 
                                handleBillingRequired={handleBillingRequired} 
                                isShip={isShip}
                                isPickup={isPickup}
                            />


                            {isShip ?
                            <ShippingForm 
                                values={values} 
                                handleChange={handleChange} 
                                handleChangeShippingAddressNumber={handleChangeShippingAddressNumber} 
                                handleBillingRequired={handleBillingRequired}
                                shippingAddressNumberDisabled={shippingAddressNumberDisabled}
                            />
                            :
                            null}

                            {billingInfoRequired ? 
                            <BillingForm 
                                values={values} 
                                handleChange={handleChange} 
                                handleBusiness={handleBusiness} 
                                business={business} 
                                billingAddressNumberDisabled={billingAddressNumberDisabled} 
                                handleChangeBillingAddressNumber={handleChangeBillingAddressNumber} 
                            /> 
                            : 
                            null}
                            
                            <Button type="submit" className="btn btn-primary w-100">Ir a elegir la opción de entrega</Button>
                        </Form>
                    </div>
                    <ResumeCheckout/>
                </div>
            </div>
        )

    }
}
export default Checkout;