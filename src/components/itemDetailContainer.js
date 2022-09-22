import { useState, useEffect } from "react"
import Ellipsis from "./ellipsis";
import ItemDetail from "./itemDetail";
// import { getProducts } from '../helpers/getProducts.js';
import { useParams } from 'react-router-dom'; 
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config"; 


const ItemDetailContainer = (props) => {
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(null)
    const {itemSlug} = useParams()
 
    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'products')
        getDocs(productosRef)
            .then((resp) => {
                const productsDB = resp.docs.map( (doc) => doc.data() )
                setItem( productsDB.find((prod) => prod.slug === itemSlug))
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