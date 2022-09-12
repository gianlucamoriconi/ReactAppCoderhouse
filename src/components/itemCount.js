import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { BsEye } from "react-icons/bs";

const ItemCount = (props) => {
    const name = props.name;
    const addToCart = props.addToCart;
    const [counter, setCounter] = useState(1)
    const [addToCartButton, setAddToCartButton] = useState("Agregar al carrito")
    const [stock, setStock] = useState(props.stock);

    //Boton ver mas
    const seeMore = props.seeMore;
    const productLink = props.productLink;


    const handleAddQuantity = () => {
        
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
    }

    const handleAddToCart = () => {
        if (counter <= stock){
            setStock(stock - counter);
            addToCart(counter, name);
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
                <p className={stock ? "mb-2 fw-light" : " mb-2 fw-light invisible"}>Stock disponible: {stock}</p>
                <div className="item-quantity mb-3">
                    <button onClick={handleSubtractQuantity} className={stock ? "quantity-rest btn  me-4" : "disabled quantity-rest btn  me-4 border-0"}>-</button>
                    <span className={stock ? "quantity" : " quantity"}>{counter}</span>
                    <button onClick={handleAddQuantity} className={stock ? "quantity-add btn  ms-4" : "quantity-add btn  ms-4 disabled border-0"}>+</button>
                </div>
                <div className="d-flex">
                    <button onClick={handleAddToCart} className={stock ? "btn btn-primary addtocart w-100 fw-bold" : "btn btn-primary addtocart w-100 disabled border-0 fw-bold"}>{addToCartButton}</button>
                    {seeMore === "true" ?
                    <Link to={productLink} className="btn btn-primary addtocart border-0 ms-2"><BsEye /></Link>
                    : null}
                </div>
            </div>
        </>        
    )
}

export default ItemCount;
