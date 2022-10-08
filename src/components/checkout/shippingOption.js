
// import { collection, addDoc, getFirestore} from "firebase/firestore";
// import { db } from "../../firebase/config";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BiCheck } from "react-icons/bi";
import { IconContext } from "react-icons";


const ShippingOption = ({option, method}) => {

    return (
        <div className="payment-option mb-2 shadow-sm p-4 d-flex rounded col-12">
            <label htmlFor={method} className="js-radio-button-label">
                <input type="radio" name={method} value={option.id} id={option.id}/>
               
                <div className="shipping-icon-container d-flex flex-wrap p-0">
                    <div className="d-flex flex-wrap w-100 p-2 mb-1">
                        {option.carrier ?
                        <div className="shipping-option-carrier-container p-0 me-2">
                            <p className="shipping-option-carrier mb-0 fs-6">{option.carrier}</p>
                        </div>
                        :null}
                        <div className="shipping-option-name-container p-0 me-3">
                            <p className="shipping-option-name mb-0 fs-6">{option.name}</p>
                        </div>
                        <div className="shipping-option-price-container p-0">
                            <p className="shipping-option-price mb-0 fs-6 fw-bold">${option.price}</p>
                        </div>
                    </div>
                    <div className="ps-2 pb-0 pt-0 pe-0">
                        <p className="fs-6 fw-light fst-italic p-0 m-0">{option.deliveryTimeInText}</p>
                    </div>
                </div>
                <span className="icon-check">
                    <IconContext.Provider value={{ className: "icon-check-svg", width: 50 }}>
                        <BiCheck/>
                    </IconContext.Provider>
                </span>
            </label>
        </div>
    )
}

export default ShippingOption;