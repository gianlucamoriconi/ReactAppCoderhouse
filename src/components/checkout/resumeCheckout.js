import { useContext } from "react";
import { CartContext } from "../../context/cartContext";



const ResumeCheckout = () => {

    const { cart = {}, totalAmountInCart } = useContext(CartContext);    

    return (
        <div className="p-5 pt-0 col-5">
        <div id="orderResume" className="row p-3 m-0 shadow bg-body rounded">

            <div>
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
            <div className='pt-4 d-flex w-100'>
                <h4 className='text-end w-100'>Total: ${new Intl.NumberFormat('es-AR').format(totalAmountInCart())}</h4>
            </div>
        </div>
    </div>
    )
}

export default ResumeCheckout;