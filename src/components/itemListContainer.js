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
    const { categorySlug } = useParams();
    
    let categoryWithSlug = dataCategories.filter(cat => cat.slug === categorySlug);


    useEffect(() => {
        setLoading(true)
        setCategoryTitle("");

        getProducts()
            .then( (prod) =>{
                if (!categorySlug){
                    setProducts(prod);
                    setCategoryTitle("Todos los productos");

                } else {
                    let idCat = categoryWithSlug[0].categoryId;
                    setCategoryTitle(categoryWithSlug[0].categoryName)
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

        <div className="p-4 text-center">
            <h1 className="pt-4">{categoryTitle}</h1> 
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
