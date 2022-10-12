import { useState, useContext, useCallback } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { CartContext } from "../../context/cartContext";
import { OrderContext } from "../../context/orderContext";

import ResumeCheckout from "./ResumeCheckout";
import BillingForm from "./BillingForm";
import ShippingForm from "./ShippingForm";
import ShippingMethod from "./ShippingMethod";
import Form from 'react-bootstrap/Form';
import Breadcrumbs from './Breadcrumbs';

const Checkout = () => {

    const [billingInfoRequired, setBillingInfoRequired] = useState(false);
    const [shippingAddressNumberDisabled, setShippingAddressNumberDisabled] = useState(false);
    const [billingAddressNumberDisabled, setBillingAddressNumberDisabled] = useState(false);
    const [isShip, setIsShip] = useState();
    const [isPickup, setIsPickup] = useState();
    const [business, setBusiness] = useState(true);
    const { cart = {}, totalAmountInCart } = useContext(CartContext);
    const { changeValue } = useContext(OrderContext);
    let order = JSON.parse(localStorage.getItem('order'));
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const goToShippingMethod = useCallback(() => navigate('/checkout/entrega', {replace: true}), [navigate]);

    /* 
        Seteamos los valores al iniciar el form.
        Si existe algun dato guardado en Storage, lo completamos. Sino, lo dejamos vacío.
        En caso de que el checkbox de que la información de facturación será la misma que la de envío,
        en los campos de billing completaremos con los datos de consumer, por eso el ternario con billingInfoRequired.
    */
    const [values, setValues] = useState({
        email: order.email || '',
        consumerName: order.consumer.consumerName || '',
        consumerLastname: order.consumer.consumerLastname || '',
        shippingAddressAddress: order.consumer.addressStreet || '',
        shippingAddressNumber: order.consumer.addressNumber || '',
        shippingAddressDpto: order.consumer.addressDpto || '',
        shippingPostalCode: order.consumer.postalCode || '',
        shippingMethod: '',
        consumerPersonalId: order.consumer.consumerPersonalId ||'',
        billingName: billingInfoRequired ? order.billing.billingName || '' : order.consumer.consumerName,
        billingBusinessName: billingInfoRequired ? null : business ? order.billing.billingBusinessName || '' : null,
        billingLastname: billingInfoRequired ? order.billing.billingLastname || '' : order.consumer.consumerLastname,
        billingAddressAddress: billingInfoRequired ? order.billing.billingAddressStreet || '' : order.consumer.addressStreet,
        billingAddressNumber: billingInfoRequired ? order.billing.billingAddressNumber || '' : order.consumer.addressNumber,
        billingAddressDpto: billingInfoRequired ? order.billing.billingAddressDpto || '' : order.consumer.addressDpto,
        billingPersonalId: billingInfoRequired ? order.billing.billingPersonalId || '' : order.consumer.consumerPersonalId,
        billingPostalCode: billingInfoRequired ? order.billing.billingPostalCode || '' : order.consumer.postalCode,
        shippingOptionName: '',
        shippingOptionCost: ''
    });


    //Capturamos el cambio de elección en si es Ship (Envío a domicilio) o Pickup (retiro)
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

    // Si en el formulario de Billing eligen Persona o Empresa
    const handleBusiness = () => {
        const business = document.getElementById("business");
        const person = document.getElementById("person");

        if (business.checked){
            setBusiness(true);
        } else if (person.checked){
            setBusiness(false);
        }
    };



    //Envío de formulario en la etapa "Datos".
    //Guarda los datos ingresados en Storage
    const handleSubmit = (event) => {
        const form = event.currentTarget;

        event.preventDefault();

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else{

            setValidated(true);

            const orderInfo = {
                email: values.email,
                consumer: {
                    consumerName: isShip ? values.consumerName : null,
                    consumerLastname: isShip ? values.consumerLastname : null,
                    consumerPersonalId: isShip ? values.consumerPersonalId : null,
                    addressStreet: isShip ? values.shippingAddressAddress : null,
                    addressNumber: isShip ? values.shippingAddressNumber : null,
                    addressDpto: isShip ? values.shippingAddressDpto : null,
                    postalCode: isShip ? values.shippingPostalCode : null
                },

                billing: {
                    billingName: billingInfoRequired ? values.billingName : values.consumerName || null,
                    billingBusinessName: billingInfoRequired ? business ? values.billingBusinessName : null : null,
                    billingLastname: billingInfoRequired ? values.billingLastname || null : values.consumerLastname || null,
                    billingAddressStreet: billingInfoRequired ? values.billingAddressAddress || null : values.shippingAddressAddress || null,
                    billingAddressNumber: billingInfoRequired ? values.billingAddressNumber || null : values.shippingAddressNumber || null ,
                    billingAddressDpto: billingInfoRequired ? values.billingAddressDpto || null : values.shippingAddressDpto || null,
                    billingPostalCode: billingInfoRequired ? values.billingPostalCode || null : values.shippingPostalCode || null,
                    billingPersonalId: billingInfoRequired ? values.billingPersonalId || null : values.consumerPersonalId || null
                },
                
                shippingMethod: isShip ? "ship" : "pickup" ,

                cart,
                total: totalAmountInCart()
            }
            
            changeValue(orderInfo);
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
                <Breadcrumbs/>

                <div className="d-flex flex-wrap">
                    <div className="p-3 p-md-5 pt-0 col-md-7 col-12">
                        <Form validated={validated} onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <Form.Group className="mb-3" controlId="emailP">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" required value={values.email} onChange={handleChange} placeholder="Dejanos un email" />
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