import { MdOutlineLocalShipping } from "react-icons/md";
import { BiCheck } from "react-icons/bi";
import { FaStore } from "react-icons/fa";
import { IconContext } from "react-icons";
import Form from 'react-bootstrap/Form';


const ShippingMethod = (props) => {

    const { values, handleChange, handleShipOrPickup, handleBillingRequired } = props;

    return (
        <div className="mb-5">
            <h4 className="mb-4">¿Cómo querés recibir tu compra?</h4>
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
    )
}

export default ShippingMethod;