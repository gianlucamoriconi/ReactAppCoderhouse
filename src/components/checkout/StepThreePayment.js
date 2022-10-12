import { useState, useContext, useCallback } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Ellipsis from "../Ellipsis";
import { CartContext } from "../../context/cartContext";
import { OrderContext } from "../../context/orderContext";
import ResumeCheckout from "./ResumeCheckout";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config"; 
import Breadcrumbs from './Breadcrumbs';
import PaymentOption from './PaymentOption';
import Form from 'react-bootstrap/Form';
import { paymentProvidersArray} from '../../paymentProviders/paymentProviders';


const StepThreePayment = () => {
    const [loading, setLoading] = useState(false);
    const { order, changeValue } = useContext(OrderContext);
    const { cart, removeAllItems } = useContext(CartContext);
    const navigate = useNavigate();
    const goToSuccess = useCallback((orderCode) => navigate(`/checkout/success/${orderCode}` , {replace: true}), [navigate]);


    const [paymentActive, setPaymentActive] = useState({
        active: false,
        paymentActiveData: false
    });



    const handlePaymentActive = (e) => {

        const paymentActiveID = e.target.id;

        const paymentClicked = paymentActiveID;

        let finder = paymentProvidersArray.filter(payment => payment.id === paymentClicked);
        finder = finder[0];

        //Actualizamos la orden con la info del payment elegido
        const orderUpdate = {
            ...order,
            paymentData: finder    
        }

        changeValue(orderUpdate);


        if (e.target.id === "allPayments"){
            setPaymentActive({
                active: false,
                paymentActiveData: false
            });
        } else{
            setPaymentActive({
                active: true,
                paymentActiveData: finder
            });
        }
    }


    function sendOrder(order) {
        setLoading(true);
        const ordersRef = collection(db, 'orders');
        addDoc(ordersRef, order)
            .then( (doc) =>{
                const orderSuccessWithID = {
                    ...order,
                    orderId: doc.id    
                }

                localStorage.setItem("orderSuccess", JSON.stringify(orderSuccessWithID));

                //Vaciamos el carrito luego de concretada la compra
                goToSuccess(doc.id);
                removeAllItems();

            })
            .catch( (error) =>{
                console.log(error);
            })
            .finally( ()=> {
                setLoading(false);
            })
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
            
            <div id="checkoutForm">
                <Breadcrumbs/>

                <div className="d-flex flex-wrap">
                    <div className="p-3 p-md-5 pt-0 col-md-7 col-12">
                        <div>
                        <h4 className="mb-4 fs-5">Medios de pago</h4>
                            <Form>
                                <div className="payment-list mb-5">
                                

                                    {paymentActive.active ? <PaymentOption open={true} handlePaymentActive={handlePaymentActive} paymentData={paymentActive.paymentActiveData}/>
                                    
                                    :
                                    <Form.Group required className="mb-3" controlId="payment-option" onChange={handlePaymentActive}>
                                       {paymentProvidersArray.map((payment) => (
                                            <PaymentOption
                                                key={payment.id}
                                                id={payment.id}
                                                handlePaymentActive={handlePaymentActive}
                                                paymentData={payment}
                                                open={false}
                                            />
                                        ))}
                                    </Form.Group>
                                    
                                    }

                                    
                                </div>
                            </Form>
                        </div>

                        <div className="d-flex">
                            <div className="col-3 pe-3 ">
                                <Link to="/checkout/entrega" className="w-100 btn btn-secondary">Volver a entrega</Link>
                            </div>
                            {paymentActive.active ?
                            <div className="col-9">
                                <button onClick={() => sendOrder(order)} className="w-100 btn btn-primary">{loading ? <Ellipsis/> : "Finalizar compra"}</button>
                            </div>
                            : null}
                        </div>
                    </div>
                    <ResumeCheckout/>
                </div>
            </div>
        )

    }
}
export default StepThreePayment;