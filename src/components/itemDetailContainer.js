import { useState, useEffect } from "react"
import Ellipsis from "./Ellipsis";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom'; 
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config"; 


const ItemDetailContainer = (props) => {
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState(null)
    const {itemSlug} = useParams()
 
    useEffect(() => {
        setLoading(true)


        const productosRef = collection(db, 'products')
        const q = itemSlug ? query(productosRef, where('slug', '==', itemSlug)) : productosRef;

        getDocs(q)
            .then((prod) => {
                const productsDB = prod.docs.map( (doc) => doc.data() )
                setItem(productsDB[0]);
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