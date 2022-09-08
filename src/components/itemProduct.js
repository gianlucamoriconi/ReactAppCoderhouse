import ItemCount from "./itemCount";
import { Link } from 'react-router-dom';
import { dataCategories } from '../helpers/categories.js';

const ItemProduct = ({product}) => {

 
    const {id, image, name, price, stock, categories, categoriesIds, slug} = product;

    //Obtenemos el slug del producto para generar el link hacia el
    const productLink = "/producto/" + slug;
   
    //Obtenemos el slug de la categoria para generar el link hacia ella
    let productCategory = dataCategories.filter(cat => cat.categoryId === categoriesIds);
    let categoryLink = "/productos/" + productCategory[0].slug;

    return (
        <>
            <div className ="item m-2 shadow mb-5 bg-body rounded" key={id}>
                <div className= "item-image p-3">
                <Link to={productLink}>
                    <img className="rounded" src={image} alt={"product"}></img>
                </Link>
                </div>
                <div className= "item-info p-3">
                    <div className="item-name">
                        <div className="mb-3">
                        <Link to={categoryLink} className="mb-3 fw-light opacity-75 text-decoration-none "><p>{categories}</p></Link>
                        </div>
                        <Link to={productLink} className="text-decoration-none "><h4>{name}</h4></Link>
                    </div>
                    <div className="item-price-container mb-4">
                        <span className="fw-bold item-price fs-4">${price}</span>
                    </div>
                    {/* //El seeMore true es para mostrar el boton Ver más (icono de ojo) */}
                    <ItemCount stock={stock} productLink={productLink} seeMore="true"/>
                </div>
            </div>
        </>        
    )
}

export default ItemProduct;