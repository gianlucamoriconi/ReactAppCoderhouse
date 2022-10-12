


const CartView = ({cart}) => {

    return(
        <>
        {cart.map((item, i) => (
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
        ))}
        </>
    )
}

export default CartView;