import ItemCount from "./itemCount";

const ItemDetail = ({item}) => {

    const {name, id, price, stock, image, categories, description} = item;


    return (
        <div className="row p-0 m-0">
            <div className="col-12 col-md-5 p-0">
                <div>
                    <img className="w-100" src={image} alt={"product"}></img>
                </div>
            </div>
            <div className="col-12 col-md-7 text-light p-0">
                <div className="p-4">
                    <h2 className="text-light text-left">{name}</h2>
                    <p className="fs-3 fw-bold">${price}</p>
                    <div className="product-description">{description}</div>
                    <div className="max-width-200">
                        <ItemCount stock={stock}/>
                    </div>
                </div>
            </div>
            
           
        </div>    
    )
}
export default ItemDetail;