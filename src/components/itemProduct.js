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
            <div className ="item p-4 m-2" key={id}>
                <div className= "item-image mb-3">
                <Link to={productLink}>
                    <img src={image} alt={"product"}></img>
                </Link>
                </div>
                <div className= "item-info">
                    <div className="item-name text-light">
                        <div className="mb-3">
                        <Link to={categoryLink} className="mb-3 fw-light opacity-75 text-decoration-none text-light"><p>{categories}</p></Link>
                        </div>
                        <Link to={productLink} className="text-decoration-none text-light"><h4>{name}</h4></Link>
                    </div>
                    <div className="item-price text-light mb-4">
                        <span className="fw-bold">${price}</span>
                    </div>
                    <ItemCount stock={stock} productLink={productLink}/>
                </div>
            </div>
        </>        
    )
}

export default ItemProduct;