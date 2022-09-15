import ItemCount from "./itemCount";
import { useState, useContext, useEffect } from 'react';
import ImagesInDetail from "./imagesInDetail";
import Variants from "./variants";
import { addToCart } from '../helpers/addToCart.js';
import { CartContext } from "../context/cartContext";

const ItemDetail = ({item}) => {
    
    const { cart, setCart } = useContext(CartContext);
    console.log(cart);

    const {name, price, stock, featuredImage, images, description, property1, value1, property2, value2} = item;
    const [option1, setOption1] = useState(null);
    const [option2, setOption2] = useState(null);

    useEffect( () => {
        if (value1 !== null){
            setOption1(item.value1[0].id);
        }
    
        if (value2 !== null){
            setOption2(item.value2[0].id);
        }
    }, [])


    const [counter, setCounter] = useState(1);

    let hasVariants = false;

    if (property1 !== null){
        hasVariants = true;
    } else{
        hasVariants = false;
    }

    
    const handleAddToCart = () => {

        const itemToCart = {
            id: item.id,
            name: item.name,
            price: item.price,
            option1: option1,
            option2: option2,
            quantity: counter
        }
        console.log(itemToCart);
    }

    return (
        <div id="single-product" className="row m-0 m-md-5 mb-5 shadow bg-body rounded">
            <div className="col-12 col-lg-3 p-0">
                <div className="img-container">
                    <ImagesInDetail images={images} featuredImage={featuredImage}/>
                </div>
            </div>
            <div className="col-12 col-lg-9 ps-4">
                <div className="p-4">
                    <h2 className="fs-1 text-left">{name}</h2>
                    <p className="fs-2 fw-bold mb-5">${new Intl.NumberFormat('es-AR').format(price)}</p>  
                    {hasVariants ?
                        <Variants property1={property1} value1={value1} property2={property2} value2={value2} setOption1={setOption1} setOption2={setOption2}/>
                    : null}
                    <div className="max-width-200 mb-5">
                        <ItemCount stock={stock} name={name} item={item} addToCart={handleAddToCart} setCounter={setCounter} counter={counter} buttonAddToCart="true"/>
                    </div>
                    <hr></hr>
                    <div className="product-description ">
                        <h5 className="product-description-title fw-bold mb-3">Descripción del producto</h5>
                        <div dangerouslySetInnerHTML={{ __html: description }} />
                    </div>

                </div>
            </div>
            
           
        </div>    
    )
}
export default ItemDetail;