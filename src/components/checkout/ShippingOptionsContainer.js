import ShippingOption from './ShippingOption';
import { useContext } from "react";
import { OrderContext } from "../../context/orderContext";
import Form from 'react-bootstrap/Form';


const ShippingOptionsContainer = ({options, method}) => {

    const { order, changeValue } = useContext(OrderContext);

    const addShippingInOrder = (e) => {
       const orderUpdate = {
            ...order,
            shippingData: JSON.parse(e.target.getAttribute("data-option"))    
        }

        changeValue(orderUpdate);
    }

    return (
        <div className='d-flex flex-wrap w-100'>
            <Form.Group required className="mb-3 w-100" controlId="shippingMethod" onChange={addShippingInOrder}>
            {
                options.map((opt) => {
                    return  <ShippingOption
                                option={opt}
                                method={method}
                                key={opt.id}
                            />
                })
            }
            </Form.Group>
        </div>
    )
}

export default ShippingOptionsContainer;