import ItemCount from "./ItemCount";
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImagesInDetail from "./ImagesInDetail";
import Variants from "./Variants";
import { CartContext } from "../context/cartContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({item}) => {
    
    const { addToCart, isInCart, cart } = useContext(CartContext);
    const {name, price, featuredImage, images, description, property1, value1, property2, value2, variants} = item;
    const [option1, setOption1] = useState(value1);
    const [option2, setOption2] = useState(value2);
    const hasVariants = Boolean(variants);
    const [counter, setCounter] = useState(1);
    const [variantSelected, setVariantSelected] = useState();
    const [stock, setStock] = useState(Boolean(variants) === false ? item.stock : undefined);

    //Calcula el stock que queda del item teniendo en cuenta lo agregado al carrito
    function calculateStockWithCartContext(product){
        if (cart.length > 0){

            if (hasVariants) {
                if (isInCart(product.productId) === true){
                    cart.map((itemInCart) => {
                        if (itemInCart.id === product.productId){
                            let newStock = product.stock - itemInCart.quantity;
                            setStock(newStock);
                        }
                    });
                } else{
                    setStock(product.stock);
                }
            } else {
                if (isInCart(product.id) === true){
                    cart.map((itemInCart) => {
                        if (itemInCart.id === product.id){
                            let newStock = product.stock - itemInCart.quantity;
                            setStock(newStock);
                        }
                    });
                } else{
                    setStock(product.stock);
                }
            }
        } else {
            setStock(product.stock);
        }
    }


    /*Si tiene variantes o no*/
    useEffect( () => {
        
        //Si tiene variantes, identificamos el ID de la variante seleccionada
        if (hasVariants === true){

            //Si tiene valor en propiedad 1, cambiamos el null por el valor de la misma 
            if (value1 !== null){
                setOption1(document.querySelector("select#propiedad-1").value);
            }
        
            //Si tiene valor en propiedad 2, cambiamos el null por el valor de la misma 
            if (value2 !== null){
                setOption2(document.querySelector("select#propiedad-2").value);
            }

            variants.map((variant) => {
                
                
                if (option1 !== null && option2 === null){

                    if (option1 !== "needSelect"){
                        if (Object.values(variant).indexOf(option1) > -1){
                            setVariantSelected(variant);
                            calculateStockWithCartContext(variant)
                        }
                    } else{
                        setVariantSelected(undefined);
                    }
                }

                if (option1 !== null && option2 !== null){
                    if (option1 !== "needSelect" && option2 !== "needSelect") {
                        if ((Object.values(variant).indexOf(option1) > -1) && (Object.values(variant).indexOf(option2) > -1) ){
                            setVariantSelected(variant);
                            calculateStockWithCartContext(variant);
                        }
                    } else{
                        setVariantSelected(undefined);
                    }
                }
            });
        } else{
            setStock(stock);
            calculateStockWithCartContext(item);
        }

    }, [option1, option2, stock, cart])
    
    const handleAddToCart = () => {
    
        if (hasVariants){
            if (variantSelected){
                const itemToCart = {
                    id: variantSelected.productId,
                    name: item.name,
                    price: variantSelected.price,
                    option1: option1,
                    option2: option2,
                    quantity: counter,
                    image: item.featuredImage,
                    text: variantSelected.text
                }
                addToCart(itemToCart, counter);
            } else{
                alert(`Te falta elegir la variante del ${item.name}` );
            }

        } else{

            const itemToCart = {
                id: item.id,
                name: item.name,
                price: item.price,
                option1: option1,
                option2: option2,
                quantity: counter,
                image: item.featuredImage

            }
            addToCart(itemToCart, counter);
        }
        
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
                        <ItemCount hasVariants={hasVariants ? true : false} item={item} handleAddToCart={handleAddToCart} setCounter={setCounter} stock={stock} counter={counter} quantity={true} buttonAddToCart={true}/>
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