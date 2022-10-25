import ItemProduct from "./ItemProduct"

const ItemList = ( {products = []} ) => {

    if (products.length === 0){
        return (
            <div className="row p-3 justify-content-center">
                <p>No tenemos productos para mostrarte en esta categoría :(</p>
            </div>
        )
    } else{
        return (
            <div className="row p-3 justify-content-center">
                {products.map((prod) => {
                    return <ItemProduct product={prod} key={prod.id}/>
                })}
            </div>
        )
    }
}

export default ItemList
