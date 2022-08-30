import ItemProduct from "./item-product";

const products = [{
    id: 1,
    name: "Remera cara de Alf",
    price: 5000,
    stock: 10
},
{
    id: 2,
    name: "Buzo de Alf",
    price: 7000,
    stock: 3   
},
{
    id: 3,
    name: "Reloj",
    price: 1500,
    stock: 1   
},
{
    id: 4,
    name: "Remera Thumbs up",
    price: 2500,
    stock: 4   
},
{
    id: 5,
    name: "Pijama",
    price: 8000,
    stock: 22   
},
{
    id: 6,
    name: "Sueter talle único",
    price: 3500,
    stock: 6   
}]



const ItemListContainer = (props) => {
    return (

        <div className="container p-4">
            <h1 className="pt-4 text-light">{props.greeting}</h1>
            <div className="container mt-5">
                {/*Aca llamaremos a cada item como componente desde item-product.js */}
                
                { products.map((prod) => {
                    let id = prod.id;
                    let stockInProduct= prod.stock;
                    let productName= prod.name;
                    let productPrice= prod.price;
                    return <ItemProduct key={id} name={productName} stock={stockInProduct} price={productPrice} />
                }) }
            </div>
        </div>    
    )
}

export default ItemListContainer;