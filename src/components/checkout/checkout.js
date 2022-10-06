import { useState, useContext, useCallback } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CartContext } from "../../context/cartContext";
import ResumeCheckout from "./resumeCheckout";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BiCheck } from "react-icons/bi";
import { FaStore } from "react-icons/fa";
import { IconContext } from "react-icons";



const Checkout = () => {

    const [billingInfoRequired, setBillingInfoRequired] = useState(false);
    const [shippingAddressNumberDisabled, setShippingAddressNumberDisabled] = useState(false);
    const [billingAddressNumberDisabled, setBillingAddressNumberDisabled] = useState(false);
    const [isShip, setIsShip] = useState();
    const [business, setBusiness] = useState(true);
    const navigate = useNavigate();
    const { cart = {} } = useContext(CartContext);
    const [values, setValues] = useState({
        email: "",
        consumerName: "",
        consumerLastname: "",
        shippingAddressAddress: "",
        shippingAddressNumber: "",
        shippingAddressDpto: "",
        shippingPostalCode: "",
        shippingMethod: "",
        consumerPersonalId: "",
        billingName: "",
        billingLastname: "",
        billingAddressAddress: "",
        billingAddressNumber: "",
        billingAddressDpto: "",
        billingPersonalId: "",
        shippingOptionName: "",
        shippingOptionCost: ""
    });

    const [validated, setValidated] = useState(false);

    const goToPay = useCallback(() => navigate('/checkout/pago', {replace: true}), [navigate]);

    const handleShipOrPickup = () => {
        const ship = document.getElementById("ship");
        const pickup = document.getElementById("pickup");

        if (ship.checked){
            setIsShip(true);
            document.querySelector(".radio-button-big.ship").classList.add("active");
            document.querySelector(".radio-button-big.pickup").classList.remove("active");

        } else if (pickup.checked){
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
            goToPay();
        }
        

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
                shippingMethod: values.shippingMethod,
                shippingOptionSelected: values.shippingOption,
                shippingOptionCost: values.shippingOptionCost
            },

            cart
        }
        console.log(orderInfo);

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
        const pickupRadioInput = document.getElementById("pickup");

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
                    <Link to="/checkout/entrega" className="btn p-0"><span className="breadcrumb-checkout">Entrega</span></Link>
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

                            <div className="mb-5">
                                <h4 className="mb-4">¿Cómo quieres recibir tu compra?</h4>
                                <div className="d-flex">
                                    <Form.Group required className="mb-3 d-flex w-100" controlId="shippingMethod" onChange={handleBillingRequired}>
                                        <div className="radio-button-big col-6 ship pe-4">
                                                <label htmlFor="shippingMethod" className="js-radio-button-label">
                                                    <input type="radio" name="shippingMethod" value={values.shippingMethod} onClick={handleShipOrPickup} onChange={handleChange} id="ship"/>
                                                    <div className="shipping-icon-container p-1 pb-0">
                                                        <MdOutlineLocalShipping/>
                                                    </div>
                                                    Entrega a domicilio
                                                    <span className="icon-check">
                                                        <IconContext.Provider value={{ className: "icon-check-svg", width: 50 }}>
                                                            <BiCheck/>
                                                        </IconContext.Provider>
                                                    </span>
                                                </label>
                                        </div>
                                        <div className="radio-button-big pickup col-6">
                                                <label htmlFor="shippingMethod" className="js-radio-button">
                                                    <input type="radio" name="shippingMethod" value={values.shippingMethod} onClick={handleShipOrPickup} onChange={handleChange} id="pickup"/>
                                                    <div className="shipping-icon-container p-1 pb-0">
                                                        <FaStore/>
                                                    </div>
                                                    Retiro en tienda
                                                    <span className="icon-check">
                                                        <IconContext.Provider value={{ className: "icon-check-svg", width: 50 }}>
                                                            <BiCheck/>
                                                        </IconContext.Provider>
                                                    </span>
                                                </label>
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>


                            {isShip ?
                            <div className="mb-5">
                                <h4 className="mb-4">Datos de envío</h4>
                                <div className="d-flex">
                                    <Form.Group className="mb-3 col-6 pe-3" controlId="name">
                                        <Form.Control name="consumerName" required value={values.name} onChange={handleChange} type="text" placeholder="Tu nombre" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 col-6" controlId="lastname">
                                        <Form.Control name="consumerLastname" required value={values.consumerLastname} onChange={handleChange} type="text" placeholder="Tu apellido" />
                                    </Form.Group>
                                </div>
                                <div className="mb-4">
                                    <Form.Group className="mb-3 col-12" controlId="shippingAddressAddress">
                                        <Form.Control name="shippingAddressAddress" required value={values.shippingAddressAddress} onChange={handleChange} type="text" placeholder="Nombre de la calle" />
                                    </Form.Group>
                                    <div className="d-flex flex-wrap">
                                        <Form.Group className="mb-3 col-4 pe-3" controlId="shippingAddressNumber">
                                            <Form.Control name="shippingAddressNumber" disabled={shippingAddressNumberDisabled} required={shippingAddressNumberDisabled ? false : true}  value={values.shippingAddressNumber} onChange={handleChange} type="text" placeholder="Altura" />
                                            <Form.Check onChange={handleChangeShippingAddressNumber} className="mt-3" type="checkbox" label="Sin altura" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 col-4 pe-3" controlId="shippingAddressDpto">
                                            <Form.Control name="shippingAddressDpto" type="text" value={values.shippingAddressDpto} onChange={handleChange} placeholder="Departamento (opcional)" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 col-4" controlId="shippingPostalCode">
                                            <Form.Control name="shippingPostalCode" type="text" value={values.shippingPostalCode} onChange={handleChange} placeholder="Código postal" />
                                        </Form.Group>
                                    </div>
                                    <div className="d-flex">
                                        <Form.Group className="mb-3 col-12 mt-4" controlId="consumerPersonalId">
                                            <Form.Control name="consumerPersonalId" type="text" required value={values.consumerPersonalId} onChange={handleChange} placeholder="DNI, CUIL o CUIT" />
                                        </Form.Group>
                                    </div>
                                </div>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check id="billingInfoSame" type="checkbox" defaultChecked onChange={handleBillingRequired} label="Mis datos de facturación serán los mismos que los de envío." />
                                </Form.Group>
                            </div>
                            :null}

                            {billingInfoRequired ? 
                            <div>
                                <h4 className="mb-4">Dirección de facturación</h4>
                                <div>

                                    <h3 className="mb-4 fs-6">¿Negocio o persona?</h3>
                                    <div className="d-flex">
                                        <Form.Group required className="mb-3" controlId="businessOrPerson" onChange={handleBusiness}>
                                            <Form.Check name="businessOrPerson" id="business" type="radio" defaultChecked inline label="Empresa" />
                                            <Form.Check name="businessOrPerson" id="person" type="radio" inline label="Persona" />
                                        </Form.Group>
                                    </div>


                                    {business ?
                                    <div className="d-flex">
                                        <Form.Group className="mb-3 col-6 pe-3" controlId="billingBusinessName">
                                            <Form.Control required name="billingBusinessName" value={values.billingBusinessName} onChange={handleChange} type="text" placeholder="Razón social" />
                                        </Form.Group>
                                    </div>
                                        :
                                    <div className="d-flex">
                                        <Form.Group className="mb-3 col-6 pe-3" controlId="billingName">
                                            <Form.Control required name="billingName" value={values.billingName} onChange={handleChange} type="text" placeholder="Tu nombre" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 col-6" controlId="billingLastname">
                                            <Form.Control required name="billingLastname" value={values.billingLastname} onChange={handleChange} type="text" placeholder="Tu apellido" />
                                        </Form.Group>
                                    </div>}
                                </div>
                                <div className="mb-4">
                                    <Form.Group className="mb-3 col-12" controlId="billingAddressAddress">
                                        <Form.Control name="billingAddressAddress" type="text" required value={values.billingAddressAddress} onChange={handleChange} placeholder="Nombre de la calle" />
                                    </Form.Group>
                                    <div className="d-flex flex-wrap">
                                        <Form.Group className="mb-3 col-4 pe-3" controlId="billingAddressNumber">
                                            <Form.Control name="billingAddressNumber" disabled={billingAddressNumberDisabled}  required={billingAddressNumberDisabled ? false : true} value={values.billingAddressNumber} onChange={handleChange} type="text" placeholder="Altura" />
                                            <Form.Check onChange={handleChangeBillingAddressNumber} className="mt-3" type="checkbox" label="Sin altura" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 col-4 pe-3" controlId="billingAddressDpto">
                                            <Form.Control name="billingAddressDpto" type="text" value={values.billingAddressDpto} onChange={handleChange} placeholder="Departamento (opcional)" />
                                        </Form.Group>
                                        <Form.Group className="mb-3 col-4" controlId="billingPostalCode">
                                            <Form.Control name="billingPostalCode" type="text" value={values.billingPostalCode} onChange={handleChange} placeholder="Código postal" />
                                        </Form.Group>
                                    </div>
                                    <div className="d-flex">
                                        <Form.Group className="mb-3 col-12 mt-4" controlId="billingPersonalId">
                                            <Form.Control name="billingPersonalId" type="text" required value={values.billingPersonalId} onChange={handleChange} placeholder="DNI, CUIL o CUIT" />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>: null}


                            <Button type="submit" className="btn btn-primary w-100">Ir a la etapa de pago</Button>
                        </Form>
                    </div>

                    {/* resumen de la orden*/}
                    <ResumeCheckout/>
                </div>
            </div>
        )

    }
}
export default Checkout;