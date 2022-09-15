import { useState, useEffect } from "react"
import ItemList from "./itemList"
import Ellipsis from "./ellipsis";
import { getProducts } from '../helpers/getProducts.js';
import { dataCategories } from '../helpers/categories.js';
import { useParams } from 'react-router-dom'; 


const ItemListContainer = (props) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [categoryTitle, setCategoryTitle] = useState("Todos los productos");
    const [categoryImage, setCategoryImage] = useState("https://media.idownloadblog.com/wp-content/uploads/2019/09/Apple-Innovation-Event-banner.jpg");
    const { categorySlug } = useParams();
    

    let backgroundImage = {
        backgroundImage: 'url(' + categoryImage + ')',
        height: '200px',
        backgroundSize: "cover",
        backgroundPosition: "center"
      };
    let categoryWithSlug = dataCategories.filter(cat => cat.slug === categorySlug);
    categoryWithSlug = categoryWithSlug[0];


    useEffect(() => {
        setLoading(true)
        setCategoryTitle("");

        getProducts()
            .then( (prod) =>{
                if (!categorySlug){
                    setProducts(prod);
                    setCategoryTitle("Todos los productos");
                    setCategoryImage("https://media.idownloadblog.com/wp-content/uploads/2019/09/Apple-Innovation-Event-banner.jpg");

                } else {
                    let idCat = categoryWithSlug.categoryId;
                    setCategoryTitle(categoryWithSlug.categoryName)
                    setCategoryImage(categoryWithSlug.categoryImage)
                    prod.filter((prodFilter) => prodFilter.categoriesIds === idCat)
                    
                    setProducts( prod.filter((prodFilter) => prodFilter.categoriesIds === idCat ))
                }
                
            })

            .catch( (error) =>{
                console.log(error);
            })
            .finally( ()=> {
                setLoading(false);
            })
    }, [categorySlug])

    return (

        <div className="text-center container-products overflow-hidden mb-5">
            <div className="category-title-container d-flex justify-content-center" style={backgroundImage}>
                <div className="back-opacity d-flex h-200 w-100">
                    <h1 className="d-flex m-auto text-light justify-content-center">{categoryTitle}</h1> 
                </div>
            </div>
            <div className="mt-5">
                {loading ? 
                <Ellipsis/>
                :
                <ItemList products={products}/>}
            </div>
        </div>    
    )
}
export default ItemListContainer;
