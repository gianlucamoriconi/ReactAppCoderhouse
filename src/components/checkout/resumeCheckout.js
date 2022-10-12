import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { OrderContext } from "../../context/orderContext";
import { priceARS } from '../../helpers/priceFormat'




const ResumeCheckout = () => {

    const { cart = {}, totalAmountInCart } = useContext(CartContext);
    const { order } = useContext(OrderContext);
    const [totalOrder, setTotalOrder] = useState();   

    
    useEffect(()=>{
        const totalInCart = totalAmountInCart();

        if (order.hasOwnProperty('shippingData')){
            setTotalOrder(totalAmountInCart() + order.shippingData.price);
        }

        else{
            setTotalOrder(totalInCart);
        }

    }, [order])
    

    return (
        <div className="p-3 p-md-5 pt-md-0 pt-0 col-md-5 col-12">
        <div id="orderResume" className="row p-3 m-0 shadow bg-body rounded">

            <div className="overflow-scroll container-items h-56 pt-3">
                {cart.length < 1 ? <div>
                    Aquí estarán los productos que llevas comprando
                </div>:
                cart.map((item, i) => (
                    <div key={i}>
                    <div className="d-flex">
                        <div className="col-3 item-cart-col-img">
                            <img className="w-100" src={item.image} alt={item.name} />
                        </div>
                        <div className='col-7 item-cart-col-info'>
                            <h3 className='item-name-cart'>{item.name}</h3>
                            <p className='item-info-cart item-price-cart'>${new Intl.NumberFormat('es-AR').format(item.price)}</p>
                            <p className='item-info-cart item-quantity-cart'>Cantidad: {item.quantity}</p>
                            {item.option1 !== null || item.option2 !== null ? 
                            <div className="variants item-quantity-cart">
                                <p> Variante:
                                {item.text !== null ?
                                <span> {item.text}</span>
                                :null}
                                </p>
                            </div>:null}
                        </div>
                    </div>
                    <hr/>
                    </div>
                ))
                }
            </div>
            <div className='pt-4 d-flex flex-wrap w-100'>
                <div className="subtotal d-flex w-100">
                    <div className="text-start w-100">
                        <span className="w-100 fs-6 fw-light">Subtotal:</span>
                    </div>
                    <div className="text-end w-100">
                        <span className="fw-bold">${priceARS.format(totalAmountInCart())}</span>
                    </div>
                </div>

                {order.hasOwnProperty('shippingData') ?
                <div className="d-flex w-100">
                    <div className="text-start w-100">
                        <span className="w-100 fs-6 fw-light">Envío:</span>
                    </div>
                    <div className="text-end w-100">
                        <span className="fw-bold">{order.shippingData.price === 0 ? "Gratis" : "+ $"+priceARS.format(order.shippingData.price)}</span>
                    </div>
                </div>
                : null}

                <hr className="w-100"/>
                <div className="d-flex w-100">
                    <div className="text-start w-100">
                        <h4 className='w-100 fw-light'>Total:</h4>
                    </div>
                    <div className="text-end w-100">
                        <h4 className="fw-bold">${priceARS.format(totalOrder)}</h4>
                    </div>
                </div>                
            </div>
        </div>
    </div>
    )
}

export default ResumeCheckout;