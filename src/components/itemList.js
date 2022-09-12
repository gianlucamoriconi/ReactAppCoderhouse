import ItemProduct from "./itemProduct"

const ItemList = ( {products = []} ) => {
    return (
        <div className="row gap-5 justify-content-center">
            {products.map((prod) => {
                return <ItemProduct product={prod} key={prod.id}/>
            })}
        </div>
    )
}

export default ItemList
