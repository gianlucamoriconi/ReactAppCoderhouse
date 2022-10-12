import { useState, useEffect, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import ShippingOptionsContainer from './shippingOptionsContainer';
import ResumeCheckout from "./resumeCheckout";
import { Link } from 'react-router-dom';
import Ellipsis from "../ellipsis";
import { OrderContext } from "../../context/orderContext";
import { CartContext } from "../../context/cartContext";
import Breadcrumbs from './breadcrumbs';


const StepTwoShippingMethod = () => {
    const { order } = useContext(OrderContext);
    const initShip = order.shippingMethod === "ship" ? true : false;
    const initPickup = order.shippingMethod === "pickup" ? true : false;
    const [loading, setLoading] = useState(true);
    const [shippingOptions, setShippingOptions] = useState([]);
    const [pickupOptions, setPickupOptions] = useState([]);
    const isShip = initShip;
    const isPickup = initPickup;
    const { cart = {} } = useContext(CartContext);



    useEffect(() => {
        if (isShip){
            setLoading(true)
    
            const shippingOptionsRef = collection(db, 'shippingOptions')
    
            getDocs(shippingOptionsRef)
                .then((prod) => {
                    const shipOpts = prod.docs.map( (doc) => doc.data() )
                    setShippingOptions(shipOpts);
                })
    
                .catch( (error) =>{
                    console.log(error);
                })
                .finally( ()=> {
                    setLoading(false);
                })
        }
    }, [isShip])
    
    useEffect(() => {
    
        if (isPickup) {
            setLoading(true)
    
    
            const pickupOptionsRef = collection(db, 'pickupOptions')
            getDocs(pickupOptionsRef)
                .then((prod) => {
                    const pickOpts = prod.docs.map( (doc) => doc.data() )
                    setPickupOptions(pickOpts);
                })
    
                .catch( (error) =>{
                    console.log(error);
                })
                .finally( ()=> {
                    setLoading(false);
                })
        }
    }, [isPickup])


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
            <div id="checkoutForm" className='d-flex flex-wrap w-100'>
                <Breadcrumbs/>
                <div className="p-3 p-md-5 pt-0 col-md-7 col-12">
                    <h4 className="mb-4 fs-5">Elegí la opción de entrega</h4>
                    <div className="d-flex mb-4">
                        {
                            loading ? <div className="w-100 text-center"><Ellipsis/></div>: null
                        }

                        {isShip && loading === false ? 
                            <ShippingOptionsContainer 
                                options={shippingOptions}       
                                method="shippingMethod"
                            />
                        : null}

                        {isPickup && loading === false ?
                            <ShippingOptionsContainer 
                                options={pickupOptions}
                                method="pickupMethod"
                            />
                        : null}
                    </div>
                    { !loading ? <div className="d-flex">
                        <div className="col-3 pe-3 ">
                            <Link to="/checkout/datos" className="w-100 btn btn-secondary">Volver</Link>
                        </div>
                        <div className="col-9">
                            <Link to="/checkout/pago" className="w-100 btn btn-primary">Ir a pagar</Link>
                        </div>
                    </div> : null}
                </div>
                <ResumeCheckout/>

            </div>
        )
    }
}

export default StepTwoShippingMethod;