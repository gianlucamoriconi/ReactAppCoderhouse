import { useState, useEffect } from "react"

const ItemCount = (props) => {
    
    const [counter, setCounter] = useState(1)
    const [addToCartButton, setAddToCartButton] = useState("Agregar al carrito")
    const [stock, setStock] = useState(props.stock)   


    const handleAddQuantity = () => {
        console.log(counter);
        setCounter(counter + 1)
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
        }
    }, [stock])

    return (
        <>
            <div className="item-actions" data-stock={stock}>
                <div className="item-quantity mb-3">
                    <button onClick={handleSubtractQuantity} className="quantity-rest btn text-light me-4">-</button>
                    <span className="text-light quantity">{counter}</span>
                    <button onClick={handleAddQuantity} className="quantity-add btn text-light ms-4">+</button>
                </div>
                <div><button onClick={handleAddToCart} className={stock ? "btn btn-primary" : "btn btn-primary disabled"}>{addToCartButton}</button></div>
            </div>
        </>        
    )
}

export default ItemCount;