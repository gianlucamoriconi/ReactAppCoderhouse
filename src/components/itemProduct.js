import ItemCount from "./itemCount";
import { Link } from 'react-router-dom';
import { dataCategories } from '../helpers/categories.js';
import { addToCart } from '../helpers/addToCart.js';

const ItemProduct = ({product}) => {

 
    const {id, featuredImage, images, name, price, stock, categories, categoriesIds, slug} = product;

    //Obtenemos el slug del producto para generar el link hacia el
    const productLink = "/producto/" + slug;
   
    //Obtenemos el slug de la categoria para generar el link hacia ella
    let productCategory = dataCategories.filter(cat => cat.categoryId === categoriesIds);
    let categoryLink = "/categoria/" + productCategory[0].slug;

    return (
        <>
            <div className ="item p-0 col-6 col-md-4 col-lg-3 bg-body rounded" key={id}>
                <div className= "item-image">
                <Link to={productLink}>
                    <img className="rounded" src={featuredImage} alt={"product"}></img>
                </Link>
                </div>
                <div className= "item-info p-3">
                    <div className="item-info">
                        <div className="mb-3">
                        <Link to={categoryLink} className="mb-3 fw-light opacity-75 text-decoration-none item-category"><p>{categories}</p></Link>
                        </div>
                        <Link to={productLink} className="text-decoration-none"><h4 className="item-name">{name}</h4></Link>
                    </div>
                    <div className="item-price-container mb-4">
                        <span className="fw-bold item-price">${new Intl.NumberFormat('es-AR').format(price)}</span>
                    </div>
                    {/* //El seeMore true es para mostrar el boton Ver más (icono de ojo) */}
                    <ItemCount stock={stock} name={name} productLink={productLink} addToCart={addToCart} quantity={false}  buttonAddToCart={false} seeMore={true}/>
                </div>
            </div>
        </>        
    )
}

export default ItemProduct;