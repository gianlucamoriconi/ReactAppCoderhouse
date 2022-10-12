import { MdOutlineLocalShipping } from "react-icons/md";
import { BiCheck } from "react-icons/bi";
import { FaStore } from "react-icons/fa";
import { IconContext } from "react-icons";
import Form from 'react-bootstrap/Form';



const ShippingMethod = (props) => {

    const { values, handleChange, handleShipOrPickup, handleBillingRequired } = props;


    return (
        <div className="mb-5">
            <h4 className="mb-4 fs-5">¿Cómo querés recibir tu compra?</h4>
            <div className="d-flex flex-wrap">
                <Form.Group className="mb-3 d-flex w-100" controlId="shippingMethod" onChange={handleBillingRequired}>
                    <div className="radio-button-big col-6 ship pe-2">
                            <label htmlFor="shippingMethod" className="js-radio-button-label">
                                <Form.Check className="p-0 m-0" type="radio" name="shippingMethod" value={values.shippingMethod} onClick={handleShipOrPickup} onChange={handleChange} id="ship" required/>
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
                                <Form.Check className="p-0 m-0" type="radio" name="shippingMethod" value={values.shippingMethod} onClick={handleShipOrPickup} onChange={handleChange} id="pickup" required/>
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
    )
}

export default ShippingMethod;