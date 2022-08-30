import ItemCount from "./itemcount";
const ItemProduct = (props) => {

    let stock = props.stock


    return (
        <>
            <div className ="item p-4 m-2" key={props.id}>
                <div className= "item-image">
                    {/* <img></img> */}
                </div>
                <div className= "item-info">
                    <div className="item-name text-light">
                        <h4>{props.name}</h4>
                    </div>
                    <div className="item-price text-light mb-4">
                        <span>${props.price}</span>
                    </div>
                    <ItemCount stock={stock}/>
                </div>
            </div>
        </>        
    )
}

export default ItemProduct;