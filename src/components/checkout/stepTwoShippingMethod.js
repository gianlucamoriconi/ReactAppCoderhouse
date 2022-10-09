import { useState, useEffect, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import ShippingOptionsContainer from './shippingOptionsContainer';
import ResumeCheckout from "./resumeCheckout";
import { Link } from 'react-router-dom';
import Ellipsis from "../ellipsis";
import { OrderContext } from "../../context/orderContext";




const StepTwoShippingMethod = () => {
    let order = JSON.parse(localStorage.getItem('order'))
    const { changeValue } = useContext(OrderContext);
    const initShip = order.shippingMethod === "ship" ? true : false;
    const initPickup = order.shippingMethod === "pickup" ? true : false;
    const [loading, setLoading] = useState(true);
    const [shippingOptions, setShippingOptions] = useState([]);
    const [pickupOptions, setPickupOptions] = useState([]);
    const isShip = initShip;
    const isPickup = initPickup;


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
                    console.log(pickupOptions);
                })
    
                .catch( (error) =>{
                    console.log(error);
                })
                .finally( ()=> {
                    setLoading(false);
                })
        }
    }, [isPickup])

    return (
        <div className='d-flex flex-wrap w-100'>
            <div className="ps-5 pe-5 pt-4 pb-4 w-100">
                <Link to="/checkout/datos" className="btn p-0"><span className="breadcrumb-checkout">Datos</span></Link>
                <span className="ms-2 me-2 breadcrumb-checkout">/</span>
                <Link to="/checkout/entrega" className="btn p-0"><span className="breadcrumb-checkout">Entrega</span></Link>
                <span className="ms-2 me-2 breadcrumb-checkout">/</span>
                <Link to="/checkout/pago" className="btn p-0"><span className="breadcrumb-checkout">Pago</span></Link>
            </div>
            <div className="p-5 pt-0 col-md-7 col-12">
                <h4 className="mb-4">Elegí la opción de entrega</h4>
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
                <div className="d-flex">
                    <Link to="/checkout/datos" className="col-3 me-3 btn btn-secondary">Volver</Link>
                    <Link to="/checkout/pago" className="col-9 btn btn-primary">Ir a pagar</Link>
                </div>
            </div>
            <ResumeCheckout/>

        </div>
    )
}

export default StepTwoShippingMethod;