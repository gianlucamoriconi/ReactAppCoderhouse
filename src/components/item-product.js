import ItemCount from "./itemcount";

const ItemProduct = ({product}) => {

    return (
        <>
            <div className ="item p-4 m-2" key={product.id}>
                <div className= "item-image mb-3">
                    <img src={product.image} alt={"product"}></img>
                </div>
                <div className= "item-info">
                    <div className="item-name text-light">
                        <h4>{product.name}</h4>
                    </div>
                    <div className="item-price text-light mb-4">
                        <span className="fw-bold">${product.price}</span>
                    </div>
                    <ItemCount stock={product.stock}/>
                </div>
            </div>
        </>        
    )
}

export default ItemProduct;