import ItemCount from "./itemCount";


const ItemDetail = ({item}) => {

    const {name, price, stock, image, description} = item;


    return (
        <div className="row m-0 m-5 shadow bg-body rounded">
            <div className="col-12 col-lg-3 p-0">
                <div className="img-container">
                    <img className="w-100 rounded img-product" src={image} alt={"product"}></img>
                </div>
            </div>
            <div className="col-12 col-lg-9 ps-4">
                <div className="p-4">
                    <h2 className="fs-1 text-left">{name}</h2>
                    <p className="fs-2 fw-bold">${price}</p>
                    <div className="max-width-200 mb-5">
                        <ItemCount stock={stock} name={name} item={item}/>
                    </div>
                    <hr></hr>
                    <div className="product-description ">
                        <h5 className="product-description-title fw-bold mb-3">Descripción del producto</h5>
                        <p className="fw-light">{description}</p>
                    </div>

                </div>
            </div>
            
           
        </div>    
    )
}
export default ItemDetail;