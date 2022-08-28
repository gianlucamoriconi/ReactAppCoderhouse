
const ItemListContainer = (props) => {
    return (
        <>
        <div className="container p-4">
            <h1 className="pt-4 text-light">{props.greeting}!</h1>
            <div className="container example-container-grid">
                {/*Aca llamaremos a cada item como componente desde item-product.js */}
            </div>
        </div>
        </>        
    )
}

export default ItemListContainer;