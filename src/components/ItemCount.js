import { Link } from 'react-router-dom';

const ItemCount = (props) => {
    const { handleAddToCart, quantity, seeMore, buttonAddToCart, productLink, setCounter, counter, stock } = props;

    const handleAddQuantity = () => {
        
        if (counter === stock ){
        } else{
            setCounter(counter + 1)
        }
    }

    const handleSubtractQuantity = () => {
        if (counter > 1){
            setCounter(counter - 1)
        }
    }

    const handleStock = () => {
        if (counter <= stock){
        } else{
            alert("No hay suficiente stock. Prueba agregar menos unidades")
        }
    }



    return (
        <>
            <div className="item-actions" data-stock={stock}>
                {quantity === true ?
                <div>
                    <p className={stock ? "mb-2 fw-light" : " mb-2 fw-light invisible"}>Stock disponible: {stock}</p>

                        <div className="item-quantity mb-3">
                        <button onClick={handleSubtractQuantity} className={stock ? "quantity-rest btn  me-4" : "disabled quantity-rest btn  me-4 border-0"}>-</button>
                        <span className="quantity">{stock === undefined || stock < 1 ? "-" : counter}</span>
                        <button onClick={handleAddQuantity} className={stock ? "quantity-add btn  ms-4" : "quantity-add btn  ms-4 disabled border-0"}>+</button>
                    </div>
                </div>: null}
                <div className="d-flex">
                    {buttonAddToCart === true ?
                        <>
                        {stock > 0 ?
                            <button onClick={() => { handleAddToCart(); handleStock();}} className={stock ? "btn btn-primary addtocart w-100 fw-bold" : "btn btn-primary addtocart w-100 disabled border-0 fw-bold"}>Agregar al carrito</button>
                            :
                            <button className="disabled addtocart btn btn-primary w-100 fw-light">{stock === undefined ? "Selecciona una opción": "Sin stock"}</button>
                        }
                        </>
                        :null
                    }
                    {seeMore === true ?
                    <Link to={productLink} className="btn btn-primary addtocart border-0 w-100 ms-2 see-more-button">Ver producto</Link>
                    : null}
                </div>
            </div>
        </>        
    )
}

export default ItemCount;
