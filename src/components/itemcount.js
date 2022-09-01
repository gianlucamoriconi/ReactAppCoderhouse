import { useState, useEffect } from "react"

const ItemCount = (props) => {
    
    const [counter, setCounter] = useState(1)
    const [addToCartButton, setAddToCartButton] = useState("Agregar al carrito")
    const [stock, setStock] = useState(props.stock)   


    const handleAddQuantity = () => {
        console.log(counter);
        
        if (counter === stock ){
            console.log("No es posible sumar más unidades porque no hay suficiente stock");
        } else{
            setCounter(counter + 1)
        }
    }

    const handleSubtractQuantity = () => {
        if (counter > 1){
            setCounter(counter - 1)
        }
        console.log(counter);
    }

    const handleAddToCart = () => {
        if (counter <= stock){
            setStock(stock - counter);
        } else{
            alert("No hay suficiente stock. Prueba agregar menos unidades")
        }
    }

    useEffect( () => {
        if (stock === 0){
            setAddToCartButton("Sin stock")
            setCounter("-")
        }
    }, [stock])


    return (
        <>
            <div className="item-actions" data-stock={stock}>
                <p className={stock ? "text-light mb-2 fw-light" : "text-light mb-2 fw-light invisible"}>Stock disponible: {stock}</p>
                <div className="item-quantity mb-3">
                    <button onClick={handleSubtractQuantity} className={stock ? "quantity-rest btn text-light me-4" : "disabled quantity-rest btn text-light me-4 border-0"}>-</button>
                    <span className={stock ? "text-light quantity" : "text-light quantity"}>{counter}</span>
                    <button onClick={handleAddQuantity} className={stock ? "quantity-add btn text-light ms-4" : "quantity-add btn text-light ms-4 disabled border-0"}>+</button>
                </div>
                <div><button onClick={handleAddToCart} className={stock ? "btn btn-primary" : "btn btn-primary disabled border-0"}>{addToCartButton}</button></div>
            </div>
        </>        
    )
}

export default ItemCount;