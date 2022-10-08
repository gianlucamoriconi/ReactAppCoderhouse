
// import { collection, addDoc, getFirestore} from "firebase/firestore";
// import { db } from "../../firebase/config";
import ShippingOption from './shippingOption';


const ShippingOptionsContainer = ({options, method}) => {

    return (
        <div className='d-flex flex-wrap w-100'>
            {
                options.map((opt) => {
                    return  <ShippingOption
                                option={opt}
                                method={method}
                                key={opt.id}
                            />
                })
            }
        </div>
    )
}

export default ShippingOptionsContainer;