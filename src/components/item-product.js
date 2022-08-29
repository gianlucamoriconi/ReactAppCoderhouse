import { useState, useEffect } from "react"


const ItemProduct = (props) => {
    
    const [counter, setCounter] = useState(1)
    const [addToCartButton, setAddToCartButton] = useState("Agregar al carrito")

    const product = {
        name: "Remera cara de Alf",
        price: 5000,
        stock: 10
    }

    let stockInProduct= product.stock;
    
    const [stock, setStock] = useState(stockInProduct)

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
            <div className ="item">
                <div className= "item-image">
                    <img></img>
                </div>
                <div className= "item-info">
                    <div className="item-name text-light">
                        <h4>{product.name}</h4>
                    </div>
                    <div className="item-price text-light mb-4">
                        <span>${product.price}</span>
                    </div>
                    <div className="item-actions" data-stock={stock}>
                        <div className="item-quantity mb-3">
                            <button onClick={handleSubtractQuantity} className="quantity-rest btn text-light me-4">-</button>
                            <span className="text-light">{counter}</span>
                            <button onClick={handleAddQuantity} className="quantity-add btn text-light ms-4">+</button>
                        </div>
                        <div><button onClick={handleAddToCart} className={stock ? "btn btn-primary" : "btn btn-primary disabled"}>{addToCartButton}</button></div>
                    </div>
                </div>
            </div>
        </>        
    )
}

export default ItemProduct;