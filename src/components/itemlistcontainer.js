import { useState, useEffect } from "react"
import ItemList from "./itemList"
import Ellipsis from "./ellipsis";
import { getProducts } from '../helpers/getProducts.js';
import { dataCategories } from '../helpers/categories.js';
import { useParams } from 'react-router-dom'; 


const ItemListContainer = (props) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const { categorySlug } = useParams();

    let categoryWithSlug = dataCategories.filter(cat => cat.slug === categorySlug);
    
    useEffect(() => {
        setLoading(true)
        getProducts()
            .then( (prod) =>{
                if (!categorySlug){
                    setProducts(prod);
                } else {
                    let idCat = categoryWithSlug[0].categoryId;
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

        <div className="container p-4 text-center">
            <h1 className="pt-4 text-light">{props.greeting}</h1>
            <div className="container mt-5">
                {loading ? 
                <Ellipsis/>
                :
                <ItemList products={products}/>}
            </div>
        </div>    
    )
}
export default ItemListContainer;