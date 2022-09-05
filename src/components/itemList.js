import ItemProduct from "./itemProduct"

const ItemList = ( {products = []} ) => {
    return (
        <div>
            {products.map((prod) => {
                return <ItemProduct product={prod} key={prod.id}/>
            })}
        </div>
    )
}

export default ItemList
