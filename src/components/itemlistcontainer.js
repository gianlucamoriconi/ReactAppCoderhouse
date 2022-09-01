import { useState, useEffect } from "react"
// import ItemProduct from "./item-product"
import ItemList from "./itemlist"
import { products } from "./products"


const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 2000)
    });
}
    

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then( (prod) =>{
                setProducts(prod);
            })

            .catch( (error) =>{
                console.log(error);
            })
    }, [])

    return (
        <div className="container p-4">
            <h1 className="pt-4 text-light">{props.greeting}</h1>
            <div className="container mt-5">
                <ItemList products={products}/> 

                {/* {products.map((prod) => {
                    let id = prod.id;
                    let stockInProduct = prod.stock;
                    let productName = prod.name;
                    let productPrice = prod.price;
                    let productImage = prod.image;
                    return <ItemProduct key={id} name={productName} stock={stockInProduct} price={productPrice} image={productImage} />;
                })} */}
            </div>
        </div>    
    )
}
export default ItemListContainer;