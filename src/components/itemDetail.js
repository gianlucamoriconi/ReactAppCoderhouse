import ItemCount from "./itemCount";
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImagesInDetail from "./imagesInDetail";
import Variants from "./variants";
import { CartContext } from "../context/cartContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({item}) => {
    
    const { addToCart, isInCart } = useContext(CartContext);
    const {name, price, stockSimple, featuredImage, images, description, property1, value1, property2, value2, variants} = item;
    const [option1, setOption1] = useState(null);
    const [option2, setOption2] = useState(null);
    const [counter, setCounter] = useState(1);
    const [variantSelected, setVariantSelected] = useState();

    //Verificamos si tiene variantes
    let hasVariants;

    if (variants !== null && variants !== undefined) {
        hasVariants = true;
    } else {
        hasVariants = false;
    }

    /*Si tiene variantes o no*/
    useEffect( () => {
        //Si tiene valor en propiedad 1, cambiamos el null por el valor de la misma 
        if (value1 !== null){
            setOption1(document.querySelector("select#propiedad-1").value);
        }
    
        //Si tiene valor en propiedad 2, cambiamos el null por el valor de la misma 
        if (value2 !== null){
            setOption2(document.querySelector("select#propiedad-2").value);
        }

        //Si tiene variantes, identificamos el ID de la variante seleccionada
        if (hasVariants === true){

            let value1Selected;
            let value2Selected;

            if (value1 !== null){
                value1Selected = document.querySelector("select#propiedad-1").value;
            }

            if (value2 !== null){
                value2Selected = document.querySelector("select#propiedad-2").value;
            }

            variants.map((variant) => {
                
                if (value1 !== null && value2 === null){
                    if (Object.values(variant).indexOf(value1Selected) > -1){
                        setVariantSelected(variant);
                    }
                }

                if (value1 !== null && value2 !== null){
                    if ((Object.values(variant).indexOf(value1Selected) > -1) && (Object.values(variant).indexOf(value2Selected) > -1) ){
                        setVariantSelected(variant);
                    }
                }
            });
        }

    }, [option1, option2])

    
    const handleAddToCart = () => {

        let simpleOrVariant;
        
        if (hasVariants){
            simpleOrVariant = variantSelected;
        } else{
            simpleOrVariant = item;
        }
        
        const itemToCart = {
            id: simpleOrVariant.productId,
            name: item.name,
            price: simpleOrVariant.price,
            option1: option1,
            option2: option2,
            quantity: counter,
            image: item.featuredImage
        }
        addToCart(itemToCart, counter);

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
                        <ItemCount hasVariants={hasVariants ? true : false} item={item} handleAddToCart={handleAddToCart} setCounter={setCounter} stockSimple={stockSimple} counter={counter} quantity={true} buttonAddToCart={true}/>
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
            
            <ToastContainer />
        </div>    
    )
}
export default ItemDetail;