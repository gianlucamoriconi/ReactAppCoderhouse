import ItemCount from "./itemCount";
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImagesInDetail from "./imagesInDetail";
import Variants from "./variants";
import { CartContext } from "../context/cartContext";

const ItemDetail = ({item}) => {
    
    const { cart, addToCart, isInCart } = useContext(CartContext);
    const {name, price, stockOfProduct, featuredImage, images, description, property1, value1, property2, value2, variants} = item;
    const [option1, setOption1] = useState(null);
    const [option2, setOption2] = useState(null);
    const [stock, setStock] = useState(stockOfProduct);
    const [counter, setCounter] = useState(1);


    /*Si tiene variantes o no*/
    useEffect( () => {
        //Si tiene valor en propiedad 1, cambiamos el null por el valor de la misma 
        if (value1 !== null){
            setOption1(item.value1[0].id);
            console.log(option1);
        }
    
        //Si tiene valor en propiedad 2, cambiamos el null por el valor de la misma 
        if (value2 !== null){
            setOption2(item.value2[0].id);
            console.log(option2);
        }
    }, [option1, option2])


    /*Stock*/
    useEffect( () => {
        //Si tiene valor en propiedad 1, cambiamos el null por el valor de la misma 
        if (value1 !== null){
            setOption1(item.value1[0].id);
            console.log(option1);
        }
    
        //Si tiene valor en propiedad 2, cambiamos el null por el valor de la misma 
        if (value2 !== null){
            setOption2(item.value2[0].id);
            console.log(option2);
        }
    }, [option1, option2])


    // /* STOCK */
    // useEffect( () =>{
    //     //Si stock no es null significa que el producto no tiene variantes
    //     //Entonces cambiamos el null por item.stock
    //     //En cambio si es null, es porque el stock está en item.variants

    //     if (stock !== null){
    //         setStock(item.stock);
    //         console.log(stock);
    //     }
        
    //     //Definimos stock de productos con variantes
    //     if ((option1 !== null) && (option2 === null)) {
    //         let option1Selected = variants.filter(variant => (variant.value1[0] === option1));
    //         console.log(option1Selected);
    //         console.log(variants);
    //         console.log(option1);

    //     }

    //     if ((option1 !== null) && (option2 !== null)) {
    //         let option2Selected = variants.filter(variant => (variant.value1 === option1) && (variant.value2 === option2));
    //         console.log(option2Selected);
    //         console.log(variants);

    //     }
    // }, [option1, option2])

    let hasVariants = false;

    if (property1 !== null){
        hasVariants = true;
    } else{
        hasVariants = false;
    }

    
    const handleAddToCart = () => {
        if (option1 !== null && option2 == null){
            console.log(variants.filter(variant => (variant.value1 === option1) && (variant.value2 === option2)));
        }

        if (option1 !== null && option2 !== null){
            const variantC = variants.filter(variant => {
                return variant.value1 === option1 && variant.value2 === option2;
            });

            console.log(variantC);
        }


        const itemToCart = {
            id: item.id,
            name: item.name,
            price: item.price,
            option1: option1,
            option2: option2,
            quantity: counter
        }
        addToCart(itemToCart);
        console.log(cart);
        console.log(isInCart(item.id));
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
                        <ItemCount item={item} addToCart={handleAddToCart} setCounter={setCounter} counter={counter} quantity={true} buttonAddToCart={true}/>
                        {
                            isInCart(item.id) ?
                            <Link to="/cart" className="btn mt-3 btn-secondary">Ver carrito</Link>
                            : null
                        }
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