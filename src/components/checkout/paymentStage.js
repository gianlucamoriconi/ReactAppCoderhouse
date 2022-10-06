import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { CartContext } from "../../context/cartContext";
import ResumeCheckout from "./resumeCheckout";



const PaymentStage = () => {

    const { cart = {} } = useContext(CartContext);  
    

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
                        <div>
                        <h4 className="mb-4">Medios de pago</h4>
                            <div className="payment-list mb-5">
                                <div className="payment-option mb-2 shadow-sm p-4 d-flex rounded">
                                    <div className="logo-payment me-4">
                                     <svg className="accordion-section-header-icon" width="22px" height="22px" viewBox="0 0 1024 1024"><path d="M944.5 140.5C910.9 106.9 865.3 88 817.8 88H182.3c-47.5 0-93.1 18.9-126.7 52.5C21.9 174.1 3 219.7 3 267.2v456.3c0 47.5 18.9 93.1 52.5 126.7 33.6 33.6 79.2 52.5 126.7 52.5h635.5c47.5 0 93.1-18.9 126.7-52.5C978.1 816.6 997 771 997 723.5V267.2c0-47.5-18.9-93.1-52.5-126.7zm-37.1 583c0 23.8-9.4 46.6-26.2 63.4-16.8 16.8-39.6 26.2-63.4 26.2H182.3c-23.8 0-46.6-9.4-63.4-26.2-16.8-16.8-26.2-39.6-26.2-63.4V450.6h814.7v272.9zm0-362.6H92.7v-93.7c0-23.8 9.4-46.6 26.2-63.4 16.8-16.8 39.6-26.2 63.4-26.2h635.5c23.8 0 46.6 9.4 63.4 26.2 16.8 16.8 26.2 39.6 26.2 63.4v93.7z"></path></svg>                                    </div>
                                    <div className="d-flex w-100 justify-content-between">
                                        <div className="title-payment-container d-flex mt-auto mb-auto">
                                            <h6 className="m-0 title-payment">Tarjeta de crédito y débito</h6>
                                        </div>
                                        <div className="arrow-icon d-flex mt-auto mb-auto">
                                            <svg className="accordion-rotate-icon" width="13px" height="13px" viewBox="0 0 1024 1024"><path d="M779.8,562.7L339.5,1003c-28,28-73.4,28-101.4,0c-28-28-28-73.4,0-101.4L627.7,512L238.1,122.4c-28-28-28-73.4,0-101.4 c28-28,73.4-28,101.4,0l440.3,440.3c14,14,21,32.3,21,50.7C800.8,530.3,793.8,548.7,779.8,562.7z"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="payment-option mb-2 shadow-sm p-4 d-flex rounded">
                                    <div className="logo-payment me-4">
                                        <svg className="accordion-section-header-icon" width="22px" height="22px" viewBox="0 0 1024 1024"><path d="M211.1 59h578.3c115.3 0 208.8 93.5 208.8 208.8v480.6c0 115.3-93.5 208.8-208.8 208.8H211.1C95.8 957.3 2.3 863.7 2.3 748.4V267.8C2.3 152.5 95.8 59 211.1 59zm0 83.5c-69.3 0-125.3 56-125.3 125.3v480.6c0 69.3 56 125.3 125.3 125.3h578.3c69.3 0 125.3-56 125.3-125.3V267.8c0-69.3-56-125.3-125.3-125.3H211.1zm338.4 538.6v-3.3c50.9-13.5 80.8-47.7 80.8-93.5 0-84.7-83.7-106.4-119.4-115.7-58.2-15.1-58.2-28.3-58.2-35.4 0-20.7 25.7-28 47.6-28 30.6 0 38 11.7 41.1 21.8 4.8 15.9 18.5 26.6 34.1 26.6h6.9c12.1 0 23.4-5.9 30.3-15.8 6.8-9.7 8.3-22.2 4.3-33.1-11.1-31-34.8-53.6-67.5-64.7v-4.9c0-27.2-22.1-49.3-49.2-49.3-27.2 0-49.3 22.1-49.3 49.3v3.8c-50.1 14.7-80.7 50.2-80.7 94.7 0 80.8 90.1 102.4 119.7 109.5 58 13.9 58 32.4 58 41.3 0 16.7-17.8 26.7-47.7 26.7-28.1 0-45.5-8-51.6-23.7-5.8-15.1-19.3-24.8-34.4-24.8h-6.5c-12.2 0-23.6 6.1-30.5 16.2-6.8 10.1-8.2 22.8-3.6 34 12.7 30.9 39.9 53.4 77.3 64.2v4c0 27.2 22.1 49.3 49.3 49.3 27.1.1 49.2-22 49.2-49.2z"></path></svg>
                                    </div>
                                    <div className="d-flex w-100 justify-content-between">
                                        <div className="title-payment-container d-flex mt-auto mb-auto">
                                            <h6 className="m-0 title-payment">Transferencia bancaria</h6>
                                        </div>
                                        <div className="arrow-icon d-flex mt-auto mb-auto">
                                            <svg className="accordion-rotate-icon" width="13px" height="13px" viewBox="0 0 1024 1024"><path d="M779.8,562.7L339.5,1003c-28,28-73.4,28-101.4,0c-28-28-28-73.4,0-101.4L627.7,512L238.1,122.4c-28-28-28-73.4,0-101.4 c28-28,73.4-28,101.4,0l440.3,440.3c14,14,21,32.3,21,50.7C800.8,530.3,793.8,548.7,779.8,562.7z"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="payment-option mb-2 shadow-sm p-4 d-flex rounded">
                                    <div className="logo-payment me-4">
                                        <svg className="accordion-section-header-icon" width="22px" height="22px" viewBox="0 0 1024 1024"><path d="M211.1 59h578.3c115.3 0 208.8 93.5 208.8 208.8v480.6c0 115.3-93.5 208.8-208.8 208.8H211.1C95.8 957.3 2.3 863.7 2.3 748.4V267.8C2.3 152.5 95.8 59 211.1 59zm0 83.5c-69.3 0-125.3 56-125.3 125.3v480.6c0 69.3 56 125.3 125.3 125.3h578.3c69.3 0 125.3-56 125.3-125.3V267.8c0-69.3-56-125.3-125.3-125.3H211.1zm338.4 538.6v-3.3c50.9-13.5 80.8-47.7 80.8-93.5 0-84.7-83.7-106.4-119.4-115.7-58.2-15.1-58.2-28.3-58.2-35.4 0-20.7 25.7-28 47.6-28 30.6 0 38 11.7 41.1 21.8 4.8 15.9 18.5 26.6 34.1 26.6h6.9c12.1 0 23.4-5.9 30.3-15.8 6.8-9.7 8.3-22.2 4.3-33.1-11.1-31-34.8-53.6-67.5-64.7v-4.9c0-27.2-22.1-49.3-49.2-49.3-27.2 0-49.3 22.1-49.3 49.3v3.8c-50.1 14.7-80.7 50.2-80.7 94.7 0 80.8 90.1 102.4 119.7 109.5 58 13.9 58 32.4 58 41.3 0 16.7-17.8 26.7-47.7 26.7-28.1 0-45.5-8-51.6-23.7-5.8-15.1-19.3-24.8-34.4-24.8h-6.5c-12.2 0-23.6 6.1-30.5 16.2-6.8 10.1-8.2 22.8-3.6 34 12.7 30.9 39.9 53.4 77.3 64.2v4c0 27.2 22.1 49.3 49.3 49.3 27.1.1 49.2-22 49.2-49.2z"></path></svg>
                                    </div>
                                    <div className="d-flex w-100 justify-content-between">
                                        <div className="title-payment-container d-flex mt-auto mb-auto">
                                            <h6 className="m-0 title-payment">Efectivo</h6>
                                        </div>
                                        <div className="arrow-icon d-flex mt-auto mb-auto">
                                            <svg className="accordion-rotate-icon" width="13px" height="13px" viewBox="0 0 1024 1024"><path d="M779.8,562.7L339.5,1003c-28,28-73.4,28-101.4,0c-28-28-28-73.4,0-101.4L627.7,512L238.1,122.4c-28-28-28-73.4,0-101.4 c28-28,73.4-28,101.4,0l440.3,440.3c14,14,21,32.3,21,50.7C800.8,530.3,793.8,548.7,779.8,562.7z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex">
                        <Link to="/checkout/entrega" className="col-3 me-3 btn btn-secondary">Volver</Link>
                        <Link to="/checkout/pago" className="col-9 btn btn-primary">Finalizar la compra</Link>
                        </div>
                    </div>

                    {/* resumen de la orden*/}
                    <ResumeCheckout/>
                </div>
            </div>
        )

    }
}
export default PaymentStage;