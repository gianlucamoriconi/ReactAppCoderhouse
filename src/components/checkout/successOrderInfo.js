import { BsBagCheck } from "react-icons/bs";
import CartView from '../cartView';
import { priceARS } from '../../helpers/priceFormat';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import Ellipsis from "../ellipsis";


const SuccessOrderInfo = ({orderInfo, orderCode}) => {

    const orderSuccess = orderInfo;

    return (
        <>
        <div className="container pt-5 d-flex flex-wrap">
            <div className="header-order-success max-width-700 m-auto w-100 text-center">
                    <h2 className="text-center"><BsBagCheck
                            style={{
                                'marginRight': '10px',
                                'marginTop': '-10px'
                            }}
                        /> Compra finalizada con éxito.
                    </h2>
                    <div className="p-3">
                         <p>Tu código de orden es: <span id="orderId" className="font-monospace p-2">{orderCode}</span></p>
                        <p>Registrada bajo el email: <span className="font-monospace p-2">{orderSuccess.email}</span></p>
                    </div>
            </div>
            {orderSuccess.shippingMethod === "ship" ?
            <div className="box-order-success p-4 shadow-sm mb-4 col-6">
                <h5>Datos de envío</h5>
                    <div>
                        
                    </div>
            </div>
            : null}

            <div className="box-order-success p-4 shadow-sm mb-4 col-6">
                <h5>Datos de facturación</h5>
                <div>
                    {orderSuccess.billing.billingBusinessName ?
                        <p>Razón social: {orderSuccess.billing.billingBusinessName}</p>
                    : 
                        <p>Nombre: {orderSuccess.billing.billingName + " " + orderSuccess.billing.billingLastname}</p>
                    }

                    <p>Calle: {orderSuccess.billing.billingAddressStreet}</p>
                    <p>Altura: {orderSuccess.billing.billingAddressNumber}</p>
                   
                    {orderSuccess.billing.billingPersonalId ? 
                        <p>DNI/CUIL/CUIT: {orderSuccess.billing.billingPersonalId}</p>
                    :
                        null
                    }
                </div>
            </div>

            <div className="box-order-success p-4 shadow-sm mb-4 col-5">
                <h5 className="mb-4">Productos comprados</h5>
                <div>
                    <CartView cart={orderSuccess.cart}/>
                    <div className="d-flex w-100">
                        <div className="text-start w-100">
                            <p className='w-100 fw-light'>Envío:</p>
                        </div>
                        <div className="text-end w-100">
                            <p className="fw-bold">{orderSuccess.shippingData.price === 0 ? "Gratis" : "$" + priceARS.format(orderSuccess.shippingData.price)}</p>
                        </div>
                    </div>
                    <div className="d-flex w-100">
                        <div className="text-start w-100">
                            <p className='w-100 fw-light'>Total:</p>
                        </div>
                        <div className="text-end w-100">
                            <p className="fw-bold">${priceARS.format(orderSuccess.total)}</p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        </>
    )
}

export default SuccessOrderInfo;
