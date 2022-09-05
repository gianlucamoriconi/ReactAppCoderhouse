import { useState, useEffect } from "react"
import Ellipsis from "./ellipsis";
import ItemDetail from "./itemDetail";
import { getProducts } from '../helpers/getProducts.js';
import { useParams } from 'react-router-dom'; 


const ItemDetailContainer = (props) => {
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(null)
    const {itemSlug} = useParams()


    console.log(item);
 
    useEffect(() => {
        setLoading(true)
        getProducts()
            .then( (res) =>{
                setItem( res.find((prod) => prod.slug === itemSlug))
            })

            .catch( (error) =>{
                console.log(error);
            })
            .finally( ()=> {
                setLoading(false);
            })
    }, [itemSlug])

    return (
        loading ? 
        <Ellipsis/>
        :
        <ItemDetail item={item}/>
    )
}
export default ItemDetailContainer;